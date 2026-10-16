"use client";

import React, { useState } from "react";
import { 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  FileCheck, 
  Clock, 
  Lock, 
  MessageSquare, 
  ArrowRight 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { smoothScrollTo } from "@/lib/smoothScroll";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first question

  const faqs: FaqItem[] = [
    {
      category: "Kepemilikan & Hak Cipta",
      question: "Apakah source code, database, dan sistem sepenuhnya menjadi milik perusahaan kami?",
      answer: "Ya, 100% mutlak milik Anda. Setelah serah terima proyek dan pelunasan, seluruh hak kekayaan intelektual (IP), repositori kode sumber (Git source code), skema basis data, dan aset arsitektur diserahkan sepenuhnya kepada perusahaan Anda. Krevia Digital tidak menerapkan sistem sewa lisensi tahunan ataupun vendor lock-in. Anda memiliki kebebasan penuh untuk mengelola atau mengembangkannya secara mandiri di kemudian hari.",
    },
    {
      category: "Kerahasiaan Data",
      question: "Apakah Krevia Digital bersedia menandatangani Non-Disclosure Agreement (NDA) sebelum diskusi?",
      answer: "Tentu saja. Kami sangat menghargai privasi dan kerahasiaan proses bisnis, strategi operasional, serta data sensitif klien kami. Kami siap menandatangani dokumen NDA (Perjanjian Kerahasiaan) resmi berbadan hukum sebelum Anda membagikan detail alur kerja teknis atau data operasional perusahaan.",
    },
    {
      category: "Garansi & Purnajual",
      question: "Bagaimana dukungan teknis dan garansi sistem setelah tahap peluncuran (Go-Live)?",
      answer: "Setiap proyek rekayasa perangkat lunak Krevia Digital dilindungi dengan Garansi Bug-Free selama 3 hingga 6 bulan pasca peluncuran tanpa biaya tambahan. Jika ditemukan kesalahan sistem atau anomali teknis yang tidak sesuai spesifikasi awal, tim engineer kami akan menyelesaikannya dengan prioritas tertinggi. Kami juga menyediakan opsi kontrak Service Level Agreement (SLA) untuk pemeliharaan preventif, security patch, dan backup berkala.",
    },
    {
      category: "Skema Finansial",
      question: "Bagaimana mekanisme dan skema pembayaran proyek di Krevia Digital?",
      answer: "Pembayaran dilakukan secara transparan dan bertahap berbasis pencapaian (Milestone-Based): biasanya dimulai dengan Down Payment (DP) untuk fase Discovery & Arsitektur Sistem, pembayaran termin sesuai progres modul yang diverifikasi, dan termin final setelah sistem lolos User Acceptance Testing (UAT) serta siap dideploy ke server produksi.",
    },
    {
      category: "Integrasi Sistem",
      question: "Apakah sistem baru dapat diintegrasikan dengan database lama atau software pihak ketiga?",
      answer: "Sangat bisa. Kami memiliki keahlian mendalam dalam System Integration & API Engineering. Kami dapat menghubungkan sistem baru dengan database legacy (seperti MySQL, SQL Server, PostgreSQL, Oracle), sistem akuntansi/ERP global (seperti SAP, Accurate), Payment Gateway (Midtrans, Xendit), hingga hardware IoT seperti barcode scanner pabrik dan mesin absensi RFID.",
    },
    {
      category: "Timeline & Metodologi",
      question: "Berapa lama estimasi durasi pengerjaan dan bagaimana transparansi progresnya?",
      answer: "Durasi bervariasi tergantung skala kompleksitas: modul digitalisasi operasional spesifik umumnya memakan waktu 4–8 minggu, sedangkan sistem enterprise terintegrasi memakan waktu 10–16 minggu. Kami menerapkan metodologi Agile-Scrum dengan sprint demo berkala setiap 2 minggu, sehingga Anda dapat langsung menguji setiap fitur yang selesai dan memberikan masukan secara iteratif.",
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
    <section id="faq" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Transparansi & Tata Kelola Kemitraan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Jawaban transparan mengenai kepemilikan kode, kerahasiaan data, skema pembayaran, dan jaminan purna jual bersama Krevia Digital.
          </p>
        </div>

        {/* 4 Trust Badges Horizontal Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14">
          <div className="p-4 rounded-2xl bg-[#FAFCFF] border border-slate-200/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#101D35]">100% Hak Cipta</p>
              <p className="text-[11px] text-slate-500">Source code milik Anda</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFCFF] border border-slate-200/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#101D35]">NDA Terikat Hukum</p>
              <p className="text-[11px] text-slate-500">Kerahasiaan data terjamin</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFCFF] border border-slate-200/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#101D35]">Garansi Bug 3-6 Bln</p>
              <p className="text-[11px] text-slate-500">Dukungan purna jual aktif</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFCFF] border border-slate-200/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#101D35]">Milestone Transparan</p>
              <p className="text-[11px] text-slate-500">Sprint demo setiap 2 pekan</p>
            </div>
          </div>
        </div>

        {/* Accordion Questions List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-blue-200 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/10"
                    : "bg-[#FAFCFF] border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-blue-700 block">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#101D35] block leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-600"
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
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct Contact Inquiries Strip */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-blue-50/80 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#101D35]">
                Ada pertanyaan teknis yang belum terjawab di sini?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Diskusikan langsung kebutuhan spesifik perusahaan Anda dengan tim arsitek teknologi kami.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            onClick={handleContactClick}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#101D35] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-md shadow-[#101D35]/20 hover:shadow-[#1D4ED8]/25 transition-all duration-200 cursor-pointer"
          >
            <span>Tanya Langsung ke Tim Kami</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
