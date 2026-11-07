"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

/* -------------------------------------------------------------------------- */
/*  Geometri tepi section                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Pita `calendar-top` dari katalog Flomodia (`src/lib/flomodia-transitions.ts`,
 * slug `calendar-top`, 4× dipakai di sana). viewBox 1280×39, `fill-rule`
 * `nonzero`, tinggi asli 40px.
 *
 * Bentuknya **bukan bidang penuh**: koordinatnya turun sampai y=525, jadi yang
 * terlihat di dalam viewBox 0–39 hanyalah profil tanjakan di bagian atas.
 * Badannya yang panjang terpotong di tepi bawah pita, dan itu memang maksudnya —
 * di situ warnanya menyambung dengan latar section, jadi tidak terlihat jahitan.
 *
 * Dipakai sebagai pita di **tepi atas** section, menonjol keluar (`bottom:
 * calc(100% - 1px)`) dan diisi warna section ini sendiri, sehingga FAQ terlihat
 * "naik" menimpa section di atasnya.
 */
const CALENDAR_TOP_PATH =
  "M227.065 30.2033H9C-13.0914 30.2033 -31 48.1119 -31 70.2033V485C-31 507.091 -13.0914 525 8.99997 525H1268C1290.09 525 1308 507.091 1308 485V78.8315C1308 56.7402 1290.09 38.8315 1268 38.8315H1200.96C1194.96 38.8315 1189.19 36.444 1184.95 32.1944C1180.7 27.9449 1174.94 25.5573 1168.93 25.5573H867.849C857.236 25.5573 847.059 21.3402 839.557 13.8342L838.446 12.7231C830.944 5.21715 820.767 1 810.155 1H477.897C471.889 1 466.127 3.38756 461.879 7.63711C457.632 11.8867 451.87 14.2742 445.862 14.2742H265.507C258.297 14.2742 251.383 17.1393 246.286 22.2388C241.189 27.3382 234.275 30.2033 227.065 30.2033Z";

/**
 * Pita `calendar-bottom` — pasangan `calendar-top` dari katalog Flomodia yang
 * sama (`src/lib/flomodia-transitions.ts`, 6× dipakai di sana). viewBox 1280×39,
 * `fill-rule` `nonzero`, tinggi asli 40px.
 *
 * Ini **bukan** cermin dari `calendar-top`: `calendar-top` menanjak ke plateau
 * lalu turun, sedangkan `calendar-bottom` turun bertangga. Dipakai berpasangan
 * supaya tepi atas dan bawah section terasa satu keluarga.
 *
 * Sama seperti `calendar-top`, koordinat Y-nya jauh melewati viewBox (turun
 * sampai y=-485), jadi yang tampak hanya profil tangga di dalam 0–39 dan badannya
 * terpotong di tepi — di situlah warnanya menyambung dengan latar section.
 *
 * Dipakai sebagai pita di **tepi bawah** section, menonjol keluar (`top:
 * calc(100% - 1px)`) dan diisi warna section ini sendiri, sehingga FAQ terlihat
 * turun menimpa section berikutnya.
 */
const CALENDAR_BOTTOM_PATH =
  "M1049.93 9.79668L1268 9.7967C1290.09 9.79671 1308 -8.11189 1308 -30.2033L1308 -445C1308 -467.091 1290.09 -485 1268 -485L9.00005 -485C-13.0914 -485 -31 -467.092 -31 -445L-31 -38.8317C-31 -16.7403 -13.0914 1.16835 9 1.16835L76.0366 1.16835C82.0448 1.16835 87.8068 3.55592 92.054 7.80547C96.3013 12.055 102.063 14.4426 108.071 14.4426H409.155C419.767 14.4426 429.944 18.6597 437.446 26.1657L438.557 27.2769C446.059 34.7828 456.236 39 466.849 39H799.107C805.115 39 810.877 36.6124 815.121 32.3629C819.368 28.1133 825.13 25.7258 831.138 25.7258H1011.51C1018.72 25.7258 1025.63 22.8607 1030.73 17.7612C1035.83 12.6618 1042.74 9.79668 1049.93 9.79668Z";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for immediate context

  const faqs: FaqItem[] = [
    {
      question: "Bagaimana keamanan data finansial dan operasional perusahaan kami?",
      answer:
        "Seluruh data operasional dan keuangan bisnis dienkripsi end-to-end, disimpan dalam basis data terisolasi per perusahaan (multi-tenant isolation), dan dicadangkan secara otomatis setiap hari. Anda memegang kendali dan kepemilikan penuh 100% atas data bisnis Anda dan dapat mengekspornya sewaktu-waktu.",
    },
    {
      question: "Berapa lama proses implementasi ERP dari awal hingga tim siap pakai?",
      answer:
        "Kami menerapkan metodologi peluncuran bertahap (modular rollout). Modul prioritas utama (seperti Keuangan, Kasir/POS, atau Inventaris Gudang) umumnya siap digunakan dalam 2 hingga 4 minggu pertama, mencakup penyiapan konfigurasi awal, impor data historis, dan pelatihan staf.",
    },
    {
      question: "Apakah data dari spreadsheet (Excel) atau sistem lama bisa dimigrasikan?",
      answer:
        "Ya. Tim teknis Krevia akan mendampingi proses pembersihan, pemetaan, dan impor data historis perusahaan Anda—mulai dari daftar master barang, kontak rekanan/vendor, saldo awal buku besar, hingga data RAB proyek—ke dalam sistem Krevia.",
    },
    {
      question: "Bagaimana pelatihan bagi staf lapangan atau tim yang belum terbiasa sistem digital?",
      answer:
        "Antarmuka Krevia dirancang lugas dengan alur kerja minim klik yang ramah ponsel. Kami memberikan sesi pendampingan dan pelatihan langsung (on-site untuk wilayah Pekanbaru & Riau, atau daring terpandu se-Indonesia) serta modul petunjuk visual praktis agar staf lapangan dapat beradaptasi dengan cepat.",
    },
    {
      question: "Untuk layanan Website Company Profile, bagaimana skema biaya dan pengerjaannya?",
      answer:
        "Pembuatan Website Company Profile dirancang berbasis investasi satu kali (one-time project) sesuai cakupan kebutuhan bisnis Anda, tanpa biaya langganan bulanan software yang membebani. Sudah mencakup penataan narasi profesional, domain kustom, infrastruktur server kilat, integrasi kontak WhatsApp resmi, serta arsitektur kode Next.js yang ramah mesin pencari (SEO).",
    },
    {
      question: "Bisakah platform ERP dikustomisasi jika bisnis kami memiliki alur kerja spesifik?",
      answer:
        "Tentu. Berkat arsitektur modular terpadu, Krevia dapat membangun modul bespoke atau menyesuaikan alur persetujuan (approval flow bertingkat), logika harga khusus industri, atau integrasi API pihak ketiga tanpa mengorbankan stabilitas sistem inti.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 bg-white py-16 sm:py-24 px-4 sm:px-6"
    >
      {/* --- Tepi ATAS: pita `calendar-top` -------------------------------
          Menonjol keluar ke atas (`bottom-full`) dan diisi warna section ini
          sendiri, jadi FAQ-lah yang naik menimpa section sebelumnya — bukan
          section sebelumnya yang turun. `-1px` pada offset menutup garis
          rambut di sambungan (pola yang sama dipakai Flomodia aslinya).

          `z-20`: WhyKrevia di atasnya juga `relative` dan punya latar
          `bg-gray-100/50`, jadi tanpa z-index pita ini bisa tertutup. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[calc(100%-1px)] z-20 h-10"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1280 39"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d={CALENDAR_TOP_PATH} fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Pertanyaan yang Sering <span className="text-secondary">Diajukan</span>.
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Jawaban lugas dan transparan mengenai implementasi platform ERP modular, keamanan data bisnis, serta layanan digital Krevia.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-white border-secondary/60 shadow-sm"
                    : "bg-white/80 border-gray-300 hover:border-gray-400 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-primary text-accent rotate-180"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      {/* --- Tepi BAWAH: pita `calendar-bottom` ----------------------------
          Pasangan dari pita atas. viewBox 1280×39, `fill-rule` `nonzero`, jadi
          tidak perlu `evenodd`/`clipRule`. Tidak perlu dibalik: path ini memang
          sudah menggambar profil tangga yang menghadap ke bawah di dalam
          viewBox 0–39, dengan badan yang menyambung ke atas.

          Diisi warna section ini sendiri (`#ffffff`), sama seperti pita atas,
          sehingga yang terlihat adalah FAQ yang turun menimpa section
          berikutnya. Kedua tepi memakai warna yang sama supaya section ini
          terbaca sebagai satu panel utuh.

          `z-20` diperlukan: HomeCtaSection dan Footer datang setelahnya di
          DOM dan sama-sama berlatar, jadi tanpa z-index pita ini tertutup. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[calc(100%-1px)] z-20 h-20"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1280 39"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d={CALENDAR_BOTTOM_PATH} fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
