"use client";

import React from "react";
import { Check } from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function PricingSection() {
  const handleCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("#contact", { offset: 80, duration: 1200 });
    window.history.pushState(null, "", "#contact");
  };

  const tiers = [
    {
      name: "Dasar",
      price: "Terjangkau",
      featured: false,
      features: [
        "Website profil usaha",
        "Desain UI sesuai brand",
        "Dukungan peluncuran",
      ],
    },
    {
      name: "Usaha",
      price: "Investasi Bertahap",
      featured: true,
      features: [
        "Semua fitur Dasar",
        "Sistem reservasi atau kasir",
        "Digitalisasi proses utama",
        "Pelatihan tim",
      ],
    },
    {
      name: "Kustom",
      price: "Sesuai kebutuhan",
      featured: false,
      features: [
        "Software khusus",
        "Integrasi antar sistem",
        "Pendampingan berkelanjutan",
      ],
    },
  ];

  return (
    <section id="pricing" className="scroll-mt-24 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-[#F2F4F8] rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-xs">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1829] tracking-tight mb-10 sm:mb-12">
          Paket untuk setiap skala <br className="hidden sm:inline" />
          usaha.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 ${
                tier.featured
                  ? "bg-[#0D1829] text-white shadow-xl border border-slate-800"
                  : "bg-white text-slate-800 shadow-sm border border-slate-200/90"
              }`}
            >
              <div>
                <h3
                  className={`text-2xl font-bold leading-tight ${
                    tier.featured ? "text-white" : "text-[#0D1829]"
                  }`}
                >
                  {tier.name}
                </h3>

                <p
                  className={`text-lg font-semibold mt-2 mb-6 ${
                    tier.featured ? "text-[#D4A373]" : "text-slate-600"
                  }`}
                >
                  {tier.price}
                </p>

                <ul className="space-y-3 pt-4 border-t border-slate-200/40">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2.5 text-sm ${
                        tier.featured ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          tier.featured ? "text-[#D4A373]" : "text-[#0D1829]"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  onClick={handleCta}
                  className={`block w-full text-center py-2.5 rounded-full text-sm font-medium transition-colors ${
                    tier.featured
                      ? "bg-[#D4A373] text-[#0D1829] hover:bg-[#c49262] font-semibold"
                      : "bg-[#0D1829] text-white hover:bg-slate-800"
                  }`}
                >
                  Pilih Paket
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
