"use client";

import React from "react";
import Image from "next/image";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href, { offset: 80, duration: 1200 });
    window.history.pushState(null, "", href);
  };

  return (
    <section id="hero" className="scroll-mt-24 pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-[#0D1829] leading-[1.12]">
              Berhenti mencatat di buku. Jalankan bisnis dari satu layar.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Kami membuat sistem untuk hotel, bengkel, dan UMKM di Pekanbaru: reservasi yang tidak bentrok, riwayat servis yang tidak hilang, laporan yang bisa dibaca kapan saja.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-7">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0D1829] hover:bg-slate-800 text-white font-medium text-sm sm:text-base transition-all duration-200 hover:shadow-lg shadow-sm cursor-pointer"
              >
                Ceritakan kebutuhan Anda
              </a>

              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, "#services")}
                className="text-sm sm:text-base font-semibold text-[#0D1829] underline underline-offset-8 decoration-slate-300 hover:decoration-[#0D1829] transition-colors cursor-pointer py-2"
              >
                Lihat layanan
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Monogram Graphic & Live Operational Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[420px] py-4">
            {/* Center Monogram Graphic */}
            <div className="relative w-64 sm:w-72 aspect-square flex items-center justify-center">
              <Image
                src="/logo-mark.png"
                alt="Krevia Digital Emblem"
                width={320}
                height={320}
                className="w-full h-full object-contain select-none opacity-95 drop-shadow-sm"
                priority
              />
            </div>

            {/* Floating Card 1: Reservasi Hotel */}
            <div className="absolute top-2 left-0 sm:-left-4 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 max-w-[210px] sm:max-w-[230px] transition-transform hover:-translate-y-1 duration-200">
              <p className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                RESERVASI · CONTOH
              </p>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                Kamar Deluxe 204
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Check-in 18 Okt · 2 malam
              </p>
              <div className="mt-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#0D1829] text-white text-[11px] font-medium shadow-xs">
                  Terkonfirmasi
                </span>
              </div>
            </div>

            {/* Floating Card 2: Servis Bengkel Pekanbaru (BM Plat) */}
            <div className="absolute bottom-2 right-0 sm:-right-4 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 max-w-[240px] sm:max-w-[270px] transition-transform hover:-translate-y-1 duration-200">
              <p className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                SERVIS · CONTOH
              </p>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                BM 1234 AB
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Ganti oli + filter udara
              </p>
              <div className="mt-2.5 pt-2 border-t border-slate-100">
                <p className="text-[11px] font-medium text-slate-600 leading-tight">
                  Pengerjaan 75% · pengingat servis berikutnya aktif
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
