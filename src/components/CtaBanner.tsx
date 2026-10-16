"use client";

import React from "react";
import { MessageCircle, ArrowRight, Sparkles, Mail } from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-slate-50/90 border border-slate-200/90 shadow-xl shadow-slate-900/5">
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#101D35]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1D4ED8]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 text-[#101D35] text-xs font-bold mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>Mulai Langkah Pertama Transformasi Bisnis Anda</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
              Siap Mengakselerasi Efisiensi Sistem Bisnis Anda?
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Diskusikan kebutuhan custom software, integrasi API, atau digitalisasi operasional perusahaan Anda bersama tim Krevia Digital di Pekanbaru.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6282283000000?text=Halo%20Krevia%20Digital,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20proyek%20sistem%20bisnis%20kami."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#101D35] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-xl shadow-[#101D35]/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("#contact", { offset: 80, duration: 1500 });
                  window.history.pushState(null, "", "#contact");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#101D35] font-bold text-sm border border-slate-200 shadow-xs transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#1D4ED8]" />
                <span>Isi Formulir Kebutuhan</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
