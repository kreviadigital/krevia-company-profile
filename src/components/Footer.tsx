"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowUp } from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function Footer() {
  const scrollToTop = () => {
    smoothScrollTo("#hero", { offset: 80, duration: 1500 });
  };

  const handleFooterLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href, { offset: 80, duration: 1500 });
    window.history.pushState(null, "", href);
  };

  return (
    <footer className="bg-white text-slate-600 pt-16 pb-12 relative overflow-hidden border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block group py-1">
              <Image
                src="/logo-horizontal.png"
                alt="Krevia Digital"
                width={375}
                height={90}
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Startup rekayasa perangkat lunak dan transformasi digital berbasis di Pekanbaru, Riau, Indonesia. Membantu bisnis membangun sistem kustom modern yang aman, andal, dan siap bertumbuh.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <MapPin className="w-4 h-4 text-[#1D4ED8] shrink-0" />
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
                <a
                  href="#services"
                  onClick={(e) => handleFooterLink(e, "#services")}
                  className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  Custom Software Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleFooterLink(e, "#services")}
                  className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  System Integration & APIs
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleFooterLink(e, "#services")}
                  className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  UI/UX Design & Prototyping
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleFooterLink(e, "#services")}
                  className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
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
                <a
                  href="#hero"
                  onClick={(e) => handleFooterLink(e, "#hero")}
                  className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleFooterLink(e, "#about")}
                  className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  Tentang Krevia
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleFooterLink(e, "#portfolio")}
                  className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  Studi Kasus & Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleFooterLink(e, "#why-us")}
                  className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  Mengapa Kami
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleFooterLink(e, "#process")}
                  className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  Proses Kerja
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleFooterLink(e, "#faq")}
                  className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  Tanya Jawab (FAQ)
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleFooterLink(e, "#contact")}
                  className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
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
            className="flex items-center gap-1.5 text-slate-500 hover:text-[#1D4ED8] transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
