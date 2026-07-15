import { useEffect, useRef } from 'react';

interface Props {
  /** HTML с одним .accent-word — как в HOME.*.hero.h1Html */
  html: string;
  as?: 'h1' | 'h2';
  className?: string;
}

/**
 * Кинетический заголовок: variable wght слегка дышит от скролла.
 * Без letter-by-letter / typewriter.
 */
export default function KineticHeadline({ html, as = 'h1', className = 'display kinetic-headline noise-hover' }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--kinetic-wght', '800');
      return;
    }

    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = 1 - Math.min(Math.max((r.top + r.height * 0.35) / vh, 0), 1);
      const wght = Math.round(720 + progress * 220); // 720 → 940
      el.style.setProperty('--kinetic-wght', String(wght));
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const Tag = as;
  return <Tag ref={ref} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
