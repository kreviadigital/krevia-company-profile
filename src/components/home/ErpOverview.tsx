"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, Wallet, Truck, Users, Check, ArrowRight } from "lucide-react";

/**
 * Empat pilar ERP Krevia.
 *
 * Susunannya mengikuti pola kartu section "events" di flomodia.com — label
 * kategori kecil di atas, lalu judul — karena pola itu paling pas untuk daftar
 * empat hal sejajar: pembaca langsung melihat "ada empat pilar" sebelum
 * membaca detailnya. Grid tetap 2x2 di tablet ke atas dan satu kolom di ponsel,
 * seperti kartu section lain di beranda.
 *
 * Dua transisi dari vocabulary flomodia dipakai di section ini (keduanya
 * disalin apa adanya dari flomodia.com, `fill` dipetakan ke palet Krevia), dan
 * keduanya duduk di satu-satunya sambungan yang memang punya kontras:
 *
 * 1. `IMPACT_BOTTOM_PATH` — tepi ATAS section. Bidang navy mengisi bagian atas
 *    kotak dan tepi bawahnya turun bertangga, jadi ia terbaca sebagai
 *    perpanjangan band `Stats` di atasnya yang menetes ke kanvas terang.
 * 2. `CALENDAR_NOTCH_PATH` — tepi BAWAH band header, di-`scale-y-100` supaya
 *    takiknya mengarah ke grid pilar.
 *
 * Transisi "impact" versi putih (viewBox 0 0 1280 189) sempat dipasang di tepi
 * bawah section, lalu dibuang: section ini `bg-white` dan section berikutnya
 * duduk di wrapper `bg-gray-50`, jadi bentuk putih di atas gray-50 hanya
 * berselisih ~1,2% kontras dan terbaca sebagai tidak ada apa-apa. Perhiasan
 * yang tidak terbaca tidak dipertahankan (ADR-0001).
 *
 * Bentuk kurung siku di tombol CTA memakai `BUTTON_CORNER_PATHS` dari Footer
 * supaya bahasa visualnya nyambung dengan tombol di sana.
 *
 * Seluruh warnanya memakai palet Krevia (lihat `globals.css`): navy
 * `--color-primary`, biru `--color-secondary`, cyan `--color-accent`, dan abu
 * netral gray-*. Ikon pilarnya tetap lucide seperti section lain.
 *
 * Komponen ini murni statis — tanpa useEffect, tanpa state, tanpa animasi
 * yang menghitung scroll — jadi tidak ada yang perlu di-handle untuk
 * `prefers-reduced-motion`.
 *
 * Isi teksnya hanya memakai fakta yang sudah tercantum di PRODUCT.md /
 * GLOSSARY.md — 44 modul ERP dan 4 pilar operasional. Tidak ada angka klien
 * atau pencapaian yang belum terverifikasi (lihat ADR-0001).
 */

const PILLARS = [
  {
    no: "01",
    label: "Proyek & Lapangan",
    title: "Operasional & Proyek",
    icon: Briefcase,
    desc: "Menghubungkan catatan harian lapangan, realisasi RAB, dan approval progres fisik agar deviasi anggaran terdeteksi sejak dini.",
    points: ["Site Daily Log Terpadu", "Kontrol Deviasi RAB", "Persetujuan Bertingkat"],
  },
  {
    no: "02",
    label: "Arus Kas & Buku Besar",
    title: "Keuangan & Akuntansi",
    icon: Wallet,
    desc: "Rekonsiliasi transaksi kasir, pencatatan invoice, dan laporan laba-rugi otomatis tanpa perlu rekap ulang manual di akhir bulan.",
    points: ["Pencatatan Multi-Rekening", "Invoice & Pelunasan Cepat", "Laporan Keuangan Otomatis"],
  },
  {
    no: "03",
    label: "Logistik & Inventaris",
    title: "Supply Chain & Gudang",
    icon: Truck,
    desc: "Sinkronisasi pesanan pembelian (PO), surat jalan penerimaan barang, dan peringatan batas minimum stok secara real-time.",
    points: ["Kontrol Stok Multi-Gudang", "Pencocokan PO & Faktur", "Peringatan Stok Kritis"],
  },
  {
    no: "04",
    label: "Karyawan & Payroll",
    title: "SDM & Penggajian",
    icon: Users,
    desc: "Manajemen data karyawan, presensi berbasis lokasi GPS untuk staf lapangan, serta perhitungan lembur dan slip gaji digital.",
    points: ["Presensi GPS Lapangan", "Kalkulasi Lembur Otomatis", "Distribusi Slip Gaji"],
  },
] as const;

/**
 * Bentuk kartu pilar memakai bahasa "chamfer" khas flomodia (lihat mask
 * `events_home_image-mask` di flomodia.com): sudut dipotong diagonal dan ada
 * lekukan kecil di tepi, bukan rounded seragam. Dipakai lewat `clip-path` agar
 * silhouette-nya terasa seperti plat teknik, bukan kotak biasa.
 *
 * Ditulis dalam persen (objectBoundingBox) supaya mengikuti ukuran kartu apa
 * pun tanpa angka viewBox tetap.
 */
const CARD_CLIP_PATH =
  "polygon(0 5%, 5% 0, 26% 0, 30% 3%, 70% 3%, 74% 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 74% 100%, 70% 97%, 30% 97%, 26% 100%, 5% 100%, 0 95%)";

/**
 * Transisi bertangga "impact" versi BAWAH dari flomodia (viewBox 0 0 1280 76).
 * Di flomodia pasangan ini dipakai untuk menutup section gelap: bidang gelap
 * memenuhi bagian atas kotak, lalu tepi bawahnya turun bertangga ke section
 * terang berikutnya.
 *
 * Di sini fungsinya sama, tetapi yang diwakilinya adalah BAND STATS di atas
 * section — bukan badan section ini. Jadi Stats seolah menetes turun bertangga
 * ke kanvas terang, dan jarak antar-section tidak lagi berupa garis lurus
 * kosong. `fill`-nya navy, karena yang digambar adalah perpanjangan band
 * Stats.
 */
const IMPACT_BOTTOM_PATH =
  "M870.331 -779.154H429.264C421.953 -779.154 414.943 -782.058 409.773 -787.227L312.073 -884.927C306.904 -890.096 299.893 -893 292.583 -893H24.4464C9.22371 -893 -3.11671 -880.66 -3.11671 -865.437V-728.233V-629.913C-3.11671 -622.332 -6.23873 -615.086 -11.7483 -609.88L-18.6924 -603.318L-25.2155 -597.153C-30.725 -591.946 -33.847 -584.701 -33.847 -577.12V-442.142C-33.847 -434.562 -36.969 -427.316 -42.4786 -422.109L-48.3685 -416.543C-53.878 -411.337 -57 -404.091 -57 -396.51V-49.1462C-57 -41.5657 -53.878 -34.3198 -48.3685 -29.1132L19.2244 34.7634C24.3416 39.5992 31.1153 42.2935 38.156 42.2935H193.034C200.074 42.2935 206.848 44.9878 211.965 49.8237L230.969 67.7824C236.086 72.6183 242.86 75.3126 249.901 75.3126H464.134C471.175 75.3126 477.948 72.6183 483.066 67.7824L546.691 7.65491C551.808 2.81903 558.582 0.124756 565.623 0.124756H852.683C859.724 0.124756 866.497 2.81903 871.615 7.65491L873.78 9.70081C878.897 14.5367 885.671 17.231 892.711 17.231H1065.69C1072.73 17.231 1079.5 19.9252 1084.62 24.761L1101.1 40.3328C1106.22 45.1687 1112.99 47.863 1120.03 47.863H1275.75C1282.79 47.863 1289.57 45.1686 1294.68 40.3328L1394.27 -53.7781C1399.78 -58.9847 1402.9 -66.2306 1402.9 -73.8111V-506.706C1402.9 -514.287 1406.02 -521.532 1411.53 -526.739L1420.37 -535.09C1425.88 -540.297 1429 -547.542 1429 -555.123V-739.43C1429 -747.011 1425.88 -754.257 1420.37 -759.463L1349.09 -826.821L1236.07 -713.803C1230.9 -708.633 1223.89 -705.729 1216.58 -705.729H966.589C959.279 -705.729 952.268 -708.633 947.099 -713.803L889.821 -771.08C884.652 -776.25 877.641 -779.154 870.331 -779.154Z";

/**
 * Notch bertangga "calendar" dari flomodia (viewBox 0 0 1280 39). Bentuknya
 * paling halus dari vocabulary ini: satu takik asimetris di kiri dan satu di
 * kanan, dengan tepi bawah rata — jadi ia terbaca sebagai pembatas, bukan
 * sebagai bentuk yang ikut memeriahkan komposisi.
 *
 * Dipakai di tepi BAWAH panel header (di-`scale-y-100`), di dalam section:
 * tepi atas panel tetap garis rata supaya bidang navy panel menyambung bersih
 * dengan celah di bawah band `Stats`, sementara tepi bawahnya yang bergerigi
 * yang menutup ke arah grid pilar.
 */
const CALENDAR_NOTCH_PATH =
  "M227.065 30.2033H9C-13.0914 30.2033 -31 48.1119 -31 70.2033V485C-31 507.091 -13.0914 525 8.99997 525H1268C1290.09 525 1308 507.091 1308 485V78.8315C1308 56.7402 1290.09 38.8315 1268 38.8315H1200.96C1194.96 38.8315 1189.19 36.444 1184.95 32.1944C1180.7 27.9449 1174.94 25.5573 1168.93 25.5573H867.849C857.236 25.5573 847.059 21.3402 839.557 13.8342L838.446 12.7231C830.944 5.21715 820.767 1 810.155 1H477.897C471.889 1 466.127 3.38756 461.879 7.63711C457.632 11.8867 451.87 14.2742 445.862 14.2742H265.507C258.297 14.2742 251.383 17.1393 246.286 22.2388C241.189 27.3382 234.275 30.2033 227.065 30.2033Z";

/** Empat kurung siku tombol, sama dengan tombol di Footer. viewBox 0 0 17 17. */
const BUTTON_CORNER_PATHS = [
  { className: "top-[-0.25rem] left-[-0.25rem]", d: "M1 16C1 8 8 1 16 1" },
  { className: "top-[-0.25rem] right-[-0.25rem]", d: "M16 16C16 8 9 1 1 1" },
  { className: "bottom-[-0.25rem] left-[-0.25rem]", d: "M1 1C1 9 8 16 16 16" },
  { className: "bottom-[-0.25rem] right-[-0.25rem]", d: "M16 1C16 9 9 16 1 16" },
];

export function ErpOverview() {
  return (
    <section
      id="erp-overview"
      aria-label="Empat pilar sistem Krevia Digital"
      className="relative scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-[80rem] space-y-12">
        {/* Header editorial sebagai band navy. Tepi atasnya dibiarkan lurus:
            yang membuat sambungan ke `Stats` terasa bertangga adalah transisi
            "impact" di tepi atas section (lihat blok di akhir markup), bukan
            hiasan tambahan di sini. Tepi bawah band memakai notch "calendar". */}
        <div className="relative bg-primary px-6 py-8 sm:px-10 sm:py-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Empat pilar yang menopang{" "}
              <span className="text-accent">operasional</span>.
            </h2>

            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
              Krevia Digital menyusun sistem sebagai fondasi modular. Setiap
              pilar dapat diaktifkan bertahap sesuai kesiapan tim Anda.
            </p>
          </div>

          {/* Notch bertangga "calendar" (flomodia, viewBox 0 0 1280 39) di
              tepi BAWAH band header, di-`scale-y-100` supaya takiknya
              menghadap turun ke grid pilar. Warnanya navy panel. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-full h-4 -scale-y-100"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1280 39"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={CALENDAR_NOTCH_PATH}
                fill="var(--color-primary)"
              />
            </svg>
          </div>
        </div>

        {/* Grid empat pilar — 2x2 di tablet ke atas, satu kolom di ponsel.
            Tiap kartu dipotong dengan bentuk chamfer flomodia supaya grid-nya
            berkarakter plat teknik, bukan kotak rounded seragam. */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PILLARS.map((pil) => {
            const Icon = pil.icon;
            return (
              <article
                key={pil.no}
                className="group relative flex flex-col p-7 sm:p-8"
              >
                {/* Border mengikuti bentuk chamfer: lapisan luar (abu sebagai
                    garis) + lapisan dalam (latar kartu). Keduanya di-clip dengan
                    bentuk yang sama, lapisan dalam digeser 1px ke dalam. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gray-300 transition-colors group-hover:bg-secondary/40"
                  style={{ clipPath: CARD_CLIP_PATH }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[1px] bg-gray-50 transition-colors group-hover:bg-gray-100"
                  style={{ clipPath: CARD_CLIP_PATH }}
                />

                {/* Aksen sudut terpotong — echo dari bahasa chamfer flomodia. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-5 h-2 w-2 rotate-45 bg-secondary/40"
                />

                {/* Kepala kartu: label kategori kecil + nomor urut. */}
                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {pil.label}
                  </span>
                  <span className="text-xs font-bold tabular-nums text-gray-300">
                    {pil.no}
                  </span>
                </div>

                <h3 className="relative mt-4 text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                  {pil.title}
                </h3>

                <span className="relative mt-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-accent">
                  <Icon className="h-5 w-5" />
                </span>

                <p className="relative mt-4 text-sm leading-relaxed text-gray-500">
                  {pil.desc}
                </p>

                <ul className="relative mt-6 space-y-2.5 border-t border-gray-300/70 pt-6">
                  {pil.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Penutup: fakta 44 modul + tautan katalog berkurung siku. */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-700">
            Semua pilar berjalan di atas satu basis data yang sama — 44 modul
            siap dikonfigurasi.
          </p>

          <Link
            href="/produk/erp"
            className="group relative inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 focus-visible:outline-none"
          >
            <span>Buka katalog modul &amp; harga</span>
            <ArrowRight className="h-4 w-4" />

            {/* Kurung siku yang melebar saat hover — sama seperti tombol footer. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(.28,1.78,.16,.93)] group-hover:scale-110"
            >
              {BUTTON_CORNER_PATHS.map((corner) => (
                <span
                  key={corner.d}
                  className={`absolute flex h-4 w-4 items-center justify-center text-accent ${corner.className}`}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 17 17"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d={corner.d}
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              ))}
            </span>
          </Link>
        </div>
      </div>

      {/* Transisi bertangga "impact" (versi bawah, viewBox 0 0 1280 76) di
          tepi ATAS section. Bidang navy mengisi bagian atas kotak dan tepi
          bawahnya turun bertangga — jadi ia terbaca sebagai perpanjangan band
          `Stats` di atasnya yang menetes ke kanvas terang, bukan sebagai
          dekorasi tambahan. `fill` navy, karena yang digambar milik band itu. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-10 sm:h-16"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1280 76"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={IMPACT_BOTTOM_PATH}
            fill="var(--color-primary)"
          />
        </svg>
      </div>
    </section>
  );
}
