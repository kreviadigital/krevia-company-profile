"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, ShieldCheck, MapPin, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function HomeCtaSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-transparent">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#101D35] via-[#142340] to-[#0B1322] text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden text-center space-y-8">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#24D6B0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15]">
            Siap Menghubungkan Seluruh Alur Kerja Bisnis Anda?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Mulai dari konsultasi hambatan operasional, eksplorasi 44 modul ERP, hingga pembuatan website company profile berstandar korporat bersama tim rekayasa Krevia Digital.
          </p>
        </div>

        {/* Dual Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#24D6B0] hover:bg-[#1AB895] text-[#101D35] font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer group"
          >
            <span>Buka Formulir Konsultasi</span>
            <ArrowRight className="w-4 h-4 text-[#101D35] transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={SITE_CONFIG.getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#24D6B0]" />
            <span>Chat WhatsApp Resmi</span>
          </a>
        </div>

        {/* Trust Points */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 relative z-10">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#24D6B0]" />
            <span>Basis Operasional Pekanbaru, Riau</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#24D6B0]" />
            <span>Zero Vendor Lock-in & Kepemilikan Data Penuh</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#24D6B0]" />
            <span>Respon Cepat 1–2 Jam Kerja</span>
          </div>
        </div>

      </div>
    </section>
  );
}
