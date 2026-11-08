"use client";

import type { ReactNode } from "react";
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
import { FLOMODIA_SHAPES } from "@/lib/flomodia-notches";
import {
  NOTCH_TALL,
  NOTCH_TALL_FLIP,
  NOTCH_TALL_FLIP_XN,
  NOTCH_TALL_XN,
  NOTCH_WIDE,
  NOTCH_WIDE_FLIP,
  NOTCH_WIDE_FLIP_XN,
  NOTCH_WIDE_XN,
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
 *
 * Selain itu, tile 1 dan tile 2 memakai **cermin dua tahap** (`*_XN`): seluruh
 * siluet dicerminkan horizontal (`X`), lalu **hanya takik tepi atas** yang
 * dicerminkan sekali lagi (`N`). Hasilnya chamfer pindah ke kanan-atas dan
 * langkah bawah ke sisi seberang, tetapi orientasi takik atas kembali seperti
 * semula. Tile 1 = bentuk `*_FLIP` + cermin (mempertahankan langkah bawahnya
 * yang sudah dicerminkan), tile 2 = bentuk asli + cermin.
 *
 * Catatan penting: pencerminan **tidak** dikerjakan lewat `transform` di dalam
 * `clipPath`. `clipPathUnits="objectBoundingBox"` tidak merender apa pun bila
 * `transform`-nya memuat cermin (diuji di Chromium: `scale(-1 1)`,
 * `matrix(… a=-sx …)`, dan kombinasi `translate` + `scale` semuanya
 * menghasilkan bidang kosong). Karena itu pencerminan sudah ditulis ke data
 * path (`*_XN` di `@/lib/notch`), dan `transform` tetap murni `scale`.
 */
const CARD_SHAPE_SM = { ...NOTCH_TALL, id: "svc-notch-sm" } as const;
const CARD_SHAPE = { ...NOTCH_WIDE, id: "svc-notch" } as const;
const CARD_SHAPE_SM_FLIP = { ...NOTCH_TALL_FLIP, id: "svc-notch-sm-flip" } as const;
const CARD_SHAPE_FLIP = { ...NOTCH_WIDE_FLIP, id: "svc-notch-flip" } as const;
const CARD_SHAPE_SM_XN = { ...NOTCH_TALL_XN, id: "svc-notch-sm-xn" } as const;
const CARD_SHAPE_XN = { ...NOTCH_WIDE_XN, id: "svc-notch-xn" } as const;
const CARD_SHAPE_SM_FLIP_XN = { ...NOTCH_TALL_FLIP_XN, id: "svc-notch-sm-flip-xn" } as const;
const CARD_SHAPE_FLIP_XN = { ...NOTCH_WIDE_FLIP_XN, id: "svc-notch-flip-xn" } as const;

/**
 * Tile 4 (**Paket & durasi**) memakai siluet `team-large` dari katalog Flomodia
 * (`FLOMODIA_SHAPES.teamLarge`, 1216×528), bukan siluet kartu biasa.
 *
 * Bentuknya tidak dipakai `ErpOverview`, jadi tidak ada varian portrait di
 * `@/lib/notch` seperti siluet lain. Karena itu, sama seperti bentuk katalog di
 * `WhyKrevia`, **bentuk wide ini dipakai di semua breakpoint** — bukan wide di
 * `lg` dan portrait di bawahnya. Proporsinya 2,3:1, jauh lebih lebar daripada
 * tile 4 (1,37:1 di desktop, 0,76:1 di ponsel), jadi flat-nya lebih rendah:
 * pundak atas turun ±10% (30px di desktop, 47px di ponsel) dan langkah bawah
 * naik ±10%, bukan ±28–30% seperti siluet kartu. Padding tile 4 dinaikkan
 * (`pt-16 … lg:pt-24`) supaya teks tidak masuk ke area yang terpotong.
 */
const CARD_SHAPE_TEAM = { ...FLOMODIA_SHAPES.teamLarge, id: "svc-notch-team" } as const;

/** Semua `clipPath` yang dibutuhkan, satu per kombinasi bentuk. */
const CLIP_SHAPES = [
  CARD_SHAPE_SM,
  CARD_SHAPE,
  CARD_SHAPE_SM_FLIP,
  CARD_SHAPE_FLIP,
  CARD_SHAPE_SM_XN,
  CARD_SHAPE_XN,
  CARD_SHAPE_SM_FLIP_XN,
  CARD_SHAPE_FLIP_XN,
  CARD_SHAPE_TEAM,
] as const;

/** Container — disamakan dengan `ErpOverview` (`max-w-[90rem]`, padding sama). */
const CONTAINER = "mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10";

/**
 * Bento "fondasi kredibilitas digital" — **enam** tile di desktop, **empat
 * kartu** di ponsel.
 *
 * **Desktop: 12 kolom × 3 baris.** Dua tile kecil di kiri-atas, satu tile besar
 * di kanan yang membentang baris 1–2, satu tile besar di kiri yang membentang
 * baris 2–3, lalu dua tile kecil di kanan-bawah.
 *
 * **Ponsel: empat kartu, jadi empat notch.** Dua pasangan tile — 1+2 dan 5+6 —
 * digabung menjadi **satu kartu bertakik** masing-masing. Sebelumnya ponsel
 * memakai grid 2 kolom, jadi keenam tile tampil sebagai enam siluet takik
 * sempit (173px) yang berdesakan; setelah digabung tinggal empat siluet, dan
 * tiap kartu punya lebar penuh untuk teksnya.
 *
 * Penggabungan dilakukan **tanpa menduplikasi markup**: pembungkus pasangan
 * memakai `sm:contents`, artinya mulai 640px elemen itu hilang dari layout dan
 * kedua `<article>` di dalamnya naik menjadi grid item langsung — jadi
 * `sm:col-span` dan penempatan `lg:col-start`/`lg:row-start` tiap tile tetap
 * berlaku persis seperti sebelumnya (tablet 640–1023 kembali ke dua kolom,
 * desktop ke 12 kolom), sementara di bawah 640px pembungkus itulah yang menjadi
 * kartu ber-notch (satu `clip-path` + satu `<NotchOutline>`, sedangkan takik
 * milik tiap `<article>` dimatikan lewat `svc-inner`).
 *
 * ```
 * desktop (12 kolom)                 ponsel (satu kolom)
 * ┌───────┬───────┬───────────┐      ┌─────────────┐
 * │   1   │   2   │           │      │  1 + 2      │  ← satu kartu
 * ├───────┴───────┤     3     │      ├─────────────┤
 * │               │           │      │      3      │
 * │       4       ├──────┬────┤      ├─────────────┤
 * │               │  5   │ 6  │      │      4      │
 * └───────────────┴──────┴────┘      ├─────────────┤
 *                                    │  5 + 6      │  ← satu kartu
 *                                    └─────────────┘
 * ```
 *
 * Penempatan di desktop **eksplisit** (`col-start` + `row-start`), bukan hasil
 * auto-placement. Dengan `row-span-2` pada dua tile besar, auto-placement akan
 * melempar tile 5–6 ke baris keempat dan meninggalkan rongga; posisi eksplisit
 * membuat keenam tile mengunci ke tiga baris yang sama seperti referensi.
 *
 * **Tile diberi jarak dan tiap kartu punya siluet notch utuh.** Jarak dipakai
 * karena notch memotong sudut: kalau dua kartu ditempelkan, potongan di tepi
 * yang sama saling menambah dan latar menembus sambungan — sudah diukur lewat
 * `elementFromPoint` pada iterasi sebelumnya. Jaraknya `gap-5` di ponsel (kartu
 * kini selebar layar, jadi butuh napas lebih lega) dan tetap `sm:gap-4`
 * mulai `sm` seperti semula.
 *
 * **Bidang warna ikut digabung — satu warna per kartu, tanpa garis pemisah.**
 * Kartu 1+2 memakai satu bidang putih penuh (latar abu-abu tile 2 hanya hidup
 * lagi mulai `sm` lewat `sm:bg-gray-100`). Kartu 5+6 memakai satu bidang biru
 * penuh: paruh integrasi dibuat transparan dengan teks putih, jadi checklist-nya
 * terbaca putih-di-atas-biru dan tidak ada sambungan yang terlihat. Di desktop
 * kedua paruh kembali berdiri sendiri dengan latarnya masing-masing.
 *
 * **Warna bidang dipasang di pembungkus, bukan di bagian dalam.** Ini bukan
 * detail gaya: `<NotchOutline>` memakai `-z-10`, dan pembungkus yang membawa
 * `clip-path` + `isolate` menciptakan stacking context sendiri. Kalau bagian
 * dalam ikut dicat, cat itu berada **di atas** garis tepi dan menutupi tepi
 * kiri/kanan/bawah kartu gabungan — terlihat sebagai garis yang "hilang
 * separuh" padahal path-nya utuh. Jadi tiap `svc-inner` di ponsel memakai
 * `bg-transparent` dan latarnya baru menyala lagi mulai `sm`
 * (`sm:bg-white` / `sm:bg-gray-100` / `sm:bg-secondary`), saat ia sudah jadi
 * grid item mandiri dan punya `<NotchOutline>` sendiri.
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
          {CLIP_SHAPES.map((shape) => (
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
        #services .svc-tile-xn { clip-path: url(#${CARD_SHAPE_SM_XN.id}); }
        #services .svc-tile-flip-xn { clip-path: url(#${CARD_SHAPE_SM_FLIP_XN.id}); }
        #services .svc-tile-team { clip-path: url(#${CARD_SHAPE_TEAM.id}); }

        /* --- Kartu gabungan (hanya di bawah 640px) ---------------------------

           Di bawah 640 kedua tile dalam satu pasangan tampil sebagai SATU kartu,
           jadi takik bagian dalam dimatikan (hanya pembungkus pasangan yang
           bertakik) dan garis tepi bagian dalam disembunyikan.

           Aturan ini ditulis sebagai CSS biasa dengan selektor ber-ID, bukan
           utility Tailwind, karena dua alasan:
             1. \`clip-path: url(#…)\` memang tidak bisa lewat utility arbitrary;
             2. \`hidden\`/\`sm:block\` yang ditempelkan ke <NotchOutline> akan
                bertabrakan dengan \`lg:hidden\`/\`lg:block\` di dalam komponen itu
                (dua media query, pemenangnya bergantung urutan stylesheet).
                Dengan selektor ber-ID, kemenangannya pasti.

           \`clip-path\` pada pembungkus WAJIB dimatikan mulai 640px. Pembungkus
           memakai \`sm:contents\`, dan elemen ber-\`display: contents\` tidak
           menggambar kotak — tetapi \`clip-path\`-nya tetap berlaku dan akan
           memotong tiap anak yang naik menjadi grid item. */
        @media (max-width: 639.98px) {
          #services .svc-inner { clip-path: none; }
          #services .svc-inner-only { display: none; }
        }

        @media (min-width: 1024px) {
          #services .svc-tile { clip-path: url(#${CARD_SHAPE.id}); }
          #services .svc-tile-flip { clip-path: url(#${CARD_SHAPE_FLIP.id}); }
          #services .svc-tile-xn { clip-path: url(#${CARD_SHAPE_XN.id}); }
          #services .svc-tile-flip-xn { clip-path: url(#${CARD_SHAPE_FLIP_XN.id}); }
          #services .svc-tile-team { clip-path: url(#${CARD_SHAPE_TEAM.id}); }
        }

        /* Ditaruh PALING AKHIR supaya mengalahkan aturan \`.svc-tile\` di atas:
           pembungkus pasangan harus bebas clip begitu ia jadi \`display:contents\`
           (≥640px), termasuk saat \`min-width:1024px\` menyalakan takik landscape. */
        @media (min-width: 640px) {
          #services .svc-pair { clip-path: none; }
          #services .svc-pair-only { display: none; }
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

        {/* ============ BENTO 6 TILE DESKTOP / 4 KARTU PONSEL ============

            Di ≥640px semua tile adalah grid item langsung (ponsel: satu kolom,
            tablet: dua kolom, desktop: 12 kolom). Di bawah 640px dua pasangan
            tile dibungkus `BentoPair` (lihat komponen di bawah) yang mulai
            `sm` memakai `sm:contents` sehingga pembungkusnya hilang dari layout. */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12">
          {/* ---- Kartu gabungan 1 + 2 (ponsel) ---- */}
          <BentoPair
            className="svc-tile svc-tile-flip-xn bg-white"
            outline={<NotchOutline className="svc-pair-only text-gray-300" bottomFlip flipXN />}
          >
            {/* ---- 1. Struktur konten (langkah bawah flip + cermin + takik dibalik) ---- */}
            <article className="svc-inner svc-tile svc-tile-flip-xn relative isolate flex flex-col justify-between px-4 pt-7 pb-10 text-gray-900 sm:col-span-1 sm:bg-white sm:px-5 sm:pt-8 sm:pb-12 lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:px-6 lg:pt-9 lg:pb-12">
              <NotchOutline className="svc-inner-only text-gray-300" bottomFlip flipXN />

              <ul className="space-y-2">
                {PAGES.map((page) => (
                  <li key={page.path} className="flex items-baseline justify-between gap-2">
                    <span className="whitespace-nowrap text-sm font-semibold">
                      {page.label}
                    </span>
                    <span className="hidden font-mono text-[10px] text-gray-400 sm:inline">
                      {page.path}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <h3 className="text-base font-bold leading-tight">
                  Profil perusahaan
                </h3>
                <p className="mt-1 text-sm leading-snug text-gray-500">
                  Lima halaman inti, satu domain resmi
                </p>
              </div>
            </article>

            {/* ---- 2. Empat pilar (cermin + takik dibalik) ---- */}
            <article className="svc-inner svc-tile svc-tile-xn relative isolate flex flex-col justify-between px-4 pb-10 pt-6 text-gray-900 sm:col-span-1 sm:bg-gray-100 sm:px-5 sm:pb-12 sm:pt-7 lg:col-span-3 lg:col-start-4 lg:row-start-1 lg:px-6 lg:pt-9 lg:pb-12">
              <NotchOutline className="svc-inner-only text-gray-300" flipXN />

              <ul className="space-y-2.5">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <li key={pillar.title} className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 shrink-0 text-secondary" />
                      <span className="text-sm font-semibold leading-tight">
                        {pillar.title}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5">
                <h3 className="text-base font-bold leading-tight">
                  Empat pilar ERP
                </h3>
                <p className="mt-1 text-sm leading-snug text-gray-500">
                  Satu basis data bersama
                </p>
              </div>
            </article>
          </BentoPair>

          {/* ---- 3. Katalog modul (kanan, baris 1–2) ---- */}
          <article className="svc-tile relative isolate flex flex-col justify-between bg-primary px-5 pt-12 pb-12 text-white sm:col-span-2 sm:px-7 sm:pt-14 sm:pb-14 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:px-9 lg:pt-14 lg:pb-12">
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

          {/* ---- 4. Paket & durasi (kiri, baris 2–3, siluet `team-large`) ---- */}
          <article className="svc-tile svc-tile-team relative isolate flex flex-col justify-between bg-gray-200 px-6 pt-16 pb-16 text-gray-900 sm:col-span-2 sm:px-8 sm:pt-20 sm:pb-20 lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:px-10 lg:pt-24 lg:pb-24">
            <NotchOutline className="text-gray-400/50" shape={CARD_SHAPE_TEAM} />

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

          {/* ---- Kartu gabungan 5 + 6 (ponsel) ---- */}
          <BentoPair
            className="svc-tile svc-tile-flip bg-secondary"
            outline={<NotchOutline className="svc-pair-only text-white/30" bottomFlip />}
          >
            {/* ---- 5. Integrasi (langkah bawah di-flip vertikal) ---- */}
            <article className="svc-inner svc-tile svc-tile-flip relative isolate flex flex-col justify-between bg-transparent px-4 pt-7 pb-9 text-white sm:col-span-1 sm:bg-white sm:px-5 sm:pt-8 sm:pb-10 sm:text-gray-900 lg:col-span-3 lg:col-start-7 lg:row-start-3 lg:px-6 lg:pt-9 lg:pb-12">
              <NotchOutline className="svc-inner-only text-gray-300" bottomFlip />
              <ul className="space-y-2">
                {INTEGRATIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-white/70 sm:text-secondary" />
                    <span className="text-sm font-semibold leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <h3 className="text-base font-bold leading-tight">Integrasi</h3>
                <p className="mt-1 text-sm leading-snug text-white/80 sm:text-gray-500">
                  Siap dihubungkan ke ERP
                </p>
              </div>
            </article>

            {/* ---- 6. Ketentuan paket ---- */}
            <article className="svc-inner svc-tile relative isolate flex flex-col justify-between bg-transparent px-4 pb-10 pt-7 text-white sm:col-span-1 sm:bg-secondary sm:px-5 sm:pb-12 sm:pt-8 lg:col-span-3 lg:col-start-10 lg:row-start-3 lg:px-6 lg:pt-9 lg:pb-12">
              <NotchOutline className="svc-inner-only text-white/30" />
              <div className="space-y-2.5">
                {TERMS.map((term) => {
                  const Icon = term.icon;
                  return (
                    <div
                      key={term.label}
                      className="flex items-center justify-between gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2.5"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="h-3.5 w-3.5 shrink-0" />
                        <span className="whitespace-nowrap text-xs font-semibold">
                          {term.label}
                        </span>
                      </span>
                      {/* Toggle statis sebagai penanda "termasuk", bukan kontrol. */}
                      <span
                        aria-hidden="true"
                        className="flex h-4 w-7 shrink-0 items-center justify-end rounded-full bg-white px-0.5"
                      >
                        <span className="h-3 w-3 rounded-full bg-secondary" />
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6">
                <h3 className="text-base font-bold leading-tight">
                  Tanpa kunci vendor
                </h3>
                <p className="mt-1 text-sm leading-snug text-white/80">
                  Website sekali bayar, garansi bug 14–60 hari
                </p>
              </div>
            </article>
          </BentoPair>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pembungkus pasangan tile (ponsel)                                         */
/* -------------------------------------------------------------------------- */

/**
 * Pembungkus dua tile yang di ponsel tampil sebagai **satu kartu bertakik**.
 *
 * Kuncinya `sm:contents`: mulai 640px elemen pembungkus ini tidak menghasilkan
 * kotak sama sekali, sehingga kedua `<article>` di dalamnya naik menjadi grid
 * item langsung dan `sm:col-span`/`lg:col-start`/`lg:row-start` masing-masing
 * tetap bekerja seperti sebelum penggabungan. Di bawah 640px pembungkus inilah
 * yang menjadi grid item, dan ia yang membawa `clip-path` + garis tepi.
 *
 * Konsekuensinya di ponsel:
 *   - bagian dalam membawa `svc-inner` (lihat `<style>`: `clip-path: none`
 *     di bawah 640px) supaya potongan takik tidak diterapkan dua kali;
 *   - garis tepi bagian dalam diberi `svc-inner-only` (disembunyikan di bawah
 *     640px) dan pembungkus yang merender garis tepi kartu gabungan;
 *   - latar bagian dalam **transparan** di ponsel dan baru menyala mulai `sm`.
 *     Warna bidang di kartu gabungan hanya boleh datang dari pembungkus: bagian
 *     dalam yang ikut dicat akan menutupi `<NotchOutline>` pembungkus karena
 *     garis tepi itu berada di `-z-10`. Gejalanya garis tepi tampak hilang di
 *     tepi kiri/kanan/bawah, padahal path-nya benar.
 *
 * `svc-pair` dipakai untuk mematikan `clip-path` pembungkus mulai 640px:
 * elemen `display: contents` tidak menggambar kotaknya sendiri, tetapi
 * `clip-path`-nya tetap berlaku dan akan memotong anak-anak yang naik menjadi
 * grid item. `clip-path` di pembungkus sendiri datang dari `className` yang
 * dioper pemanggil (`svc-tile`/`svc-tile-flip`).
 *
 * `isolate` wajib ada di sini: `<NotchOutline>` memakai `-z-10`, dan tanpa
 * stacking context baru garis tepi itu akan jatuh di belakang latar section.
 */
function BentoPair({
  className,
  outline,
  children,
}: {
  className: string;
  outline: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className={`svc-pair relative isolate flex flex-col sm:contents ${className}`}
    >
      {outline}
      {children}
    </div>
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
 * `flipXN` memilih varian hasil **cermin dua tahap** — seluruh siluet
 * dicerminkan horizontal lalu takik atas dicerminkan lagi — sepasang dengan
 * class `svc-tile-xn` (tile 2) dan `svc-tile-flip-xn` (tile 1, di atas
 * `bottomFlip`). Pencerminan sudah ada di data path, jadi garis tepi memakai
 * `d` yang sama dengan `clipPath`-nya — tidak ada `transform`, sehingga
 * `clip-path` dan garis tepi dijamin identik.
 *
 * Warna garis lewat `text-*`, karena `stroke="currentColor"` membaca `color`
 * (bukan `border-color`). Tebalnya 2px dan warnanya mengikuti tema tile —
 * sama seperti border kartu di `ErpOverview` (`strokeWidth="2"` +
 * `theme.rule`), supaya kedua section memakai ketebalan tepi yang sama.
 *
 * `shape` memakai satu siluet katalog apa adanya (mis. `team-large` di tile 4),
 * dipakai di **semua** breakpoint. Bentuk katalog tidak punya pasangan portrait,
 * jadi hanya satu `<svg>` yang dirender — bukan dua seperti varian kartu.
 */
function NotchOutline({
  className,
  bottomFlip = false,
  flipXN = false,
  shape,
}: {
  className: string;
  bottomFlip?: boolean;
  flipXN?: boolean;
  shape?: { w: number; h: number; d: string };
}) {
  if (shape) {
    return (
      <svg
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`}
        viewBox={`0 0 ${shape.w} ${shape.h}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d={shape.d}
          stroke="currentColor"
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  const tall = flipXN
    ? bottomFlip
      ? CARD_SHAPE_SM_FLIP_XN
      : CARD_SHAPE_SM_XN
    : bottomFlip
      ? CARD_SHAPE_SM_FLIP
      : CARD_SHAPE_SM;
  const wide = flipXN
    ? bottomFlip
      ? CARD_SHAPE_FLIP_XN
      : CARD_SHAPE_XN
    : bottomFlip
      ? CARD_SHAPE_FLIP
      : CARD_SHAPE;

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
