"use client";

import { useEffect } from "react";
import type { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Koreografi masuk untuk satu section halaman ERP.
 *
 * Semua section memakai kontrak atribut yang sama supaya koreografinya seragam
 * dan tidak perlu ditulis ulang:
 *
 *   [data-line]   — satu baris headline di dalam masker; naik dari bawah.
 *   [data-rule]   — hairline; tumbuh dari kiri (`scaleX` 0 -> 1).
 *   [data-fade]   — elemen lain; naik + memudar masuk.
 *   [data-count]  — angka; menghitung naik 0 -> nilai akhir.
 *   [data-stagger]— wadah; anak-anaknya masuk berurutan.
 *   [data-band]   — pita transisi section; ikut memudar masuk paling awal.
 *
 * Semua trigger memakai `once: true` supaya elemen tidak berkedip keluar-masuk
 * saat pengguna menggulir bolak-balik — ini halaman katalog, bukan naratif.
 *
 * `prefers-reduced-motion` ditangani lewat `gsap.matchMedia()`: kalau aktif,
 * blok animasi tidak pernah dibuat sama sekali, jadi elemen tetap di posisi
 * akhir dan angka tetap tertulis di HTML server.
 */
export function useSectionReveal(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(root);

      const bands = q("[data-band]");
      if (bands.length) {
        gsap.from(bands, {
          autoAlpha: 0,
          y: 12,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: { trigger: root, start: "top 92%", once: true },
        });
      }

      const rules = q("[data-rule]");
      if (rules.length) {
        gsap.from(rules, {
          scaleX: 0,
          transformOrigin: "0% 50%",
          duration: 1.1,
          ease: "power3.inOut",
          stagger: 0.06,
          scrollTrigger: { trigger: root, start: "top 85%", once: true },
        });
      }

      const lines = q("[data-line]");
      if (lines.length) {
        gsap.from(lines, {
          yPercent: 115,
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.09,
          scrollTrigger: { trigger: root, start: "top 82%", once: true },
        });
      }

      const fades = q("[data-fade]");
      if (fades.length) {
        gsap.from(fades, {
          y: 26,
          autoAlpha: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        });
      }

      q("[data-stagger]").forEach((group) => {
        const kids = gsap.utils.toArray<HTMLElement>(":scope > *", group);
        if (!kids.length) return;
        gsap.from(kids, {
          y: 34,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: { trigger: group, start: "top 88%", once: true },
        });
      });

      q("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        if (!Number.isFinite(target)) return;
        const proxy = { v: 0 };
        el.textContent = "0";
        gsap.to(proxy, {
          v: target,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 94%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(proxy.v));
          },
        });
      });
    });

    // Halaman ini punya banyak teks display; tinggi elemen berubah setelah
    // font selesai dimuat, dan ScrollTrigger yang mengukur sebelum itu akan
    // salah titik mulai. Ukur ulang sekali setelah font siap.
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      mm.revert();
    };
  }, [rootRef]);
}
