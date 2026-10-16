"use client";

import React from "react";
import { MessageCircle, ArrowRight, Sparkles, Mail } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden text-white">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mulai Langkah Pertama Transformasi Bisnis Anda</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Siap Mengakselerasi Efisiensi Sistem Bisnis Anda?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Diskusikan kebutuhan custom software, integrasi API, atau digitalisasi operasional perusahaan Anda bersama tim Krevia Digital di Pekanbaru.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/6282283000000?text=Halo%20Krevia%20Digital,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20proyek%20sistem%20bisnis%20kami."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Isi Formulir Kebutuhan</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
