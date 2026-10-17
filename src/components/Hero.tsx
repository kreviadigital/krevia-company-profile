"use client";

import React, { useState } from "react";
import Image from "next/image";
import { handleNavClick } from "@/lib/smoothScroll";

export function Hero() {
  // Interactive simulation state for Hotel card
  const hotelReservations = [
    {
      room: "Kamar Deluxe 204",
      stay: "Check-in 18 Okt · 2 malam",
      status: "Terkonfirmasi",
    },
    {
      room: "Kamar Suite 101",
      stay: "Check-in 19 Okt · 1 malam",
      status: "Terkonfirmasi",
    },
    {
      room: "Kamar Executive 305",
      stay: "Check-in 20 Okt · 3 malam",
      status: "Terkonfirmasi",
    },
  ];
  const [hotelIndex, setHotelIndex] = useState(0);

  // Interactive simulation state for Workshop card
  const workshopServices = [
    {
      plate: "BM 1234 AB",
      item: "Ganti oli + filter udara",
      progress: "Pengerjaan 75% · pengingat servis berikutnya aktif",
    },
    {
      plate: "BM 5678 CD",
      item: "Tune up mesin & rem",
      progress: "Pengerjaan 90% · pengingat servis berikutnya aktif",
    },
    {
      plate: "BM 9012 EF",
      item: "Servis berkala 10.000 km",
      progress: "Selesai 100% · notifikasi WA terkirim ke pemilik",
    },
  ];
  const [workshopIndex, setWorkshopIndex] = useState(0);

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
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0D1829] hover:bg-slate-800 text-white font-medium text-sm sm:text-base transition-all duration-200 hover:shadow-lg shadow-sm cursor-pointer"
              >
                Ceritakan kebutuhan Anda
              </a>

              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "#services")}
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

            {/* Floating Card 1: Reservasi Hotel (Interactive) */}
            <button
              type="button"
              onClick={() => setHotelIndex((prev) => (prev + 1) % hotelReservations.length)}
              className="absolute top-2 left-0 sm:-left-4 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 max-w-[210px] sm:max-w-[230px] transition-all hover:-translate-y-1 hover:shadow-xl text-left cursor-pointer group"
              title="Klik untuk simulasi data reservasi lain"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                  RESERVASI · CONTOH
                </p>
                <span className="text-[9px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Klik ↻
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                {hotelReservations[hotelIndex].room}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {hotelReservations[hotelIndex].stay}
              </p>
              <div className="mt-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#0D1829] text-white text-[11px] font-medium shadow-xs">
                  {hotelReservations[hotelIndex].status}
                </span>
              </div>
            </button>

            {/* Floating Card 2: Servis Bengkel Pekanbaru (Interactive) */}
            <button
              type="button"
              onClick={() => setWorkshopIndex((prev) => (prev + 1) % workshopServices.length)}
              className="absolute bottom-2 right-0 sm:-right-4 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 max-w-[240px] sm:max-w-[270px] transition-all hover:-translate-y-1 hover:shadow-xl text-left cursor-pointer group"
              title="Klik untuk simulasi progres servis lain"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                  SERVIS · CONTOH
                </p>
                <span className="text-[9px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Klik ↻
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                {workshopServices[workshopIndex].plate}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {workshopServices[workshopIndex].item}
              </p>
              <div className="mt-2.5 pt-2 border-t border-slate-100">
                <p className="text-[11px] font-medium text-slate-600 leading-tight">
                  {workshopServices[workshopIndex].progress}
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
