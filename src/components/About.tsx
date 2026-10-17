"use client";

import React from "react";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-[#0D1829] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Dari Pekanbaru, <br />
              bekerja online.
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Krevia Digital membantu UMKM dan bisnis menengah meninggalkan pencatatan manual dengan sistem yang sederhana dan sesuai anggaran. Kami bekerja online, dan untuk klien di Pekanbaru kami siap datang langsung.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Didirikan oleh praktisi rekayasa perangkat lunak lokal, kami mendedikasikan keahlian teknologi untuk memodernisasi cara kerja bisnis di Riau tanpa keterikatan pada platform vendor yang kaku atau biaya bulanan yang memberatkan.
            </p>

            <div className="pt-2 space-y-4 text-sm sm:text-base leading-relaxed">
              <div>
                <span className="font-bold text-[#D4A373]">Sederhana. </span>
                <span className="text-slate-300">
                  Mudah dipakai tim tanpa latar belakang teknis.
                </span>
              </div>

              <div>
                <span className="font-bold text-[#D4A373]">Transparan. </span>
                <span className="text-slate-300">
                  Lingkup, jadwal, dan biaya disepakati sebelum mulai.
                </span>
              </div>

              <div>
                <span className="font-bold text-[#D4A373]">Bertahap. </span>
                <span className="text-slate-300">
                  Mulai dari yang paling penting, tumbuh bersama usaha Anda.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
