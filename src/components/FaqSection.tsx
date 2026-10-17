"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Berapa lama pengerjaannya?",
      answer:
        "Tergantung lingkup proyek, estimasi kami sampaikan setelah konsultasi awal. Biasanya berkisar antara 2 hingga 8 minggu tergantung kompleksitas modul yang dibangun.",
    },
    {
      question: "Apakah ada biaya konsultasi?",
      answer: "Konsultasi awal gratis dan tanpa kewajiban.",
    },
    {
      question: "Apakah bisa bertemu langsung?",
      answer:
        "Kami bekerja online. Untuk klien di Pekanbaru, kami bisa datang langsung.",
    },
    {
      question: "Bagaimana dukungan setelah peluncuran?",
      answer:
        "Kami mendampingi tim Anda setelah sistem berjalan, termasuk pelatihan pengguna dan perbaikan kendala teknis.",
    },
    {
      question: "Apakah cocok untuk usaha kecil?",
      answer: "Ya, paket dirancang bertahap agar sesuai anggaran UMKM.",
    },
    {
      question: "Bisakah terhubung dengan sistem yang sudah ada?",
      answer: "Bisa, lewat layanan System Integration.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-24 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1829] tracking-tight mb-8 sm:mb-10">
          Pertanyaan umum.
        </h2>

        <div className="divide-y divide-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left gap-4 py-2 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-[#101D35] transition-colors flex items-center gap-3">
                    <ChevronRight
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-90 text-[#0D1829]" : ""
                      }`}
                    />
                    <span>{faq.question}</span>
                  </span>
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
                      <div className="pl-7 pr-4 pb-3 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
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
