"use client";

import React from "react";

export function PricingSection() {
  const tiers = [
    {
      name: "Dasar",
      price: "Mulai Rp 5 Jt",
      featured: false,
      features: [
        "Website profil usaha",
        "Desain UI sesuai brand",
        "Dukungan peluncuran",
      ],
    },
    {
      name: "Usaha",
      price: "Mulai Rp 15 Jt",
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
                  className={`text-base font-semibold mt-2 mb-6 ${
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
                      <span
                        className={`text-base leading-none select-none ${
                          tier.featured ? "text-[#D4A373]" : "text-slate-400"
                        }`}
                      >
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
