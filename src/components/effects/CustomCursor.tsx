import { useEffect } from 'react';

/** Кастомный курсор: точка + кольцо. Только pointer:fine, уважает reduced-motion. */
export default function CustomCursor() {
  useEffect(() => {
    const fine = matchMedia('(pointer: fine)').matches;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'lc-cursor';
    ring.className = 'lc-cursor__ring';
    document.body.append(dot, ring);

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let hover = false;
    let raf = 0;

    const isInteractive = (t: EventTarget | null) => {
      if (!(t instanceof Element)) return false;
      return !!t.closest('a, button, [role="button"], summary, input, textarea, select, .fil-node');
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      hover = isInteractive(e.target);
    };
    const onLeave = () => {
      dot.classList.add('is-hidden');
      ring.classList.add('is-hidden');
    };
    const onEnter = () => {
      dot.classList.remove('is-hidden');
      ring.classList.remove('is-hidden');
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      dot.style.transform = `translate3d(${x}px,${y}px,0)`;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      if (hover) {
        dot.style.width = '6px';
        dot.style.height = '6px';
        dot.style.margin = '-3px 0 0 -3px';
        ring.style.width = '52px';
        ring.style.height = '52px';
        ring.style.margin = '-26px 0 0 -26px';
      } else {
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.margin = '-5px 0 0 -5px';
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.margin = '-18px 0 0 -18px';
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
