"use client";

import { useRef } from "react";
import { ArrowRight, Check, ShieldCheck, Database, RefreshCw, Headphones } from "lucide-react";
import { PRICING_PLANS, PricingPlan } from "@/lib/pricingData";
import { SITE_CONFIG } from "@/lib/constants";
import { handleNavClick } from "@/lib/smoothScroll";
import { useSectionReveal } from "@/components/erp/useSectionReveal";
import { ERP_CONTAINER } from "@/lib/erp-visual";

/**
 * Blok biaya.
 *
 * Tiga perubahan besar dari versi kartu sebelumnya:
 *
 * 1. **Kartu diganti kolom.** Tiga kartu `rounded-3xl` dengan bayangan
 *    membuat halaman terasa seperti daftar SaaS generik, dan `shadow-2xl` di
 *    kartu tengah bersaing dengan notch navy di atasnya. Sekarang tiga paket
 *    adalah kolom yang dipisah hairline — sama seperti tabel harga di dokumen
 *    teknis — dan hanya paket unggulan yang dibalik jadi navy agar tetap
 *    terbaca sebagai pilihan utama.
 * 2. **Katalog 44 modul dihapus dari sini.** Versi lama menaruh tabel
 *    pencarian 44 modul di dalam section harga, padahal section capabilities
 *    di atasnya sudah memuat daftar yang sama lengkap dengan tab rumpun. Dua
 *    daftar untuk data yang sama hanya membingungkan; di sini cukup tautan ke
 *    sana.
 * 3. **Baris "semua paket termasuk" ditambahkan.** Empat hal yang berlaku di
 *    semua tingkat (infrastruktur, pembaruan, kepemilikan data, dukungan)
 *    sebelumnya tersebar sebagai teks kecil di banner; sekarang jadi satu
 *    baris yang bisa dipindai.
 */

const INCLUDED = [
  { icon: Database, label: "Infrastruktur cloud terkelola" },
  { icon: RefreshCw, label: "Pembaruan sistem otomatis" },
  { icon: ShieldCheck, label: "Data 100% milik Anda" },
  { icon: Headphones, label: "Dukungan teknis berbahasa Indonesia" },
];

export function PricingSection() {
  const rootRef = useRef<HTMLElement>(null);
  useSectionReveal(rootRef);

  return (
    <section
      id="pricing"
      ref={rootRef}
      aria-label="Skema biaya langganan ERP"
      className="relative scroll-mt-24 bg-gray-50 py-16 sm:py-24 lg:py-28"
    >
      <div className={ERP_CONTAINER}>
        {/* ===== Header ===== */}
        <header>
          <div className="flex items-end justify-between gap-6 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gray-500 sm:text-xs">
            <span>Skema biaya</span>
            <span className="tabular-nums">(04 — 04)</span>
          </div>
          <div data-rule className="mt-3 h-px w-full bg-primary sm:mt-4" />

          <div className="mt-8 grid gap-8 sm:mt-10 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-14">
            <h2 className="text-[clamp(2rem,5.6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-gray-900 lg:col-span-7">
              Bayar untuk modul
              <br />
              yang <span className="text-secondary">dipakai.</span>
            </h2>
            <p
              data-fade
              className="max-w-[42ch] text-base leading-relaxed text-gray-700 sm:text-lg lg:col-span-5"
            >
              Mulai dari modul yang dibutuhkan hari ini, lalu kembangkan seiring
              pertumbuhan operasional — tanpa mengganti seluruh platform dan
              tanpa migrasi ulang.
            </p>
          </div>
        </header>

        {/* ===== Tiga paket ===== */}
        <div
          data-stagger
          className="mt-12 grid overflow-hidden rounded-2xl border border-gray-300 bg-gray-300 sm:mt-16 lg:mt-20 lg:grid-cols-3 lg:gap-px"
        >
          {PRICING_PLANS.map((plan: PricingPlan) => {
            const isFeatured = plan.featured;
            const waUrl = SITE_CONFIG.getWhatsappUrl(plan.prefilledMessage);

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between p-6 sm:p-8 lg:p-9 ${
                  isFeatured
                    ? "bg-primary text-white"
                    : "bg-gray-50 text-gray-900"
                }`}
              >
                <div>
                  {/* Nama + lencana */}
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className={`text-xl font-black tracking-[-0.02em] sm:text-2xl ${
                        isFeatured ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[0.5625rem] font-extrabold uppercase tracking-[0.1em] ${
                          isFeatured
                            ? "bg-accent text-primary"
                            : "border border-gray-300 text-gray-500"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Harga */}
                  <div
                    className={`mt-6 flex items-baseline gap-1.5 border-b pb-5 ${
                      isFeatured ? "border-white/15" : "border-gray-300"
                    }`}
                  >
                    <span
                      className={`text-[clamp(1.75rem,3.4vw,2.5rem)] font-extrabold leading-none tracking-[-0.04em] tabular-nums ${
                        isFeatured ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.priceFormatted}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isFeatured ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {plan.billingPeriod}
                    </span>
                  </div>

                  <p
                    className={`mt-5 text-xs leading-relaxed sm:text-sm ${
                      isFeatured ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Batas pemakaian — disusun sebagai daftar berlabel, bukan
                      kotak abu-abu, supaya angkanya yang menonjol. */}
                  <dl
                    className={`mt-6 space-y-3 border-t pt-5 text-xs ${
                      isFeatured ? "border-white/15" : "border-gray-300"
                    }`}
                  >
                    {[
                      { label: "Pengguna", value: plan.userLimit },
                      { label: "Unit usaha", value: plan.projectLimit },
                      { label: "Penyimpanan", value: plan.storageLimit },
                    ].map((row) => (
                      <div key={row.label} className="flex flex-col gap-0.5">
                        <dt
                          className={`text-[0.5625rem] font-bold uppercase tracking-[0.14em] ${
                            isFeatured ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {row.label}
                        </dt>
                        <dd
                          className={`font-semibold leading-snug ${
                            isFeatured ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* Fitur */}
                  <div
                    className={`mt-6 border-t pt-5 ${
                      isFeatured ? "border-white/15" : "border-gray-300"
                    }`}
                  >
                    <p
                      className={`text-[0.5625rem] font-bold uppercase tracking-[0.14em] ${
                        isFeatured ? "text-accent" : "text-gray-500"
                      }`}
                    >
                      Termasuk
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check
                            className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                              isFeatured ? "text-accent" : "text-success"
                            }`}
                          />
                          <span
                            className={`text-xs leading-relaxed ${
                              isFeatured ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Aksi */}
                <div
                  className={`mt-8 border-t pt-5 ${
                    isFeatured ? "border-white/15" : "border-gray-300"
                  }`}
                >
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex w-full items-center justify-between gap-3 rounded-xl px-5 py-3.5 text-xs font-bold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:text-sm ${
                      isFeatured
                        ? "bg-accent text-primary hover:bg-[#22a8dd] focus-visible:ring-white/70 focus-visible:ring-offset-primary"
                        : "border border-gray-300 bg-white text-gray-900 hover:border-gray-400 hover:bg-gray-100 focus-visible:ring-secondary/50 focus-visible:ring-offset-gray-50"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <p
                    className={`mt-2.5 text-center text-[0.625rem] ${
                      isFeatured ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Konsultasi langsung tanpa komitmen awal
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== Semua paket termasuk ===== */}
        <div
          data-fade
          className="mt-6 rounded-2xl border border-gray-300 bg-white px-5 py-5 sm:px-7"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.5625rem] font-bold uppercase tracking-[0.16em] text-gray-500">
              Semua paket termasuk
            </p>
            <ul className="grid gap-x-6 gap-y-2.5 sm:flex sm:flex-wrap sm:items-center">
              {INCLUDED.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-[0.6875rem] font-medium text-gray-700 sm:text-xs"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-secondary" />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ===== Tautan ke katalog ===== */}
        <div
          data-fade
          className="mt-6 flex flex-col gap-4 border-t border-gray-300 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-[58ch] text-xs leading-relaxed text-gray-500 sm:text-sm">
            Ingin memeriksa modul mana yang masuk ke tiap paket? Katalog lengkap
            44 modul beserta status kesiapannya ada di bagian sebelumnya.
          </p>
          <a
            href="#capabilities"
            onClick={(e) => handleNavClick(e, "#capabilities")}
            className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 sm:text-sm"
          >
            <span>Buka katalog 44 modul</span>
            <ArrowRight className="h-3.5 w-3.5 -rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
