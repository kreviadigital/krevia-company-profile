"use client";

import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SectionEdge } from "./SectionEdge";
import { BracketButton } from "./BracketButton";
import { useSectionReveal } from "./useSectionReveal";
import { SECTION_EDGES, DARK_SURFACE, ERP_CONTAINER } from "@/lib/erp-visual";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Penutup halaman: satu ajakan, dua jalur.
 *
 * Section ini **bukan** kartu di tengah halaman seperti versi lama
 * (`rounded-3xl` navy di dalam section terang). Sekarang ia blok navy penuh
 * selebar layar dengan notch di tepi atas, jadi ia menyambung ke footer navy di
 * bawahnya seolah satu bidang — dan halaman berakhir dengan transisi warna
 * yang disengaja, bukan kartu yang mengambang.
 *
 * Notch atas dipakai supaya transisi dari pricing (terang) ke sini terbaca
 * sebagai bentuk, bukan sebagai garis lurus mendadak.
 */
export function ErpClosing() {
  const rootRef = useRef<HTMLElement>(null);
  useSectionReveal(rootRef);

  const waUrl = SITE_CONFIG.getWhatsappUrl(
    "Halo Krevia Digital, saya ingin berkonsultasi mengenai implementasi ERP modular untuk bisnis saya.",
  );

  return (
    <section
      id="kontak-erp"
      ref={rootRef}
      aria-label="Ajakan konsultasi teknis"
      className={`relative scroll-mt-24 pb-16 pt-20 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32 ${DARK_SURFACE.section}`}
    >
      <SectionEdge spec={SECTION_EDGES.closingTop} />

      <div className={ERP_CONTAINER}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between gap-6 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gray-300 sm:text-xs">
              <span>Mulai dari sini</span>
              <span className="tabular-nums">(44 modul)</span>
            </div>
            <div data-rule className="mt-3 h-px w-full bg-white/25 sm:mt-4" />

            <h2 className="mt-8 text-[clamp(2rem,5.4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:mt-10">
              Butuh alur kerja
              <br />
              yang sangat <span className={DARK_SURFACE.accent}>spesifik?</span>
            </h2>

            <p
              data-fade
              className={`mt-6 max-w-[52ch] text-base leading-relaxed sm:text-lg ${DARK_SURFACE.muted}`}
            >
              Tim rekayasa Krevia siap memetakan kebutuhan unik bisnis Anda —
              mulai dari integrasi basis data lama, modul kustom, sampai alur
              persetujuan yang belum ada di katalog.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-5 lg:items-end">
            <ul
              data-fade
              className={`w-full space-y-3 border-t pt-6 lg:max-w-sm ${DARK_SURFACE.hairline}`}
            >
              {[
                "Pemetaan kebutuhan tanpa biaya",
                "Estimasi cakupan & jadwal tertulis",
                "Pendampingan implementasi di lokasi",
              ].map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-2.5 text-xs leading-relaxed sm:text-sm ${DARK_SURFACE.muted}`}
                >
                  <ArrowRight className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${DARK_SURFACE.accent}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div data-fade className="flex w-full flex-wrap items-center gap-2.5 lg:justify-end">
              <BracketButton href="/kontak" tone="accent">
                Jadwalkan konsultasi
              </BracketButton>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3.5 text-xs font-bold text-white transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none sm:text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
