const HEADER_OFFSET = 72;
const MIN_DURATION = 600;
const MAX_DURATION = 1700;

// Curva suave: arranca y frena gradualmente, sin picos de velocidad
const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

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

  // La duracion crece con la distancia (raiz cuadrada) para que los trayectos
  // largos no se sientan bruscos ni los cortos lentos
  const duration = Math.min(
    MAX_DURATION,
    Math.max(MIN_DURATION, 400 + Math.sqrt(Math.abs(distance)) * 17)
  );
  const start = performance.now();

  if (frame !== null) cancelAnimationFrame(frame);

  const step = (now: number) => {
    const progress = Math.min(1, (now - start) / duration);
    window.scrollTo({
      top: startY + distance * easeInOutSine(progress),
      behavior: "instant",
    });
    frame = progress < 1 ? requestAnimationFrame(step) : null;
  };

  frame = requestAnimationFrame(step);
}
