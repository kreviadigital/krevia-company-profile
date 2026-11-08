"use client";

import React, { useRef, useState } from "react";
import {
  Coins,
  Users,
  Truck,
  Warehouse,
  TrendingUp,
  FolderKanban,
  Factory,
  ShieldCheck,
  Check,
  Clock,
  Wrench,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Building2,
  FileSpreadsheet,
  BadgeCheck,
} from "lucide-react";
import {
  ERP_SUITE_METADATA,
  ERP_MODULE_CATALOG,
  ErpSuiteMetadata,
  ErpModule,
  ModuleStatus,
} from "@/lib/pricingData";
import { handleNavClick } from "@/lib/smoothScroll";
import { SectionEdge } from "./SectionEdge";
import { BracketButton } from "./BracketButton";
import { useSectionReveal } from "./useSectionReveal";
import { SECTION_EDGES, DARK_SURFACE, ERP_CONTAINER } from "@/lib/erp-visual";

/**
 * Katalog 44 modul — blok navy halaman ini.
 *
 * Ini satu-satunya section bergelap penuh, dan sengaja: ia memisahkan hero dan
 * daftar sektor (terang) dari blok biaya (terang), jadi halaman punya satu
 * "jantung" visual di tengah alih-alih bidang terang sepanjang tiga layar.
 *
 * Batasnya digambar oleh `SectionEdge` di kedua tepi — navy yang naik ke hero
 * dan navy yang turun ke pricing. Section ini `relative` **tanpa** z-index,
 * karena pita tepi bawah butuh `z-20` untuk menimpa section berikutnya; kalau
 * section diberi z-index, pita itu terkurung di dalam stacking context-nya
 * sendiri dan tertutup pricing.
 *
 * Isi & data tidak berubah dari versi lama: 8 rumpun, tab interaktif, kartu
 * modul dengan status kesiapan, dan banner modul kustom. Yang berubah adalah
 * tata letaknya — tab jadi daftar vertikal bernomor di kiri (di desktop), kartu
 * modul jadi grid rapat tanpa bayangan, dan warna diturunkan dari token navy.
 */

const SUITE_ICONS: Record<string, React.ElementType> = {
  finance: Coins,
  hr: Users,
  procurement: Truck,
  inventory: Warehouse,
  sales: TrendingUp,
  project: FolderKanban,
  manufacturing: Factory,
  governance: ShieldCheck,
};

/** Empat nilai enterprise. Tetap dari versi lama, hanya dipadatkan. */
const VALUES = [
  { icon: Building2, title: "44+ modul", body: "8 pilar saling terhubung tanpa silo data." },
  { icon: FileSpreadsheet, title: "Kepatuhan fiskal RI", body: "PPN 11/12%, PPh 21 TER 2024, BPJS." },
  { icon: BadgeCheck, title: "Tanpa lock-in", body: "Akses basis data & ekspor lengkap." },
  { icon: Users, title: "Pendampingan lokal", body: "Tim implementasi berbasis di Pekanbaru." },
];

/** Lencana status modul. Versi gelap: latar transparan + garis, bukan blok warna. */
function StatusBadge({ status, label }: { status: ModuleStatus; label: string }) {
  if (status === "available") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-success/40 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-[0.08em] text-success">
        <Check className="h-2.5 w-2.5" />
        {label}
      </span>
    );
  }
  if (status === "planned") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-warning/40 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-[0.08em] text-warning">
        <Clock className="h-2.5 w-2.5" />
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-info/40 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-[0.08em] text-info">
      <Wrench className="h-2.5 w-2.5" />
      {label}
    </span>
  );
}

export function ErpCapabilities() {
  const [activeSuiteId, setActiveSuiteId] = useState<string>("finance");
  const rootRef = useRef<HTMLElement>(null);
  useSectionReveal(rootRef);

  const activeSuite: ErpSuiteMetadata =
    ERP_SUITE_METADATA.find((s) => s.id === activeSuiteId) || ERP_SUITE_METADATA[0];

  const activeModules: ErpModule[] = ERP_MODULE_CATALOG.filter(
    (m) => m.categorySlug === activeSuiteId,
  );

  const SuiteIcon = SUITE_ICONS[activeSuite.id] || Layers;

  return (
    <section
      id="capabilities"
      ref={rootRef}
      aria-label="Katalog modul ERP Krevia"
      className={`relative scroll-mt-24 py-16 sm:py-24 lg:py-28 ${DARK_SURFACE.section}`}
    >
      {/* Batas atas: navy naik menimpa section sebelumnya. */}
      <SectionEdge spec={SECTION_EDGES.capabilitiesTop} />

      <div className={ERP_CONTAINER}>
        {/* ===== Header ===== */}
        <header>
          <div className="flex items-end justify-between gap-6 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gray-300 sm:text-xs">
            <span>Katalog modul</span>
            <span className="tabular-nums">(03 — 04)</span>
          </div>
          <div data-rule className="mt-3 h-px w-full bg-white/25 sm:mt-4" />

          <div className="mt-8 grid gap-8 sm:mt-10 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-14">
            <h2 className="text-[clamp(2rem,5.6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-white lg:col-span-7">
              44 modul dalam
              <br />
              <span className={DARK_SURFACE.accent}>satu</span> basis data.
            </h2>
            <p
              data-fade
              className={`max-w-[44ch] text-base leading-relaxed sm:text-lg lg:col-span-5 ${DARK_SURFACE.muted}`}
            >
              Delapan rumpun kapabilitas enterprise siap pakai — dari akuntansi
              dan pajak, payroll SDM, pengadaan, inventaris multi-gudang, CRM
              &amp; kasir POS, sampai manufaktur dan operasional proyek
              lapangan. Aktifkan yang perlu sekarang, kembangkan bertahap.
            </p>
          </div>
        </header>

        {/* ===== Empat nilai ===== */}
        <ul
          data-stagger
          className={`mt-12 grid gap-px overflow-hidden border sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 ${DARK_SURFACE.hairline} bg-white/12`}
        >
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <li key={value.title} className="bg-primary p-5 sm:p-6">
                <Icon className={`h-5 w-5 ${DARK_SURFACE.accent}`} />
                <p className="mt-4 text-sm font-bold text-white">{value.title}</p>
                <p className={`mt-1.5 text-xs leading-relaxed ${DARK_SURFACE.faint}`}>
                  {value.body}
                </p>
              </li>
            );
          })}
        </ul>

        {/* ===== Penjelajah rumpun ===== */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gray-300 sm:text-xs">
              Pilih rumpun modul
            </h3>
            <span className={`text-[0.6875rem] tabular-nums sm:text-xs ${DARK_SURFACE.faint}`}>
              {ERP_MODULE_CATALOG.length} modul terpetakan
            </span>
          </div>

          <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* ---- Daftar rumpun (vertikal di desktop, geser di ponsel) ----
                `min-w-0` wajib ada. Tanpa itu, item grid memakai `min-width:
                auto`, jadi lebar minimumnya mengikuti isi (delapan tab
                berjejer = 1941px). Akibatnya `overflow-x-auto` di bawah tidak
                pernah aktif — `scrollWidth` sama dengan `clientWidth` — dan
                strip-nya menembus keluar layar, bukan bisa digeser. */}
            <div className="min-w-0 lg:col-span-4">
              <div
                role="tablist"
                aria-label="Rumpun modul"
                className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
              >
                {ERP_SUITE_METADATA.map((suite, i) => {
                  const Icon = SUITE_ICONS[suite.id] || Layers;
                  const isActive = suite.id === activeSuiteId;
                  const moduleCount = ERP_MODULE_CATALOG.filter(
                    (m) => m.categorySlug === suite.id,
                  ).length;

                  return (
                    <button
                      key={suite.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveSuiteId(suite.id)}
                      className={`group flex shrink-0 snap-start items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none lg:w-full ${
                        isActive
                          ? "border-white/25 bg-navy-card"
                          : "border-white/10 hover:border-white/20 hover:bg-white/5"
                      }`}
                    >
                      <span
                        className={`w-5 shrink-0 text-[0.625rem] font-bold tabular-nums ${
                          isActive ? DARK_SURFACE.accent : "text-gray-500"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        className={`h-4 w-4 shrink-0 ${
                          isActive ? DARK_SURFACE.accent : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`whitespace-nowrap text-xs font-bold sm:text-sm ${
                          isActive ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {suite.name}
                      </span>
                      <span
                        className={`ml-auto hidden text-[0.625rem] tabular-nums lg:block ${
                          isActive ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {moduleCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ---- Panel rumpun aktif ---- */}
            <div className="lg:col-span-8">
              <div
                role="tabpanel"
                aria-label={activeSuite.name}
                className={`rounded-2xl border p-5 sm:p-7 lg:p-8 ${DARK_SURFACE.hairline} bg-navy-dark/40`}
              >
                {/* Kepala panel */}
                <div className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${DARK_SURFACE.hairline}`}
                    >
                      <SuiteIcon className={`h-5 w-5 ${DARK_SURFACE.accent}`} />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-black tracking-tight text-white sm:text-xl">
                          {activeSuite.name}
                        </h4>
                        <span className="rounded-full border border-accent/40 px-2 py-0.5 text-[0.5625rem] font-extrabold uppercase tracking-[0.1em] text-accent">
                          {activeSuite.badge}
                        </span>
                      </div>
                      <p className={`mt-1.5 max-w-[52ch] text-xs leading-relaxed sm:text-sm ${DARK_SURFACE.muted}`}>
                        {activeSuite.summary}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 sm:text-right">
                    <span className="block text-[0.5625rem] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Tolok ukur
                    </span>
                    <span className="mt-1 block max-w-[22ch] text-[0.6875rem] font-semibold leading-snug text-gray-300">
                      {activeSuite.odooMekariEquivalent}
                    </span>
                  </div>
                </div>

                {/* Kartu modul. Grid rapat dengan hairline: tidak ada bayangan,
                    tidak ada kartu terangkat — kedalaman dari garis saja. */}
                <div
                  className={`grid gap-px overflow-hidden rounded-xl border bg-white/10 sm:grid-cols-2 ${DARK_SURFACE.hairline}`}
                >
                  {activeModules.map((module) => {
                    const isHighlight = module.isHighlight;
                    return (
                      <article
                        key={module.id}
                        className={`flex flex-col justify-between p-4 transition-colors duration-200 sm:p-5 ${
                          isHighlight ? "bg-navy-card" : "bg-navy-dark/60"
                        }`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h5 className="text-[0.8125rem] font-bold leading-snug text-white">
                              {module.name}
                            </h5>
                            {isHighlight && (
                              <span className="inline-flex shrink-0 items-center gap-1 rounded-md border border-accent/40 px-1.5 py-0.5 text-[0.5625rem] font-extrabold uppercase tracking-[0.08em] text-accent">
                                <Sparkles className="h-2.5 w-2.5" />
                                Pilar
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-[0.6875rem] leading-relaxed text-gray-400 sm:text-xs">
                            {module.description}
                          </p>
                        </div>

                        <div
                          className={`mt-4 flex items-center justify-between gap-2 border-t pt-3 ${DARK_SURFACE.hairline}`}
                        >
                          <StatusBadge status={module.status} label={module.statusLabel} />
                          <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.08em] text-gray-500">
                            {module.includedIn.join(" · ")}
                          </span>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Kaki panel */}
                <div
                  className={`mt-6 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between ${DARK_SURFACE.hairline}`}
                >
                  <ul className="flex flex-wrap gap-1.5">
                    {activeSuite.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[0.625rem] font-medium text-gray-300"
                      >
                        <CheckCircle2 className="h-2.5 w-2.5 shrink-0 text-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#pricing"
                    onClick={(e) => handleNavClick(e, "#pricing")}
                    className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-accent transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    <span>Lihat paket &amp; harga</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Ajakan modul kustom ===== */}
        <div
          data-fade
          className={`mt-12 flex flex-col gap-6 border-t pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-10 ${DARK_SURFACE.hairline}`}
        >
          <div className="max-w-[54ch]">
            <h3 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
              Butuh modul khusus atau integrasi sistem lama?
            </h3>
            <p className={`mt-2 text-xs leading-relaxed sm:text-sm ${DARK_SURFACE.muted}`}>
              Krevia tidak membatasi Anda pada modul kaku. Mesin pabrik khusus,
              sistem timbangan armada, integrasi marketplace, atau portal
              perbankan lokal — tim perekayasa kami membangunnya menyatu ke
              dalam satu basis data terpusat.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2.5">
            <BracketButton href="/kontak" tone="accent">
              Konsultasi modul kustom
            </BracketButton>
            <a
              href="/kontak"
              className="group inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-4 py-3.5 text-xs font-bold text-white transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none sm:text-sm"
            >
              <span>Diskusikan arsitektur</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Batas bawah: navy turun menimpa pricing. `z-20` dari SectionEdge
          menimpa section berikutnya karena section ini tidak ber-z-index. */}
      <SectionEdge spec={SECTION_EDGES.capabilitiesBottom} />
    </section>
  );
}
