"use client";

import React from "react";
import { MapPin, Shield, Terminal, Users, Cpu, Check, Layers } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function About() {
  const commitments = [
    {
      code: "01",
      title: "Tanpa Perantara Sales Birokratis",
      desc: "Diskusi proyek Anda dilakukan langsung bersama Systems Architect dan Lead Engineer di Pekanbaru. Tidak ada janji muluk dari tim sales yang mustahil dieksekusi secara teknis.",
    },
    {
      code: "02",
      title: "100% Kepemilikan Intelektual Klien",
      desc: "Kami tidak menyandera sistem Anda. Seluruh kode sumber, dokumentasi arsitektur, dan skema basis data diserahkan secara utuh ke repositori privat perusahaan Anda.",
    },
    {
      code: "03",
      title: "Kualitas Kode Berstandar Enterprise",
      desc: "Menerapkan automated testing, CI/CD pipeline, type safety ketat dengan TypeScript, dan arsitektur modular yang siap discale seiring pertumbuhan bisnis Anda.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070A11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/80 text-cyan-400 font-mono-code text-xs mb-4">
            <span className="text-cyan-500 font-bold">// 02</span>
            <span>ORIGIN_AND_MANIFESTO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Rekayasa Software Serius, Lahir di Pekanbaru
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Krevia Digital didirikan untuk menjawab frustrasi pelaku bisnis terhadap software house generik yang menjual template rapuh dan menghilang saat sistem mengalami gangguan.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-7 bg-[#0b101c] border border-slate-800 rounded-xl p-7 sm:p-9 relative overflow-hidden">
            <div className="font-mono-code text-xs text-cyan-400/80 mb-3 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>PEKANBARU_ANCHOR // LOCAL_PARTNER_GLOBAL_STANDARDS</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Akselerator Transformasi Digital untuk Sumatra dan Nasional
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              Beroperasi langsung dari kota <strong className="text-cyan-400">Pekanbaru, Riau</strong>, Krevia Digital memadukan kedekatan geografis dan kecepatan koordinasi lokal dengan standar rekayasa teknologi kelas dunia.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              Kami percaya bahwa transformasi digital bisnis bukan sekadar membuat website atau aplikasi yang indah dipandang, melainkan membangun infrastruktur data dan sistem otomatisasi yang kokoh, terukur, dan mampu menghemat miliaran rupiah biaya inefisiensi operasional.
            </p>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-5 font-mono-code text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Pekanbaru, Riau, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Production-Grade Reliability</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#0d121f] border border-slate-800">
              <span className="font-mono-code text-3xl sm:text-4xl font-extrabold text-cyan-400">
                100%
              </span>
              <p className="font-bold text-white text-base mt-1">Hak Milik Penuh Klien</p>
              <p className="text-xs text-slate-400 mt-1">
                Zero vendor lock-in. Seluruh source code, kredensial, dan dokumentasi arsitektur diserahkan sepenuhnya kepada Anda.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0d121f] border border-slate-800">
              <span className="font-mono-code text-3xl sm:text-4xl font-extrabold text-emerald-400">
                0% Slop
              </span>
              <p className="font-bold text-white text-base mt-1">Tanpa Template Rapuh</p>
              <p className="text-xs text-slate-400 mt-1">
                Sistem dirancang dan dikoding bespoke dari baris pertama untuk mencerminkan logika bisnis unik perusahaan Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((c, idx) => (
            <SpotlightCard key={idx} className="flex flex-col justify-between">
              <div>
                <span className="font-mono-code text-xs text-cyan-400 font-bold bg-cyan-950/60 border border-cyan-800/80 px-2 py-0.5 rounded">
                  PRINSIP #{c.code}
                </span>
                <h4 className="text-lg font-bold text-white mt-4 mb-2">{c.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{c.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
