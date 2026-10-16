"use client";

import React from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  Code2, 
  MapPin, 
  Users2, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  Terminal,
  Cpu,
  ArrowRight
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function FounderSection() {
  const engineeringPrinciples = [
    {
      icon: Terminal,
      title: "Bicara Langsung dengan Engineer",
      desc: "Tidak ada sales perantara atau janji fitur yang mustahil. Dari sesi pertama, Anda berdiskusi langsung dengan software architect penanggung jawab sistem.",
    },
    {
      icon: ShieldCheck,
      title: "100% Source Code Milik Klien",
      desc: "Kami menolak model vendor lock-in. Seluruh hak cipta kode sumber, skema basis data, dan aset sistem diserahkan penuh kepada Anda sejak hari pertama serah terima.",
    },
    {
      icon: MapPin,
      title: "Kehadiran Lokal di Pekanbaru",
      desc: "Berbasis di Kota Pekanbaru, Riau. Kami siap hadir tatap muka untuk meninjau langsung alur kerja di kantor atau gudang operasional Anda.",
    },
    {
      icon: Code2,
      title: "Garansi Bug-Free & Purnajual",
      desc: "Dukungan teknis berkala setelah sistem rilis untuk menjamin operasional bisnis Anda tetap lancar, aman, dan tanpa kendala tak terduga.",
    },
  ];

  return (
    <section id="founder" className="scroll-mt-20 py-24 sm:py-32 relative overflow-hidden bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-[#101D35] bg-blue-50/60 px-3.5 py-1.5 rounded-full border border-blue-100">
            Integritas & Kepemimpinan Rekayasa
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight mt-4">
            Komitmen Personal di Balik Krevia Digital
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Sebagai mitra teknologi baru, kami membangun reputasi bukan lewat klaim kosong, melainkan lewat keterbukaan proses, etika rekayasa, dan tanggung jawab penuh atas setiap baris kode.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Founder Manifesto Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#101D35] text-white shadow-xl shadow-[#101D35]/15 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1D4ED8]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-200 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Prinsip Kerja Founder-Led</span>
              </div>

              {/* Founder Statement Quote */}
              <blockquote className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed">
                &ldquo;Kami percaya bahwa perangkat lunak terbaik bukanlah yang paling rumit, melainkan yang paling andal, mudah dirawat, dan memberikan dampak efisiensi nyata bagi bisnis Anda.&rdquo;
              </blockquote>

              <p className="text-sm text-slate-400 leading-relaxed">
                Di Krevia Digital, kami sengaja mempertahankan struktur tim yang ramping dan gesit agar setiap klien mendapatkan perhatian penuh dari arsitek sistem senior—bukan dilempar ke staf magang.
              </p>

              {/* Founder Signature Lockup */}
              <div className="pt-6 border-t border-white/15 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <Image
                    src="/logo-mark.png"
                    alt="Krevia Digital"
                    width={40}
                    height={31}
                    className="w-8 h-auto object-contain brightness-0 invert"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    Tim Rekayasa & Arsitektur Sistem
                  </h3>
                  <p className="text-xs text-blue-300 font-medium">
                    Krevia Digital • Pekanbaru, Riau
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Consultation Link */}
            <div className="relative z-10 pt-8 mt-8 border-t border-white/15">
              <a
                href="https://wa.me/6282283000000?text=Halo%20Krevia%20Digital,%20saya%20ingin%20berdiskusi%20langsung%20dengan%20tim%20arsitektur%20sistem%20mengenai%20kebutuhan%20teknologi%20perusahaan%20kami."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-[#1D4ED8] hover:bg-blue-600 text-white font-bold text-sm transition-all duration-200 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Diskusi Langsung dengan Tim Teknis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Engineering Standards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {engineeringPrinciples.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard
                  key={idx}
                  className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#101D35] group-hover:bg-[#101D35] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#101D35] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Standar Baku Krevia</span>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
