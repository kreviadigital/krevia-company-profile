"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, Wallet, Truck, Users, Check, ArrowRight } from "lucide-react";
import { useState } from "react";

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
 * disalin apa adanya dari flomodia.com, `fill` dipetakan ke palet Krevia):
 *
 * 1. `IMPACT_BOTTOM_PATH` — tepi ATAS section. Bidang navy mengisi bagian atas
 *    kotak dan tepi bawahnya turun bertangga, jadi ia terbaca sebagai
 *    perpanjangan band `Stats` di atasnya yang menetes ke kanvas terang.
 * 2. `BUTTON_CORNER_PATHS` — kurung siku di tombol CTA, sama seperti Footer.
 *
 * Badan section memakai pola "index": satu kolom pernyataan di kiri (sticky),
 * satu kolom daftar bernomor di kanan. Empat pilar memang berurutan dan
 * sejajar, jadi nomor urut membantu pembaca menempatkan diri.
 *
 * Kolom kiri **sticky** dan **bereaksi terhadap hover** baris di kanan: saat
 * sebuah baris disorot, kartu ringkasan di kiri berganti menampilkan pilar itu.
 * Jadi kolom kiri bukan sekadar pernyataan pembuka, melainkan panel pembaca
 * dari daftar di sebelahnya. Sticky hanya aktif mulai `lg` — di bawah itu kedua
 * kolom menumpuk, dan kolom yang menempel di layar sempit justru memutus alur
 * baca.
 *
 * Interaksinya murni CSS + satu state React (`hoveredIndex`) di dalam komponen.
 * Tidak ada animasi berbasis scroll dan tidak ada `useEffect`, jadi tidak ada
 * yang perlu dimatikan untuk `prefers-reduced-motion`; transisi warnanya tetap
 * jalan karena itu transisi warna biasa.
 *
 * Bentuk kurung siku di tombol CTA memakai `BUTTON_CORNER_PATHS` dari Footer
 * supaya bahasa visualnya nyambung dengan tombol di sana.
 *
 * Seluruh warnanya memakai palet Krevia (lihat `globals.css`): navy
 * `--color-primary`, biru `--color-secondary`, cyan `--color-accent`, dan abu
 * netral gray-*. Ikon pilarnya tetap lucide seperti section lain.
 *
 * Komponen ini tidak lagi murni statis: ia menyimpan satu state (`hoveredIndex`)
 * untuk menggerakkan panel kiri. Tidak ada `useEffect`, listener scroll, atau
 * requestAnimationFrame.
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
    preview:
      "Pilar ini menyatukan catatan lapangan dengan realisasi anggaran, supaya selisih antara rencana dan kenyataan terlihat saat masih bisa ditindaklanjuti.",
    points: ["Site Daily Log Terpadu", "Kontrol Deviasi RAB", "Persetujuan Bertingkat"],
  },
  {
    no: "02",
    label: "Arus Kas & Buku Besar",
    title: "Keuangan & Akuntansi",
    icon: Wallet,
    desc: "Rekonsiliasi transaksi kasir, pencatatan invoice, dan laporan laba-rugi otomatis tanpa perlu rekap ulang manual di akhir bulan.",
    preview:
      "Pilar ini menutup bulan tanpa rekap manual: transaksi kasir, invoice, dan pelunasan mengalir ke laporan yang sama.",
    points: ["Pencatatan Multi-Rekening", "Invoice & Pelunasan Cepat", "Laporan Keuangan Otomatis"],
  },
  {
    no: "03",
    label: "Logistik & Inventaris",
    title: "Supply Chain & Gudang",
    icon: Truck,
    desc: "Sinkronisasi pesanan pembelian (PO), surat jalan penerimaan barang, dan peringatan batas minimum stok secara real-time.",
    preview:
      "Pilar ini menjaga barang dan dokumennya sejalan, dan memberi tahu sebelum stok menyentuh batas kritis.",
    points: ["Kontrol Stok Multi-Gudang", "Pencocokan PO & Faktur", "Peringatan Stok Kritis"],
  },
  {
    no: "04",
    label: "Karyawan & Payroll",
    title: "SDM & Penggajian",
    icon: Users,
    desc: "Manajemen data karyawan, presensi berbasis lokasi GPS untuk staf lapangan, serta perhitungan lembur dan slip gaji digital.",
    preview:
      "Pilar ini menangani tim lapangan dan kantor dengan aturan yang sama, dari presensi sampai slip gaji.",
    points: ["Presensi GPS Lapangan", "Kalkulasi Lembur Otomatis", "Distribusi Slip Gaji"],
  },
] as const;

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

/** Empat kurung siku tombol, sama dengan tombol di Footer. viewBox 0 0 17 17. */
const BUTTON_CORNER_PATHS = [
  { className: "top-[-0.25rem] left-[-0.25rem]", d: "M1 16C1 8 8 1 16 1" },
  { className: "top-[-0.25rem] right-[-0.25rem]", d: "M16 16C16 8 9 1 1 1" },
  { className: "bottom-[-0.25rem] left-[-0.25rem]", d: "M1 1C1 9 8 16 16 16" },
  { className: "bottom-[-0.25rem] right-[-0.25rem]", d: "M16 1C16 9 9 16 1 16" },
];

export function ErpOverview() {
  // Pilar yang sedang disorot dari daftar di kanan. `null` = belum ada hover,
  // dan panel kiri kembali menampilkan ringkasan netral (bukan pilar tertentu).
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hovered = hoveredIndex === null ? null : PILLARS[hoveredIndex];

  return (
    <section
      id="erp-overview"
      aria-label="Empat pilar sistem Krevia Digital"
      className="relative scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-[80rem] space-y-12">
        {/* Indeks pilar: kolom kiri (sticky, jadi panel pembaca) dan kolom
            kanan (daftar baris bernomor). Kolom kiri menempel mulai `lg` saja;
            di bawah itu kedua kolom menumpuk dan sticky tidak lagi masuk akal. */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Kolom kiri — panel pembaca. Ikut menempel saat daftar di kanan
              digulir, dan isinya berganti mengikuti baris yang di-hover. */}
          <div className="space-y-6 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Empat pilar yang menopang{" "}
              <span className="text-secondary">operasional</span>.
            </h2>

            <p className="max-w-[42ch] text-base leading-relaxed text-gray-700">
              {hovered
                ? hovered.preview
                : "Krevia Digital menyusun sistem sebagai fondasi modular. Setiap pilar dapat diaktifkan bertahap, sesuai kesiapan tim Anda."}
            </p>

            <p className="text-sm text-gray-500">
              {hovered
                ? `Pilar ${hovered.no} dari 04 · ${hovered.points.length} contoh kapabilitas`
                : "Semua pilar berjalan di atas satu basis data yang sama — 44 modul siap dikonfigurasi."}
            </p>

            {/* Kartu ringkasan. Empat kotak ikon tetap ada sebagai penanda
                posisi; yang berubah saat hover adalah penonjolan kotak yang
                aktif dan angka besar di bawahnya. Tidak ada aset gambar. */}
            <div
              aria-hidden="true"
              className="relative overflow-hidden rounded-3xl bg-primary p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                {PILLARS.map((pil, i) => {
                  const Icon = pil.icon;
                  const isActive = hoveredIndex === i;
                  return (
                    <span
                      key={pil.no}
                      className={`flex h-12 w-12 flex-1 items-center justify-center rounded-2xl ring-1 transition-colors duration-300 sm:h-14 ${
                        isActive
                          ? "bg-accent/20 text-white ring-accent/60"
                          : "bg-white/[0.06] text-accent ring-white/10"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  );
                })}
              </div>

              <div className="mt-6 text-white">
                {hovered ? (
                  <>
                    <span className="block text-lg font-extrabold tracking-tight sm:text-xl">
                      {hovered.title}
                    </span>
                    <span className="mt-1 block text-sm text-gray-300">
                      {hovered.label}
                    </span>
                  </>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold tabular-nums sm:text-4xl">
                      44
                    </span>
                    <span className="text-sm text-gray-300">
                      modul di dalam empat pilar
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Tautan katalog dengan kurung siku, sama seperti tombol Footer. */}
            <Link
              href="/produk/erp"
              className="group relative inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 focus-visible:outline-none"
            >
              <span>Buka katalog modul &amp; harga</span>
              <ArrowRight className="h-4 w-4" />

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

          {/* Kolom kanan — daftar pilar bernomor, dipisah garis tipis. Barisnya
              jadi pemicu hover untuk panel kiri. */}
          <ol className="lg:col-span-7">
            {PILLARS.map((pil, i) => {
              const Icon = pil.icon;
              const isActive = hoveredIndex === i;
              return (
                <li key={pil.no} className="border-t border-gray-300/70">
                  <Link
                    href="/produk/erp"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(i)}
                    onBlur={() => setHoveredIndex(null)}
                    className="group flex items-start gap-5 py-6 focus-visible:outline-none sm:gap-6 sm:py-8"
                  >
                    <span
                      className={`mt-1 w-6 shrink-0 text-xs font-bold tabular-nums transition-colors ${
                        isActive ? "text-secondary" : "text-gray-500"
                      }`}
                    >
                      {pil.no}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2.5">
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5 shrink-0 text-secondary"
                        />
                        <span
                          className={`text-lg font-extrabold tracking-tight transition-colors sm:text-xl ${
                            isActive ? "text-secondary" : "text-gray-900"
                          }`}
                        >
                          {pil.title}
                        </span>
                      </span>

                      <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {pil.label}
                      </span>

                      <span className="mt-3 block text-sm leading-relaxed text-gray-500">
                        {pil.desc}
                      </span>

                      <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                        {pil.points.map((pt) => (
                          <span
                            key={pt}
                            className="flex items-center gap-1.5 text-xs text-gray-700"
                          >
                            <Check
                              aria-hidden="true"
                              className="h-3.5 w-3.5 shrink-0 text-secondary"
                            />
                            {pt}
                          </span>
                        ))}
                      </span>
                    </span>

                    {/* Bundaran panah di ujung tiap baris. Ikonnya lucide,
                        sama seperti ikon lain di section ini. */}
                    <span
                      aria-hidden="true"
                      className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isActive
                          ? "border-secondary bg-secondary text-white"
                          : "border-gray-300 text-gray-500"
                      }`}
                    >
                      <ArrowRight className="h-4 w-4 -rotate-45" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
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
