"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";

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
    { label: "Studi Kasus", href: "#portfolio" },
    { label: "Keunggulan", href: "#why-us" },
    { label: "Proses", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoothScrollTo(href, { offset: 80, duration: 1500 });
    window.history.pushState(null, "", href);
  };

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
          {/* Authentic Elegant Brand Lockup */}
          <Link href="/" className="flex items-center group py-1">
            <Image
              src="/logo-horizontal.png"
              alt="Krevia Digital"
              width={375}
              height={90}
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-[#2563EB] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#101D35] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-md shadow-[#101D35]/20 hover:shadow-[#101D35]/35 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
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
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-slate-700 hover:text-[#2563EB] py-2 px-3 rounded-lg hover:bg-slate-50 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#101D35] text-white font-bold text-sm shadow-md cursor-pointer"
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
