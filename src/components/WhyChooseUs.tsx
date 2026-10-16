"use client";

import React from "react";
import { Lock, Boxes, MessageSquareCheck, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function WhyChooseUs() {
  const points = [
    {
      icon: Lock,
      code: "NO_LOCK_IN",
      title: "100% Kepemilikan Kode & Data",
      desc: "Tidak ada keterikatan lisensi eksklusif atau sandbox tertutup. Seluruh kode, skema database, dan aset diserahkan ke repo Git privat milik perusahaan Anda.",
    },
    {
      icon: MessageSquareCheck,
      code: "DIRECT_COMMS",
      title: "Komunikasi Langsung Tanpa Perantara",
      desc: "Anda berdiskusi langsung dengan software engineer dan systems architect kami di Pekanbaru. Komunikasi teknis cepat, akurat, dan tanpa distorsi informasi.",
    },
    {
      icon: Boxes,
      code: "MODULAR_ARCH",
      title: "Arsitektur Modular & Siap Skala",
      desc: "Sistem dirancang dengan pemisahan domain yang bersih. Penambahan fitur baru di masa depan tidak akan merusak kestabilan fondasi yang sudah berjalan.",
    },
    {
      icon: ShieldCheck,
      code: "SECURE_STANDARDS",
      title: "Keamanan Data Standar Enterprise",
      desc: "Menerapkan enkripsi data saat diam dan transit, Role-Based Access Control (RBAC) ketat, sanitasi input terhadap celah injeksi, dan jejak audit aktivitas sistem.",
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-800 font-mono-code text-xs mb-4">
            <span className="text-sky-600 font-bold">// 03</span>
            <span>ENGINEERING_STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Standar Rekayasa yang Membedakan Kami
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Kami menjamin setiap proyek dieksekusi dengan disiplin teknis tinggi agar sistem Anda dapat diandalkan selama bertahun-tahun.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <SpotlightCard key={idx} className="flex flex-col justify-between bg-white border-slate-200 shadow-xs hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-code text-[11px] text-slate-400 font-medium">[{pt.code}]</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{pt.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-mono-code text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>KREVIA_VERIFIED</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
