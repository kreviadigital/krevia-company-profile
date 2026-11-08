"use client";

import { useRef } from "react";
import { Building2, Wrench, Store, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { useSectionReveal } from "./useSectionReveal";
import { ERP_CONTAINER } from "@/lib/erp-visual";

/**
 * Solusi sektor lokal.
 *
 * Redesign dari versi kartu tiga kolom. Yang berubah:
 *
 * 1. **Bukan tiga kartu sejajar lagi.** Tiap sektor jadi satu baris penuh
 *    dengan nomor besar di kiri, judul di tengah, lalu masalah -> solusi
 *    berdampingan di kanan. Tiga kartu sejajar memaksa tinggi yang sama untuk
 *    isi yang panjangnya berbeda, dan itu membuat dua dari tiga kartu punya
 *    ruang kosong besar di bawah.
 * 2. **Masalah dan solusi dibaca sebagai alur, bukan dua kotak.** Ada panah di
 *    antaranya, dan warnanya turun dari `warning` ke `secondary` supaya
 *    arahnya jelas.
 * 3. **Hairline, bukan bayangan.** Mengikuti `ErpOverview`: tidak ada
 *    `shadow-*`, kedalaman dibentuk garis 1px.
 */

const INDUSTRIES = [
  {
    no: "01",
    title: "Hotel & Penginapan",
    icon: Building2,
    tag: "Hospitality & Properti",
    problem:
      "Reservasi dari chat WhatsApp dan telepon sering bentrok, status kamar kosong tidak terpantau secara real-time.",
    solution:
      "Satu dashboard reservasi terintegrasi, pembaruan status kamar real-time, dan rekap laporan okupansi harian otomatis.",
    modules: ["Reservasi", "Housekeeping", "Okupansi"],
  },
  {
    no: "02",
    title: "Bengkel & Otomotif",
    icon: Wrench,
    tag: "Otomotif Plat BM",
    problem:
      "Riwayat servis kendaraan pelanggan tercecer di nota fisik, stok suku cadang cepat habis tanpa peringatan batas minimum.",
    solution:
      "Database riwayat servis per nomor polisi, otomasi pengingat servis berkala, dan kartu stok suku cadang real-time.",
    modules: ["Work Order", "Riwayat Plat", "Suku Cadang"],
  },
  {
    no: "03",
    title: "Kontraktor & Ritel UMKM",
    icon: Store,
    tag: "Konstruksi & Distribusi",
    problem:
      "Pengeluaran material proyek dicatat manual terpisah dari nota kasir, pencocokan arus kas memakan waktu berhari-hari.",
    solution:
      "Pencatatan nota material berbasis proyek, sistem kasir langsung terhubung ke buku kas, dan visibilitas margin seketika.",
    modules: ["RAB Proyek", "Kasir POS", "Buku Kas"],
  },
];

export function IndustrySolutions() {
  const rootRef = useRef<HTMLElement>(null);
  useSectionReveal(rootRef);

  return (
    <section
      id="solusi"
      ref={rootRef}
      aria-label="Solusi ERP untuk sektor lokal"
      className="relative scroll-mt-24 bg-gray-50 py-16 sm:py-24 lg:py-28"
    >
      <div className={ERP_CONTAINER}>
        {/* ===== Header ===== */}
        <header>
          <div className="flex items-end justify-between gap-6 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gray-500 sm:text-xs">
            <span>Solusi sektor</span>
            <span className="tabular-nums">(02 — 04)</span>
          </div>
          <div data-rule className="mt-3 h-px w-full bg-primary sm:mt-4" />

          <div className="mt-8 grid gap-8 sm:mt-10 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-14">
            <h2 className="text-[clamp(2rem,5.6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-gray-900 lg:col-span-7">
              Friksi operasional
              <br />
              yang <span className="text-secondary">nyata</span> di Riau.
            </h2>
            <p
              data-fade
              className="max-w-[42ch] text-base leading-relaxed text-gray-700 sm:text-lg lg:col-span-5"
            >
              Tiga sektor yang paling sering kami dampingi di Pekanbaru dan
              sekitarnya — dengan masalah yang berulang, dan solusi yang sudah
              terbukti dipakai.
            </p>
          </div>
        </header>

        {/* ===== Daftar sektor ===== */}
        <ol data-stagger className="mt-12 sm:mt-16 lg:mt-20">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <li
                key={ind.no}
                className="group border-t border-gray-300 py-8 first:border-t-0 first:pt-0 sm:py-10 lg:py-12"
              >
                <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
                  {/* Kiri: nomor, ikon, judul, tag */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-4xl font-extrabold leading-[0.8] tracking-[-0.06em] text-gray-300 tabular-nums transition-colors duration-300 group-hover:text-primary sm:text-5xl lg:text-6xl">
                        {ind.no}
                      </span>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-300 transition-colors duration-300 group-hover:border-primary sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5 text-secondary sm:h-6 sm:w-6" />
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold leading-[1.12] tracking-[-0.03em] text-gray-900 sm:text-2xl lg:mt-6 lg:text-3xl">
                      {ind.title}
                    </h3>
                    <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gray-500 sm:text-xs">
                      {ind.tag}
                    </p>
                  </div>

                  {/* Kanan: masalah -> solusi */}
                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:col-span-8 lg:gap-8">
                    <div>
                      <div className="flex items-center gap-2 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-warning sm:text-xs">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>Masalah</span>
                      </div>
                      <p className="mt-2.5 text-sm leading-relaxed text-gray-500 sm:text-base">
                        {ind.problem}
                      </p>
                    </div>

                    <div className="relative">
                      {/* Penanda arah: garis + panah di antara dua kolom.
                          Disembunyikan di ponsel karena kolomnya bertumpuk. */}
                      <span
                        aria-hidden="true"
                        className="absolute -left-4 top-1 hidden text-gray-300 sm:block lg:-left-6"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </span>

                      <div className="flex items-center gap-2 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-secondary sm:text-xs">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                        <span>Solusi Krevia</span>
                      </div>
                      <p className="mt-2.5 text-sm font-medium leading-relaxed text-gray-900 sm:text-base">
                        {ind.solution}
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {ind.modules.map((mod) => (
                          <li
                            key={mod}
                            className="rounded-full border border-gray-300 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-gray-500 sm:text-[0.6875rem]"
                          >
                            {mod}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
