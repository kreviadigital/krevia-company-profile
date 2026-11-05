"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  Database,
  Lock,
  MessageSquare,
  ShieldCheck,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import {
  NOTCH_TALL,
  NOTCH_TALL_FLIP,
  NOTCH_WIDE,
  NOTCH_WIDE_FLIP,
} from "@/lib/notch";

/* -------------------------------------------------------------------------- */
/*  Bentuk kartu                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Kartu memakai **siluet yang sama dengan kartu pilar di `ErpOverview`**
 * (lihat `@/lib/notch`): chamfer diagonal di kiri-atas, takik dangkal di tepi
 * atas, tepi bawah bertingkat.
 *
 * Dua proporsi dipilih per breakpoint, persis seperti `ErpOverview`:
 * `NOTCH_TALL` (portrait) di bawah `lg`, `NOTCH_WIDE` (landscape) mulai `lg`.
 * Alasannya kedalaman takik berskala terhadap tinggi elemen — proporsi
 * landscape di kartu portrait yang tinggi akan membuat takiknya membesar.
 *
 * `*_FLIP` adalah varian khusus **tile 1 dan tile 5**: langkah bawahnya
 * dicerminkan vertikal supaya sisi kiri terangkat dan sisi kanan turun. Tile
 * lain tetap memakai bentuk asli.
 */
const CARD_SHAPE_SM = { ...NOTCH_TALL, id: "svc-notch-sm" } as const;
const CARD_SHAPE = { ...NOTCH_WIDE, id: "svc-notch" } as const;
const CARD_SHAPE_SM_FLIP = { ...NOTCH_TALL_FLIP, id: "svc-notch-sm-flip" } as const;
const CARD_SHAPE_FLIP = { ...NOTCH_WIDE_FLIP, id: "svc-notch-flip" } as const;

/** Container — disamakan dengan `ErpOverview` (`max-w-[90rem]`, padding sama). */
const CONTAINER = "mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10";

/**
 * Bento "fondasi kredibilitas digital" — **enam** tile ber-notch berjarak.
 *
 * **Susunan mengikuti referensi:** desktop 12 kolom × 3 baris; ponsel 2 kolom.
 * Dua tile kecil di kiri-atas, satu tile besar di kanan yang membentang baris
 * 1–2, satu tile besar di kiri yang membentang baris 2–3, lalu dua tile kecil
 * di kanan-bawah. Ponsel: 1 & 2 berdampingan, 3 dan 4 selebar layar, 5 & 6
 * berdampingan.
 *
 * ```
 * desktop (12 kolom)                 ponsel (2 kolom)
 * ┌───────┬───────┬───────────┐      ┌──────┬──────┐
 * │   1   │   2   │           │      │  1   │  2   │
 * ├───────┴───────┤     3     │      ├──────┴──────┤
 * │               │           │      │      3      │
 * │       4       ├──────┬────┤      ├─────────────┤
 * │               │  5   │ 6  │      │      4      │
 * └───────────────┴──────┴────┘      ├──────┬──────┤
 *                                    │  5   │  6   │
 *                                    └──────┴──────┘
 * ```
 *
 * Penempatan di desktop **eksplisit** (`col-start` + `row-start`), bukan hasil
 * auto-placement. Dengan `row-span-2` pada dua tile besar, auto-placement akan
 * melempar tile 5–6 ke baris keempat dan meninggalkan rongga; posisi eksplisit
 * membuat keenam tile mengunci ke tiga baris yang sama seperti referensi.
 *
 * **Tile diberi jarak (`gap-3`, `sm:gap-4`) dan tiap tile punya siluet notch
 * utuh.** Jarak dipakai karena notch memotong sudut: kalau dua tile
 * ditempelkan, potongan di tepi yang sama saling menambah dan latar menembus
 * sambungan — sudah diukur lewat `elementFromPoint` pada iterasi sebelumnya.
 *
 * **Isi tiap tile adalah fakta terverifikasi**, bukan diagram placeholder:
 * route halaman yang benar-benar ada di situs ini, empat pilar dari
 * `ErpOverview`, delapan kategori dari `ERP_MODULE_CATALOG` (44 modul), tiga
 * paket dari `SERVICE_PRICING_GROUPS`, empat integrasi yang tercantum di
 * katalog, dan ketentuan garansi yang sama. Tidak ada nama klien, tahun,
 * metrik hasil, atau angka karangan (ADR-0001).
 *
 * Tile tidak memakai `border`: `clip-path` memotong border, dan border persegi
 * yang di-clip ke bentuk takik hanya bertahan di segmen yang lurus. Tepi
 * digambar ulang sebagai `<path>` bergaris dengan bentuk yang sama persis.
 */

/* -------------------------------------------------------------------------- */
/*  Data — semuanya disalin dari sumber yang sudah ada di repo                */
/* -------------------------------------------------------------------------- */

/** Route yang benar-benar ada di `src/app`, dipakai di tile 01. */
const PAGES = [
  { label: "Beranda", path: "/" },
  { label: "Tentang Kami", path: "/tentang-kami" },
  { label: "Layanan", path: "/layanan" },
  { label: "Produk ERP", path: "/produk/erp" },
  { label: "Kontak", path: "/kontak" },
] as const;

/** Empat pilar — judulnya sama persis dengan `PILLARS` di `ErpOverview`. */
const PILLARS = [
  { title: "Operasional & Proyek", icon: Briefcase },
  { title: "Keuangan & Akuntansi", icon: Wallet },
  { title: "Supply Chain & Gudang", icon: Truck },
  { title: "SDM & Penggajian", icon: Users },
] as const;

/** Delapan kategori dari `ERP_MODULE_CATALOG` — totalnya 44 modul.
 *  Angka per kategori dihitung dari sumbernya: 7+7+4+5+7+5+4+5 = 44. */
const CATEGORIES = [
  { name: "Keuangan & Akuntansi", count: 7 },
  { name: "SDM & Payroll", count: 7 },
  { name: "Pengadaan & Pembelian", count: 4 },
  { name: "Inventaris & Gudang", count: 5 },
  { name: "Penjualan & CRM", count: 7 },
  { name: "Proyek & Lapangan", count: 5 },
  { name: "Manufaktur & Produksi", count: 4 },
  { name: "Tata Kelola & Alur Kerja", count: 5 },
] as const;

/** Paket website — jumlah halaman & estimasi dari `SERVICE_PRICING_GROUPS`. */
const TIERS = [
  { name: "Basic", pages: "3–5 halaman", lead: "5–7 hari" },
  { name: "Standard", pages: "6–10 halaman", lead: "10–14 hari" },
  { name: "Premium", pages: "10+ / custom", lead: "20–30 hari" },
] as const;

/** Integrasi yang tercantum di katalog modul. */
const INTEGRATIONS = [
  "WhatsApp Business API",
  "GA4 + Tag Manager",
  "Search Console",
  "e-Faktur PPN / PPh",
] as const;

/** Ketentuan yang berlaku di paket website — bukan klaim tambahan. */
const TERMS = [
  { label: "Sekali bayar", icon: Lock },
  { label: "Garansi bug", icon: ShieldCheck },
  { label: "Aset diserahkan", icon: Database },
] as const;

export function ServicesBento() {
  const whatsappUrl = SITE_CONFIG.getWhatsappUrl(
    "Halo Krevia Digital, saya tertarik untuk mendiskusikan pembuatan Website Company Profile untuk bisnis saya.",
  );

  return (
    <section id="services" className="scroll-mt-24 py-16 sm:py-24">
      {/* Satu clipPath: bentuknya sama untuk semua tile di semua lebar. Id
          diberi prefiks `svc-` supaya tidak bertabrakan dengan `ErpOverview`
          di halaman yang sama. */}
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          {[CARD_SHAPE_SM, CARD_SHAPE, CARD_SHAPE_SM_FLIP, CARD_SHAPE_FLIP].map((shape) => (
            <clipPath
              key={shape.id}
              id={shape.id}
              clipPathUnits="objectBoundingBox"
              transform={`scale(${shape.scale})`}
            >
              <path d={shape.d} />
            </clipPath>
          ))}
        </defs>
      </svg>

      {/* `clip-path: url(#…)` tidak bisa lewat utility arbitrary Tailwind —
          nilainya tidak ter-generate dan `clip-path` dihitung jadi `none`
          (dicek langsung, bukan asumsi). Jadi dipasang di sini, sekaligus
          memilih varian sesuai breakpoint: portrait di bawah `lg`, landscape
          mulai `lg` — sama seperti `ErpOverview`. Tile 1 memakai varian flip. */}
      <style>{`
        #services .svc-tile { clip-path: url(#${CARD_SHAPE_SM.id}); }
        #services .svc-tile-flip { clip-path: url(#${CARD_SHAPE_SM_FLIP.id}); }
        @media (min-width: 1024px) {
          #services .svc-tile { clip-path: url(#${CARD_SHAPE.id}); }
          #services .svc-tile-flip { clip-path: url(#${CARD_SHAPE_FLIP.id}); }
        }
      `}</style>

      <div className={CONTAINER}>
        {/* Header editorial: eyebrow bergaris + judul dengan titik penegas. */}
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-gray-300" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Layanan pendamping ERP
          </span>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="text-[clamp(1.875rem,4.2vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-gray-900 lg:col-span-8">
            Belum siap ERP skala penuh? Mulai dari fondasi{" "}
            <span className="text-secondary">kredibilitas digital.</span>
          </h2>
          <p className="max-w-[38ch] text-base leading-relaxed text-gray-700 lg:col-span-4">
            Website company profile berstandar enterprise yang cepat, rapi, dan
            siap dihubungkan ke sistem ERP saat bisnis Anda siap bertumbuh.
          </p>
        </div>

        {/* ============ BENTO 6 TILE — BERJARAK ============

            Enam tile dengan `gap`, sama seperti kartu pilar di `ErpOverview`.
            Tidak ada tumpang tindih dan tidak ada pergeseran: tiap tile adalah
            siluet notch utuh yang berdiri sendiri di atas latar section.

            Posisi tiap tile di `lg` ditulis eksplisit (col-start + row-start)
            karena dua tile memakai `row-span-2`. Tanpa itu auto-placement
            menaruh tile 5–6 di baris keempat dan meninggalkan rongga. */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-12">
          {/* ---- 1. Struktur konten (langkah bawah di-flip vertikal) ---- */}
          <article className="svc-tile svc-tile-flip relative isolate col-span-1 flex flex-col justify-between bg-white px-4 pt-7 pb-10 text-gray-900 sm:px-5 sm:pt-8 sm:pb-12 lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:px-6 lg:pt-9 lg:pb-12">
            <NotchOutline className="text-gray-300" bottomFlip />

            <ul className="space-y-2">
              {PAGES.map((page) => (
                <li key={page.path} className="flex items-baseline justify-between gap-2">
                  <span className="whitespace-nowrap text-xs font-semibold sm:text-sm">
                    {page.label}
                  </span>
                  {/* Route disembunyikan di ponsel: tile ini hanya 173px, jadi
                      "/tentang-kami" pecah dua baris dan berdesakan dengan
                      labelnya (terukur: label 2 baris, path 2 baris, jarak 8px). */}
                  <span className="hidden font-mono text-[10px] text-gray-400 sm:inline">
                    {page.path}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="text-sm font-bold leading-tight sm:text-base">
                Profil perusahaan
              </h3>
              <p className="mt-1 text-xs leading-snug text-gray-500 sm:text-sm">
                Lima halaman inti, satu domain resmi
              </p>
            </div>
          </article>

          {/* ---- 2. Empat pilar ---- */}
          <article className="svc-tile relative isolate col-span-1 flex flex-col justify-between bg-gray-100 px-4 pt-7 pb-10 text-gray-900 sm:px-5 sm:pt-8 sm:pb-12 lg:col-span-3 lg:col-start-4 lg:row-start-1 lg:px-6 lg:pt-9 lg:pb-12">
            <NotchOutline className="text-gray-300" />

            <ul className="space-y-2.5">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <li key={pillar.title} className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 shrink-0 text-secondary" />
                    <span className="text-xs font-semibold leading-tight sm:text-sm">
                      {pillar.title}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6">
              <h3 className="text-sm font-bold leading-tight sm:text-base">
                Empat pilar ERP
              </h3>
              <p className="mt-1 text-xs leading-snug text-gray-500 sm:text-sm">
                Satu basis data bersama
              </p>
            </div>
          </article>

          {/* ---- 3. Katalog modul (kanan, baris 1–2) ---- */}
          <article className="svc-tile relative isolate col-span-2  flex flex-col justify-between bg-primary px-5 pt-12 pb-12 text-white sm:px-7 sm:pt-14 sm:pb-14 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:px-9 lg:pt-14 lg:pb-12">
            <NotchOutline className="text-white/20" />

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                44 modul terdaftar
              </span>

              {/* Delapan kategori nyata dari `ERP_MODULE_CATALOG`, lengkap
                  dengan jumlah modul per kategori (dihitung dari sumbernya). */}
              <ul className="mt-4 grid grid-cols-1 gap-x-6 sm:mt-5 sm:grid-cols-2">
                {CATEGORIES.map((cat, k) => (
                  <li
                    key={cat.name}
                    className="flex items-baseline gap-2.5 border-t border-white/15 py-3"
                  >
                    <span className="font-mono text-[10px] tabular-nums text-white/40">
                      0{k + 1}
                    </span>
                    <span className="min-w-0 flex-1 text-xs font-semibold leading-tight sm:text-sm">
                      {cat.name}
                    </span>
                    <span className="font-mono text-[10px] tabular-nums text-white/50 sm:text-xs">
                      {cat.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <h3 className="text-lg font-extrabold leading-tight tracking-[-0.02em] sm:text-xl">
                Katalog modul
              </h3>
              <p className="mt-1.5 text-xs text-gray-300 sm:text-sm">
                Tiap modul punya status jelas: tersedia, direncanakan, atau kustom.
              </p>

              <Link
                href="/produk/erp"
                className="group/cta mt-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm"
              >
                <span>Buka katalog lengkap</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40 transition-colors group-hover/cta:border-white group-hover/cta:bg-white group-hover/cta:text-primary"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </article>

          {/* ---- 4. Paket & durasi (kiri, baris 2–3) ---- */}
          <article className="svc-tile relative isolate col-span-2 flex flex-col justify-between bg-gray-200 px-5 pt-12 pb-12 text-gray-900 sm:px-7 sm:pt-14 sm:pb-14 lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:px-9 lg:pt-14 lg:pb-12">
            <NotchOutline className="text-gray-400/50" />

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Tiga paket
              </span>

              <ul className="mt-4 sm:mt-5">
                {TIERS.map((tier) => (
                  <li
                    key={tier.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-gray-400/50 py-3.5"
                  >
                    <span className="text-sm font-bold sm:text-base">{tier.name}</span>
                    <span className="flex items-baseline gap-3 text-xs text-gray-600 sm:text-sm">
                      <span>{tier.pages}</span>
                      <span aria-hidden="true" className="text-gray-400">
                        ·
                      </span>
                      <span className="tabular-nums">{tier.lead}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs leading-relaxed text-gray-600 sm:text-sm">
                Durasi dihitung sebagai estimasi pengerjaan, bukan janji tanggal.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-extrabold leading-tight tracking-[-0.02em] sm:text-xl">
                Paket &amp; durasi
              </h3>
              <p className="mt-1.5 text-xs text-gray-600 sm:text-sm">
                Rincian cakupan dan harga ada di halaman layanan.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary/90 sm:text-sm"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Chat WhatsApp</span>
                </a>
                <Link
                  href="/layanan"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-400/70 px-4 py-2.5 text-xs font-semibold text-gray-900 transition-colors hover:bg-white/60 sm:text-sm"
                >
                  <span>Lihat cakupan</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* ---- 5. Integrasi (langkah bawah di-flip vertikal) ---- */}
          <article className="svc-tile svc-tile-flip relative isolate col-span-1 flex flex-col justify-between bg-white px-4 pt-7 pb-10 text-gray-900 sm:px-5 sm:pt-8 sm:pb-12 lg:col-span-3 lg:col-start-7 lg:row-start-3 lg:px-6 lg:pt-9 lg:pb-12">
            <NotchOutline className="text-gray-300" bottomFlip />

            <ul className="space-y-2">
              {INTEGRATIONS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3 w-3 shrink-0 text-secondary" />
                  <span className="text-xs font-semibold leading-tight sm:text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="text-sm font-bold leading-tight sm:text-base">Integrasi</h3>
              <p className="mt-1 text-xs leading-snug text-gray-500 sm:text-sm">
                Siap dihubungkan ke ERP
              </p>
            </div>
          </article>

          {/* ---- 6. Ketentuan paket ---- */}
          <article className="svc-tile relative isolate col-span-1 flex flex-col justify-between bg-secondary px-4 pt-7 pb-10 text-white sm:px-5 sm:pt-8 sm:pb-12 lg:col-span-3 lg:col-start-10 lg:row-start-3 lg:px-6 lg:pt-9 lg:pb-12">
            <NotchOutline className="text-white/30" />

            <div className="space-y-2.5">
              {TERMS.map((term) => {
                const Icon = term.icon;
                // Di ponsel tile ini hanya 173px, jadi barisnya dirapatkan:
                // padding dan gap dikecilkan dan toggle dipersempit supaya label
                // muat satu baris. `whitespace-nowrap` mengunci itu — tanpa itu
                // label panjang pecah jadi dua baris dan mendesak toggle-nya.
                return (
                  <div
                    key={term.label}
                    className="flex items-center justify-between gap-1.5 rounded-full border border-white/25 bg-white/10 px-2.5 py-2 sm:gap-2 sm:px-3"
                  >
                    <span className="flex items-center gap-1.5 sm:gap-2">
                      <Icon className="h-3.5 w-3.5 shrink-0" />
                      <span className="whitespace-nowrap text-[10px] font-semibold sm:text-xs">
                        {term.label}
                      </span>
                    </span>
                    {/* Toggle statis sebagai penanda "termasuk", bukan kontrol. */}
                    <span
                      aria-hidden="true"
                      className="flex h-3.5 w-6 shrink-0 items-center justify-end rounded-full bg-white px-0.5 sm:h-4 sm:w-7"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-secondary sm:h-3 sm:w-3" />
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-bold leading-tight sm:text-base">
                Tanpa kunci vendor
              </h3>
              <p className="mt-1 text-xs leading-snug text-white/80 sm:text-sm">
                Website sekali bayar, garansi bug 14–60 hari
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Garis tepi                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Garis tepi mengikuti bentuk notch. `clip-path` memotong border, jadi tepi
 * digambar ulang sebagai `<path>` bergaris dengan bentuk yang sama persis.
 * `preserveAspectRatio="none"` mengikuti ukuran tile dan
 * `vectorEffect="non-scaling-stroke"` menjaga tebal garis tetap 1px.
 *
 * Dua `<svg>` karena tiap varian punya viewBox sendiri; yang tidak aktif
 * disembunyikan lewat `hidden` — pola yang sama dengan `ErpOverview`. Varian
 * portrait dipakai di bawah `lg`, landscape mulai `lg`, mengikuti `<style>`
 * yang memilih `clip-path`-nya.
 *
 * `bottomFlip` memilih varian dengan langkah bawah dicerminkan vertikal —
 * dipakai tile 1 dan 5, dan harus sepasang dengan class `svc-tile-flip` supaya
 * garis tepi dan potongannya sama.
 *
 * Warna garis lewat `text-*`, karena `stroke="currentColor"` membaca `color`
 * (bukan `border-color`). Tebalnya 2px dan warnanya mengikuti tema tile —
 * sama seperti border kartu di `ErpOverview` (`strokeWidth="2"` +
 * `theme.rule`), supaya kedua section memakai ketebalan tepi yang sama.
 */
function NotchOutline({
  className,
  bottomFlip = false,
}: {
  className: string;
  bottomFlip?: boolean;
}) {
  const tall = bottomFlip ? CARD_SHAPE_SM_FLIP : CARD_SHAPE_SM;
  const wide = bottomFlip ? CARD_SHAPE_FLIP : CARD_SHAPE;

  return (
    <>
      <svg
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 h-full w-full lg:hidden ${className}`}
        viewBox={`0 0 ${tall.w} ${tall.h}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d={tall.d}
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 hidden h-full w-full lg:block ${className}`}
        viewBox={`0 0 ${wide.w} ${wide.h}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d={wide.d}
          stroke="currentColor"
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </>
  );
}
