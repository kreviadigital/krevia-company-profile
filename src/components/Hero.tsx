"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";
import { handleNavClick } from "@/lib/smoothScroll";

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-300/80 text-[#101D35] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#24D6B0]" />
              <span>Sistem Bisnis Terintegrasi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101D35] leading-[1.12]">
              Hubungkan Seluruh Operasional Bisnis ke Dalam Satu Sistem.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Krevia Digital membangun solusi ERP modular untuk membantu bisnis menghubungkan alur kerja, meningkatkan visibilitas operasional, dan mengelola informasi secara terpadu.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, "#pricing")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#101D35] hover:bg-[#1C2E4F] text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:shadow-lg shadow-sm cursor-pointer group"
              >
                <span>Lihat Paket Harga</span>
                <ArrowRight className="w-4 h-4 text-[#24D6B0] transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#101D35] font-semibold text-sm sm:text-base border border-slate-300/80 transition-colors cursor-pointer"
              >
                Konsultasi Kebutuhan Bisnis
              </a>
            </div>

            {/* Credibility Micro-Bar */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#24D6B0]" />
                <span>Logika operasional teruji lapangan</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#24D6B0]" />
                <span>Arsitektur modular fleksibel</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean & Elegant Krevia Brand Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-gradient-to-br from-[#24D6B0]/15 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Main Brand Showcase Card */}
            <div className="relative bg-[#101D35] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-700/80 overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col items-center justify-center text-center">
              
              {/* Subtle Ambient Background Mesh & Glow */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#24D6B0]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-sm mx-auto">
                {/* Floating Emblem */}
                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-[#24D6B0]/30 to-blue-500/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#0B1322] border border-slate-700/80 shadow-2xl p-4 flex items-center justify-center">
                    <Image
                      src="/logo-mark.png"
                      alt="Krevia Digital Emblem"
                      width={112}
                      height={112}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                {/* Brand Identity Typography */}
                <div className="space-y-2">
                  <Image
                    src="/logo-horizontal.png"
                    alt="Krevia Digital"
                    width={320}
                    height={76}
                    className="h-8 sm:h-9 w-auto mx-auto object-contain brightness-0 invert opacity-95"
                    priority
                  />
                  <p className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
                    Platform ERP Modular & Solusi Bisnis Terintegrasi
                  </p>
                </div>

                {/* Subtitle / Verification Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#24D6B0] animate-pulse" />
                  <span>Sistem Operasional Bisnis Terintegrasi</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
