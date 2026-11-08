"use client";

import { useRef } from "react";
import { ArrowRight, ShieldCheck, Zap, Layers, Compass, Database } from "lucide-react";
import { BracketButton } from "./BracketButton";
import { useSectionReveal } from "./useSectionReveal";
import { ERP_CONTAINER } from "@/lib/erp-visual";
import { DisplayLine } from "@/components/ui/DisplayLine";
import {
  DISPLAY_HEADLINE,
  DISPLAY_HEADLINE_LEADING,
} from "@/lib/typography";

/**
 * Hero katalog ERP.
 *
 * Seperti `ErpOverview` di beranda, hero ini **terang**, bukan navy. Itu bukan
 * pilihan estetika: `Navbar` di repo ini transparan dengan teks gelap
 * (`text-gray-700`) dan hanya berubah jadi kapsul putih setelah 24px scroll.
 * Hero navy akan membuat navigasi tak terbaca sampai pengguna mulai
 * menggulir — jadi blok navy sengaja ditaruh di section kedua, tempat notch
 * bisa bekerja sebagai batas.
 *
 * Isi dipindahkan dari hero lama, tetapi disusun ulang: nomor besar + label
 * kategori di atas, headline display tiga baris yang di-reveal per baris, lalu
 * tiga fakta berangka di bawah garis. Gaya ini mengikuti `ErpOverview`.
 */

/** Tiga fakta ringkas. Angkanya ada di `PRODUCT.md`/`pricingData.ts`. */
const FACTS = [
  { value: 44, suffix: "+", label: "Modul terpetakan" },
  { value: 8, suffix: "", label: "Rumpun kapabilitas" },
  { value: 1, suffix: "", label: "Basis data bersama" },
];

const COMMITMENTS = [
  {
    icon: ShieldCheck,
    title: "Kemandirian data",
    body: "Basis data transaksi sepenuhnya milik perusahaan Anda, dapat diekspor sewaktu-waktu.",
  },
  {
    icon: Zap,
    title: "Tanpa bloatware",
    body: "Aktifkan hanya modul yang relevan dengan tim lapangan, sisanya menyusul.",
  },
  {
    icon: Layers,
    title: "Skema bertahap",
    body: "Mulai dari Rp 399 rb/bulan, naik ke skala enterprise tanpa migrasi ulang.",
  },
];

/**
 * Satu baris headline di dalam masker; teks naik dari bawah garis potong.
 *
 * Geometrinya dipakai bersama dengan `ErpOverview` di beranda lewat
 * `DisplayLine`, supaya kedua headline display punya ukuran dan masker yang
 * persis sama.
 */
const Line = DisplayLine;

export function ErpHero() {
  const rootRef = useRef<HTMLElement>(null);
  useSectionReveal(rootRef);

  return (
    <section
      id="hero"
      ref={rootRef}
      aria-label="Katalog platform ERP Krevia Digital"
      className="relative scroll-mt-24 bg-gray-50 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24"
    >
      <div className={ERP_CONTAINER}>
        {/* Baris atas: label seksi + hitungan, dipisah hairline. */}
        <div className="flex items-end justify-between gap-6 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gray-500 sm:text-xs">
          <span>Produk / Platform ERP</span>
          <span className="tabular-nums">(01 — 04)</span>
        </div>
        <div data-rule className="mt-3 h-px w-full bg-primary sm:mt-4" />

        {/* ===== Headline ===== */}
        <h1 className={`mt-8 font-extrabold tracking-[-0.045em] text-gray-900 sm:mt-12 lg:mt-16 ${DISPLAY_HEADLINE} ${DISPLAY_HEADLINE_LEADING}`}>
          <Line>Sistem operasional</Line>
          <Line>tanpa keterikatan</Line>
          <Line>
            <span className="text-secondary">vendor.</span>
          </Line>
        </h1>

        {/* ===== Keterangan + fakta ===== */}
        <div className="mt-8 grid gap-10 sm:mt-12 lg:mt-16 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-6">
            <p
              data-fade
              className="max-w-[46ch] text-base leading-relaxed text-gray-700 sm:text-lg"
            >
              Krevia Digital menghadirkan 44 modul terpadu lintas sektor. Mulai
              dari modul yang dibutuhkan hari ini, lalu hubungkan sistem baru
              secara organik seiring pertumbuhan skala bisnis Anda.
            </p>

            <div data-fade className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <BracketButton href="#capabilities">Jelajahi 44 modul</BracketButton>
              <BracketButton href="#pricing" tone="light">
                Simulasi biaya
              </BracketButton>
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-0 lg:col-span-6">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                data-fade
                className="flex flex-col gap-2.5 border-l border-gray-300 pl-4 sm:gap-3 sm:pl-6"
              >
                <dt className="order-2 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-gray-500 sm:text-xs sm:tracking-[0.16em]">
                  {fact.label}
                </dt>
                <dd className="order-1 text-3xl font-extrabold leading-none tracking-[-0.04em] text-gray-900 tabular-nums sm:text-5xl lg:text-6xl">
                  <span data-count={fact.value}>{fact.value}</span>
                  {fact.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ===== Tiga komitmen ===== */}
        <ul
          data-stagger
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gray-300 bg-gray-300 sm:mt-16 md:grid-cols-3 lg:mt-20"
        >
          {COMMITMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="bg-white p-6 sm:p-7 lg:p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                  <Icon className="h-5 w-5 text-secondary" />
                </span>
                <h2 className="mt-5 text-sm font-bold tracking-tight text-gray-900 sm:text-base">
                  {item.title}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>

        {/* Penanda navigasi seksi. Nomor yang sama dipakai di tiap section
            berikutnya, jadi pembaca tahu posisinya di halaman. */}
        <nav
          aria-label="Navigasi bagian halaman"
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-gray-500 sm:mt-16 sm:text-xs"
        >
          <span className="text-gray-900">Bagian</span>
          {[
            { href: "#solusi", no: "02", label: "Solusi sektor" },
            { href: "#capabilities", no: "03", label: "Katalog modul" },
            { href: "#pricing", no: "04", label: "Biaya" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
            >
              <span className="tabular-nums text-gray-400">{item.no}</span>
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-primary">
                {item.label}
              </span>
              <ArrowRight className="h-3 w-3 -rotate-45 opacity-0 transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        {/* Garis penutup + satu catatan kecil, mengikuti pola "closing" di
            ErpOverview supaya hero tidak menggantung. */}
        <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-gray-300 pt-6 text-xs text-gray-500 sm:mt-16">
          <Compass className="h-3.5 w-3.5 text-secondary" />
          <span>Berbasis di Pekanbaru, Riau — melayani implementasi se-Indonesia.</span>
          <span className="hidden text-gray-300 sm:inline">/</span>
          <span className="inline-flex items-center gap-1.5">
            <Database className="h-3.5 w-3.5 text-secondary" />
            <span>Satu basis data untuk semua modul.</span>
          </span>
        </div>
      </div>
    </section>
  );
}
