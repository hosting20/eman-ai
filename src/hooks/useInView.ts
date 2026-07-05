import { useEffect, useRef, useState } from 'react';

/**
 * True once the element is at least `enterAt` visible in the viewport.
 * Resets to false only when the element fully leaves the viewport, so the
 * reveal animation replays on every new scroll-in (but never mid-view).
 */
export function useInView<T extends HTMLElement>(enterAt = 0.55) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= enterAt) setInView(true);
        else if (!entry.isIntersecting) setInView(false);
      },
      { threshold: [0, enterAt] },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [enterAt]);

  return { ref, inView };
}
