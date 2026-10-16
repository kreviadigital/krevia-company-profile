"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Layanan", href: "#services" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Keunggulan", href: "#why-us" },
    { label: "Proses", href: "#process" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Main Color Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-blue-50/80 border border-blue-100 p-1.5 flex items-center justify-center shadow-xs group-hover:border-[#101D35] transition-colors">
              <Image
                src="/logo-mark.png"
                alt="Krevia Digital Logo"
                width={88}
                height={88}
                className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-[#101D35]">
                  Krevia<span className="text-[#2563EB] font-bold">Digital</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#101D35] border border-blue-200/80">
                  Pekanbaru
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                Digital Solutions & Custom Software
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-[#2563EB] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#101D35] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-md shadow-[#101D35]/20 hover:shadow-[#101D35]/35 transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
              <ArrowRight className="w-4 h-4 opacity-80" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-[#101D35] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-[#101D35] py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#101D35] text-white font-bold text-sm shadow-md"
            >
              <span>Konsultasi Gratis Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
