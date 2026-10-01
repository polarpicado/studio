const HEADER_OFFSET = 72;
const MIN_DURATION = 450;
const MAX_DURATION = 1100;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let frame: number | null = null;

export function smoothScrollTo(href: string) {
  const targetY =
    href === "#"
      ? 0
      : (() => {
          const el = document.querySelector(href);
          if (!el) return null;
          return el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        })();
  if (targetY === null) return;

  const startY = window.scrollY;
  const distance = Math.max(0, targetY) - startY;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: startY + distance, behavior: "instant" });
    return;
  }

  // La duracion crece con la distancia para que trayectos largos no se sientan bruscos
  const duration = Math.min(
    MAX_DURATION,
    Math.max(MIN_DURATION, Math.abs(distance) * 0.45)
  );
  const start = performance.now();

  if (frame !== null) cancelAnimationFrame(frame);

  const step = (now: number) => {
    const progress = Math.min(1, (now - start) / duration);
    window.scrollTo({
      top: startY + distance * easeInOutCubic(progress),
      behavior: "instant",
    });
    frame = progress < 1 ? requestAnimationFrame(step) : null;
  };

  frame = requestAnimationFrame(step);
}
