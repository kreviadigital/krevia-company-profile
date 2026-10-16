"use client";

/**
 * High-performance, mathematically interpolated smooth scroll.
 * Uses easeInOutQuart curve for a cinematic, luxurious glide down the page.
 */
export function smoothScrollTo(
  target: string | HTMLElement,
  options?: { duration?: number; offset?: number; onComplete?: () => void }
) {
  if (typeof window === "undefined") return;

  const duration = options?.duration ?? 950; // ~1 second luxurious glide
  const offset = options?.offset ?? 80; // Offset for sticky navbar

  let targetElement: HTMLElement | null = null;
  if (typeof target === "string") {
    const cleanId = target.replace(/^#/, "");
    targetElement = document.getElementById(cleanId) || document.querySelector(target);
  } else {
    targetElement = target;
  }

  if (!targetElement) return;

  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const elementRect = targetElement.getBoundingClientRect();
  const targetPosition = elementRect.top + startPosition - offset;
  const distance = targetPosition - startPosition;

  // Already at target
  if (Math.abs(distance) < 2) {
    if (options?.onComplete) options.onComplete();
    return;
  }

  let startTime: number | null = null;
  let isCancelled = false;

  // Ultra-luxurious cubic-bezier / quartic deceleration curve
  const easeInOutQuart = (t: number): number => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };

  // If the user manually intervenes by scrolling, cancel gracefully
  const cancelEvents = ["wheel", "touchmove"];
  const handleUserCancel = () => {
    isCancelled = true;
    cancelEvents.forEach((ev) => window.removeEventListener(ev, handleUserCancel));
  };
  cancelEvents.forEach((ev) => window.addEventListener(ev, handleUserCancel, { passive: true }));

  function step(currentTime: number) {
    if (isCancelled) return;
    if (startTime === null) startTime = currentTime;

    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuart(progress);

    window.scrollTo(0, Math.round(startPosition + distance * ease));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      window.scrollTo(0, Math.round(targetPosition));
      cancelEvents.forEach((ev) => window.removeEventListener(ev, handleUserCancel));
      if (options?.onComplete) options.onComplete();
    }
  }

  requestAnimationFrame(step);
}
