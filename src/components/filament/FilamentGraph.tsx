/**
 * FilamentGraph — React-остров граф-секции «Филамент» (spec §10, Вариант B).
 *
 * - Данные узлов приходят пропсом из src/data/filament.ts (тот же источник
 *   рендерит статический аккордеон и светлый грид в Filament.astro).
 * - Сцена строится только на >=768px (matchMedia + listener); на мобиле остров
 *   возвращает null — контент отдаёт статический аккордеон снаружи острова.
 * - Дрейф/пульс — ТОЛЬКО CSS-классы из filament.css (детерминированный разброс
 *   от индекса узла, без Date.now/Math.random). JS-анимация одна — параллакс
 *   framer-motion (общий rAF библиотеки), только transform.
 */
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent, MouseEvent } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { filamentText, type FilamentLang, type FilamentNode } from '../../data/filament';
import { FILAMENT_UI, localizeHref } from '../../data/filament-i18n';

export interface FilamentGraphProps {
  nodes: FilamentNode[];
  lang?: FilamentLang;
}

interface Pt {
  x: number;
  y: number;
}

interface EdgeDef {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** id узлов на концах ('core' для ядра) — для подсветки смежных рёбер */
  a: string;
  b: string;
}

/** центр сцены в координатах viewBox 0–100 (= проценты) */
const C = 50;
/** затухание градиента ребра к ОБОИМ концам: 0 → .5 → .5 → 0 (spec §2) */
const EDGE_STOPS: ReadonlyArray<readonly [number, number]> = [
  [0, 0],
  [0.3, 0.5],
  [0.7, 0.5],
  [1, 0],
];

const round = (v: number) => Math.round(v * 1000) / 1000;

export default function FilamentGraph({ nodes, lang = 'es' }: FilamentGraphProps) {
  // Мобайл (<768px): сцену не строим вовсе — ни DOM, ни SVG (SPEC-ISSUE 3 спеки
  // решён здесь). SSR-выход тоже null: фолбэк-аккордеон статичен снаружи острова.
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setDesktop(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  // ВАЖНО: не возвращаем null — при client:visible Astro наблюдает ДЕТЕЙ
  // <astro-island> через IntersectionObserver; пустой SSR-выход означает
  // «наблюдать нечего» и остров никогда не гидратируется. Пустой span
  // (display:contents у island не мешает, спан невидим) даёт observer'у цель.
  if (!desktop)
    return <span aria-hidden="true" style={{ display: 'block', width: 1, height: 1 }} />;
  return <FilamentScene nodes={nodes} lang={lang} />;
}

function FilamentScene({ nodes, lang }: { nodes: FilamentNode[]; lang: FilamentLang }) {
  const ui = FILAMENT_UI[lang];
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, ''); // безопасный префикс id градиентов
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  /** id узла под hover/focus → подсветка смежных рёбер (.hi) */
  const [hi, setHi] = useState<string | null>(null);
  /** id узла с открытой карточкой (aria-expanded="true") */
  const [activeId, setActiveId] = useState<string | null>(null);
  /** узкое место «разожжено» кликом — навсегда (spec §5) */
  const [ignited, setIgnited] = useState(false);

  /* --- параллакс-глубина (DESIGN-SYSTEM §8.3 / spec §10):
     слой рёбер+внешнего кольца y ±14 (0.04), внутреннего ±28 (0.08), ядро — 0 */
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start end', 'end start'],
  });
  const yOutMv = useTransform(scrollYProgress, [0, 1], [14, -14]);
  const yInMv = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const yOut = reduce ? 0 : yOutMv;
  const yIn = reduce ? 0 : yInMv;

  /* --- геометрия (spec §2): два эллиптических кольца вокруг ядра (50,50) --- */
  const { sols, inds, pos, edges } = useMemo(() => {
    const sols = nodes.filter((n) => n.ring === 'sol');
    const inds = nodes.filter((n) => n.ring === 'ind');
    const pos: Record<string, Pt> = {};
    sols.forEach((n, i) => {
      const a = ((i * 60 - 90) * Math.PI) / 180; // внутреннее: шаг 60°, старт −90°
      pos[n.id] = { x: round(C + 24 * Math.cos(a)), y: round(C + 28 * Math.sin(a)) };
    });
    inds.forEach((n, i) => {
      const a = ((i * 45 - 67.5) * Math.PI) / 180; // внешнее: шаг 45°, старт −67.5°
      pos[n.id] = { x: round(C + 42 * Math.cos(a)), y: round(C + 41 * Math.sin(a)) };
    });
    const edges: EdgeDef[] = [];
    sols.forEach((n) => {
      // ядро → решения
      edges.push({ x1: C, y1: C, x2: pos[n.id].x, y2: pos[n.id].y, a: 'core', b: n.id });
    });
    inds.forEach((n) => {
      // решения → отрасли
      n.links.forEach((l) => {
        const p = pos[l];
        if (!p) return;
        edges.push({ x1: p.x, y1: p.y, x2: pos[n.id].x, y2: pos[n.id].y, a: l, b: n.id });
      });
    });
    return { sols, inds, pos, edges };
  }, [nodes]);

  const active = activeId ? (nodes.find((n) => n.id === activeId) ?? null) : null;

  /* --- открытие карточки: фокус на неё (role="dialog", tabindex=-1) --- */
  useEffect(() => {
    if (activeId) cardRef.current?.focus();
  }, [activeId]);

  const activate = (n: FilamentNode) => {
    if (n.bottleneck) setIgnited(true); // «разжигаем» — навсегда
    setActiveId(n.id);
  };

  /* --- закрытие: вернуть фокус на узел-источник (spec §7) --- */
  const close = () => {
    if (!activeId) return;
    const src = btnRefs.current[activeId];
    setActiveId(null);
    src?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') close();
  };

  /* клик по пустому холсту закрывает (слои pointer-events:none —
     пустой клик приходит в сцену) */
  const onStageClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
  };

  const renderNode = (n: FilamentNode, idx: number) => {
    const q = pos[n.id];
    const dim = !!n.bottleneck;
    const open = activeId === n.id;
    // дрейф: детерминированный разброс 12–16s + отрицательный delay от индекса
    const style = {
      left: `${q.x}%`,
      top: `${q.y}%`,
      animationDelay: `${-(idx * 1.7)}s`,
      '--dd': `${12 + ((idx * 137) % 5)}s`,
    } as CSSProperties;
    return (
      <button
        key={n.id}
        type="button"
        ref={(el) => {
          btnRefs.current[n.id] = el;
        }}
        className={
          `fil-node fil-node--${n.ring}` +
          (dim ? ' fil-node--dim' : '') +
          (dim && ignited ? ' is-lit' : '')
        }
        style={style}
        aria-expanded={open}
        aria-controls="fil-card"
        aria-label={`${n.label[lang]}${dim ? ui.bottleneckSuffix : '.'}${ui.nodeHint}`}
        onClick={() => activate(n)}
        onMouseEnter={() => setHi(n.id)}
        onMouseLeave={() => setHi(null)}
        onFocus={() => setHi(n.id)}
        onBlur={() => setHi(null)}
      >
        <span className="dot" aria-hidden="true" />
        <span className="lbl">{n.label[lang]}</span>
      </button>
    );
  };

  return (
    <div className="fil-wrap" ref={wrapRef} onKeyDown={onKeyDown}>
      <div
        className={'fil-stage' + (reduce ? ' fil-reduced' : '')}
        role="group"
        aria-label={ui.mapAria}
        onClick={onStageClick}
      >
        {/* внутреннее кольцо (решения) — ПЕРВЫМ в DOM: порядок Tab = 6 решений →
            8 отраслей (spec §7); поверх рёбер через z-index (filament.css) */}
        <motion.div className="fil-layer fil-layer--in" style={{ y: yIn }} data-plx="0.08">
          {sols.map((n, i) => renderNode(n, i))}
        </motion.div>

        {/* слой рёбер + внешнее кольцо (отрасли): глубина 0.04 */}
        <motion.div className="fil-layer" style={{ y: yOut }} data-plx="0.04">
          <svg
            className="fil-edges"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              {edges.map((e, i) => (
                <linearGradient
                  key={i}
                  id={`${uid}g${i}`}
                  gradientUnits="userSpaceOnUse"
                  x1={e.x1}
                  y1={e.y1}
                  x2={e.x2}
                  y2={e.y2}
                >
                  {EDGE_STOPS.map(([off, op], j) => (
                    <stop key={j} offset={off} stopColor="var(--lc-glow-cyan)" stopOpacity={op} />
                  ))}
                </linearGradient>
              ))}
            </defs>
            {edges.map((e, i) => {
              // quadratic-кривая с изгибом 18% к центру (spec §2)
              const mx = (e.x1 + e.x2) / 2;
              const my = (e.y1 + e.y2) / 2;
              const cx = round(mx + (C - mx) * 0.18);
              const cy = round(my + (C - my) * 0.18);
              const lit = hi !== null && (hi === e.a || hi === e.b);
              return (
                <path
                  key={i}
                  className={'fil-edge' + (lit ? ' hi' : '')}
                  d={`M${e.x1} ${e.y1} Q${cx} ${cy} ${e.x2} ${e.y2}`}
                  stroke={`url(#${uid}g${i})`}
                />
              );
            })}
          </svg>
          {inds.map((n, i) => renderNode(n, sols.length + i))}
        </motion.div>

        {/* ядро litcore: мотив кита, статично (без параллакса), pointer-events:none */}
        <div className="fil-core" aria-hidden="true">
          <span className="core" style={{ '--core-size': '96px' } as CSSProperties}>
            <span className="orbit" />
          </span>
          <span className="fil-core-lbl mono">litcore.ai</span>
        </div>
      </div>

      {/* Карточка сбоку: плейсхолдер до выбора узла, dialog после */}
      <aside className="fil-aside">
        <div className="card fil-ph" hidden={!!active}>
          <p className="mono fil-tag">{ui.phTag}</p>
          <h3>{ui.phH3}</h3>
          <p className="muted">{ui.phText}</p>
        </div>
        <div
          className="card fil-card"
          id="fil-card"
          role="dialog"
          aria-labelledby="fil-card-title"
          tabIndex={-1}
          hidden={!active}
          ref={cardRef}
        >
          <button className="fil-close" type="button" aria-label={ui.close} onClick={close}>
            ×
          </button>
          <p className="mono fil-tag">{active?.tag}</p>
          <h3 id="fil-card-title">{active?.label[lang]}</h3>
          <p className="muted">{active ? filamentText(active.pain, lang) : ''}</p>
          <a
            className="btn btn--primary"
            href={active ? localizeHref(active.href, lang) : localizeHref('/es/soluciones/', lang)}
          >
            {active?.ring === 'ind' ? ui.goSector : ui.goSolution}
          </a>
        </div>
      </aside>
    </div>
  );
}
