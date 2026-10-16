"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#101D35] text-slate-300 pt-16 pb-12 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white/10 border border-white/15 p-1 flex items-center justify-center shadow-xs group-hover:border-white/30 transition-colors">
                <Image
                  src="/logo-white.png"
                  alt="Krevia Digital Logo"
                  width={88}
                  height={88}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold tracking-tight text-white">
                    Krevia<span className="text-blue-400 font-bold">Digital</span>
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-slate-200 border border-white/15">
                    Pekanbaru
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-400 tracking-wide">
                  Digital Solutions & Custom Software
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Startup rekayasa perangkat lunak dan transformasi digital berbasis di Pekanbaru, Riau, Indonesia. Membantu bisnis membangun sistem kustom modern yang aman, andal, dan siap bertumbuh.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Kota Pekanbaru, Riau, Indonesia</span>
            </div>
          </div>

          {/* 4 Core Services */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Layanan Utama
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  System Integration & APIs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UI/UX Design & Prototyping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Business Process Digitization
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Cepat
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Tentang Krevia
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Mengapa Kami
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Proses Kerja
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Krevia Digital. All rights reserved. Pekanbaru, Riau, Indonesia.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
