"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis with bespoke floating inertia physics
    const lenis = new Lenis({
      lerp: 0.075, // Silky exponential dampening for mousewheel & trackpad
      wheelMultiplier: 0.9, // Balanced wheel impulse for luxurious float without jerkiness
      touchMultiplier: 1.5,
      smoothWheel: true,
      syncTouch: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      respectReducedMotion: false, // Ensures Windows doesn't snap to instant/un-eased
      autoRaf: true,
    });

    // Expose lenis globally for universal access across components
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // Intercept all internal anchor clicks across the entire document
    const handleAnchorClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.getElementById(href.replace(/^#/, ""));
        if (targetElement) {
          e.preventDefault();
          e.stopPropagation();

          // Trigger high-precision cinematic smooth scroll via Lenis
          smoothScrollTo(targetElement, {
            duration: 1500,
            offset: 80,
          });

          // Update URL hash gently without page jump
          window.history.pushState(null, "", href);
        }
      }
    };

    // Use capture phase so we always intercept before default browser hash jump
    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}
