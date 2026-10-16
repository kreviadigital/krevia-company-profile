"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { smoothScrollTo } from "@/lib/smoothScroll";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      id: "source-code-ip",
      question: "Apakah seluruh source code dan hak cipta sistem menjadi milik kami?",
      answer: "Ya, 100% mutlak milik perusahaan Anda. Setelah serah terima dan pelunasan, seluruh repositori kode sumber, skema basis data, dan dokumentasi arsitektur diserahkan sepenuhnya. Kami tidak membebankan biaya lisensi tahunan, royalti berulang, atau sistem vendor lock-in.",
    },
    {
      id: "nda-confidentiality",
      question: "Apakah Krevia Digital bersedia menandatangani Non-Disclosure Agreement (NDA)?",
      answer: "Tentu. Kami menerapkan standar kerahasiaan ketat dan siap menandatangani dokumen NDA berbadan hukum resmi sebelum Anda membagikan alur proses bisnis internal atau data operasional perusahaan.",
    },
    {
      id: "warranty-sla",
      question: "Bagaimana garansi dan pemeliharaan sistem pasca peluncuran (Go-Live)?",
      answer: "Setiap sistem dilindungi masa garansi perbaikan bug gratis selama 3 hingga 6 bulan pasca peluncuran. Kami juga menyediakan opsi kontrak Service Level Agreement (SLA) untuk pemantauan performa server, security update, dan cadangan data rutin.",
    },
    {
      id: "payment-milestone",
      question: "Bagaimana skema pembayaran proyek di Krevia Digital?",
      answer: "Pembayaran dilakukan bertahap sesuai pencapaian (milestone-based): diawali uang muka (DP) untuk fase arsitektur & desain, pembayaran termin sesuai modul fungsional yang diverifikasi, dan pelunasan final setelah lolos User Acceptance Testing (UAT).",
    },
    {
      id: "legacy-integration",
      question: "Apakah sistem baru dapat dihubungkan dengan database atau aplikasi lama kami?",
      answer: "Bisa. Kami memiliki keahlian integrasi API untuk menjembatani sistem baru dengan basis data lama (MySQL, SQL Server, Oracle), software akuntansi (SAP, Accurate), payment gateway nasional, maupun perangkat keras operasional.",
    },
    {
      id: "timeline-agile",
      question: "Berapa lama estimasi pengerjaan dan bagaimana pemantauan progresnya?",
      answer: "Digitalisasi modul spesifik umumnya memakan waktu 4–8 minggu, sedangkan sistem enterprise terintegrasi berkisar 10–16 minggu. Kami menggunakan metode Agile dengan demo berkala setiap 2 pekan, sehingga Anda dapat langsung menguji setiap progres.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("#contact", { offset: 80, duration: 1500 });
    window.history.pushState(null, "", "#contact");
  };

  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Section Overview */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-bold tracking-wider uppercase text-[#101D35] bg-blue-50/60 px-3.5 py-1.5 rounded-full border border-blue-100">
              Tata Kelola Kemitraan
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101D35] tracking-tight mt-4 leading-tight">
              Pertanyaan yang Sering Diajukan
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Transparansi penuh mengenai kepemilikan kode, kerahasiaan data perusahaan, skema pembayaran, dan garansi teknis sebelum memulai proyek bersama kami.
            </p>

            {/* Direct Inquiry Card */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#101D35] text-white flex items-center justify-center shadow-xs">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#101D35]">
                  Ada pertanyaan teknis lain?
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Tim teknis kami di Pekanbaru siap mendiskusikan kebutuhan sistem Anda secara langsung.
              </p>
              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#101D35] hover:text-[#1D4ED8] group/link transition-colors cursor-pointer"
              >
                <span>Konsultasi Teknis Gratis</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Hairline Accordion List */}
          <div className="lg:col-span-7">
            <div className="border-t border-b border-slate-200/90 divide-y divide-slate-200/90">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.id} className="transition-colors duration-200">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full py-6 text-left flex items-start justify-between gap-6 cursor-pointer focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-base sm:text-lg font-bold transition-colors leading-snug ${
                        isOpen ? "text-[#101D35]" : "text-slate-800 group-hover:text-[#101D35]"
                      }`}>
                        {faq.question}
                      </span>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                        isOpen 
                          ? "bg-[#101D35] text-white" 
                          : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                      }`}>
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
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
                          <div className="pb-6 pr-10 text-sm sm:text-base text-slate-600 leading-relaxed">
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

        </div>
      </div>
    </section>
  );
}
