"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

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
        "Pembuatan Website Company Profile berbasis investasi satu kali (one-time project) tanpa biaya langganan bulanan software yang membebani. Estimasi pengerjaan berkisar 7–14 hari kerja, sudah mencakup domain kustom, server kilat, integrasi kontak WhatsApp resmi, serta struktur kode bersih yang ramah mesin pencari (SEO).",
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
    <section id="faq" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-[#101D35] text-xs font-bold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#24D6B0]" />
            <span>Tanya Jawab & Transparansi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
            Pertanyaan yang Sering Diajukan.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Jawaban lugas dan transparan mengenai implementasi platform ERP modular, keamanan data bisnis, serta layanan digital Krevia.
          </p>
        </div>

        {/* Accordion Surface */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm divide-y divide-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4 sm:py-5 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left gap-4 py-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24D6B0] rounded-lg"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? "text-[#101D35]" : "text-slate-800 group-hover:text-[#101D35]"
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen 
                      ? "bg-[#101D35] text-white rotate-180" 
                      : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-2 pr-6 text-sm sm:text-base text-slate-600 leading-relaxed">
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
    </section>
  );
}
