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
    <footer className="bg-white text-slate-600 pt-16 pb-12 relative overflow-hidden border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-blue-50/80 border border-blue-100 p-1.5 flex items-center justify-center shadow-xs group-hover:border-[#101D35] transition-colors">
                <Image
                  src="/logo-mark.png"
                  alt="Krevia Digital Logo"
                  width={88}
                  height={88}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold tracking-tight text-[#101D35]">
                    Krevia<span className="text-[#2563EB] font-bold">Digital</span>
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#101D35] border border-blue-100">
                    Pekanbaru
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                  Digital Solutions & Custom Software
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Startup rekayasa perangkat lunak dan transformasi digital berbasis di Pekanbaru, Riau, Indonesia. Membantu bisnis membangun sistem kustom modern yang aman, andal, dan siap bertumbuh.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Kota Pekanbaru, Riau, Indonesia</span>
            </div>
          </div>

          {/* 4 Core Services */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold text-[#101D35] uppercase tracking-wider">
              Layanan Utama
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  System Integration & APIs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  UI/UX Design & Prototyping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  Business Process Digitization
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-[#101D35] uppercase tracking-wider">
              Navigasi Cepat
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <a href="#hero" className="hover:text-[#2563EB] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#2563EB] transition-colors">
                  Tentang Krevia
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#2563EB] transition-colors">
                  Mengapa Kami
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#2563EB] transition-colors">
                  Proses Kerja
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2563EB] transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Krevia Digital. All rights reserved. Pekanbaru, Riau, Indonesia.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-500 hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
