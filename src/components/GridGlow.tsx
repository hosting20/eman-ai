import { useEffect, useRef } from 'react';

/**
 * Full-page overlay that re-draws the background grid in a brighter tint,
 * masked to a circle that follows the mouse — so the grid lines "light up"
 * around the cursor. Hidden by default (mask off-screen) and on touch devices.
 */
export default function GridGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        // pageX/pageY: document coordinates, matching the absolute overlay
        el.style.setProperty('--gx', `${e.pageX}px`);
        el.style.setProperty('--gy', `${e.pageY}px`);
      });
    };
    const leave = () => {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty('--gx', '-999px');
      el.style.setProperty('--gy', '-999px');
    };
    window.addEventListener('mousemove', move);
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return <div ref={ref} className="grid-glow" aria-hidden="true" />;
}
