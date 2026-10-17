"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { handleNavClick } from "@/lib/smoothScroll";

export function Footer() {
  const WHATSAPP_NUMBER = "6285121114148";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo Krevia Digital, saya ingin berdiskusi mengenai solusi sistem digital untuk bisnis saya."
  )}`;

  return (
    <footer className="w-full pb-8 pt-4 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto bg-[#0D1829] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800/60">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-8">
          {/* Col 1: Brand & Desc */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo-horizontal.png"
                alt="Krevia Digital"
                width={375}
                height={90}
                className="h-8 w-auto object-contain brightness-0 invert opacity-95 transition-opacity group-hover:opacity-100"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Software dan solusi digital untuk bisnis lokal di Pekanbaru.
            </p>
          </div>

          {/* Col 2: Layanan */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-sm font-semibold text-white tracking-wide">
              Layanan
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Custom Software
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  System Integration
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Digitalisasi Proses Bisnis
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hubungi */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-sm font-semibold text-white tracking-wide">
              Hubungi
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Layanan online, berbasis di Pekanbaru</li>
              <li>Siap datang langsung di Pekanbaru</li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +62 851-2111-4148
                </a>
              </li>
              <li>
                <a
                  href="mailto:kreviadigitalid@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  kreviadigitalid@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Krevia Digital. Seluruh hak dilindungi.</p>

          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D4A373]" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
