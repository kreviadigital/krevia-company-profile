"use client";

import React from "react";
import Link from "next/link";
import { Terminal, MapPin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Krevia<span className="text-cyan-400">Digital</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Startup rekayasa perangkat lunak dan transformasi digital berbasis di Pekanbaru, Indonesia.
              Berkomitmen pada prinsip anti-slop: kode bersih, spesifikasi arsitektur transparan, dan 100% kepemilikan kode tanpa vendor lock-in.
            </p>

            <div className="flex items-center gap-2 font-mono-code text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Pekanbaru, Riau, Indonesia (0°32&apos;N 101°27&apos;E)</span>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-4 space-y-3 font-mono-code">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              // 4_CORE_SERVICES
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  01. Custom Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  02. System Integration & APIs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  03. UI/UX Design & Prototyping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  04. Business Process Digitization
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3 font-mono-code">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              // DIRECTORY
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Tentang Krevia
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">
                  Standar Rekayasa
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-cyan-400 transition-colors">
                  Ekosistem Teknologi
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Inisiasi Konsultasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} KREVIA DIGITAL. PEKANBARU, INDONESIA. ZERO VENDOR LOCK-IN.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span>SCROLL_TO_TOP()</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
