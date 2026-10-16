"use client";

import React from "react";
import { Layers, Database, Cpu, Cloud, Smartphone, Code2 } from "lucide-react";

export function TechStack() {
  const stackCategories = [
    {
      title: "Frontend & Web Modern",
      icon: Layers,
      items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      items: ["Flutter (iOS & Android)", "React Native", "Offline-first Sync"],
    },
    {
      title: "Backend & Cloud APIs",
      icon: Code2,
      items: ["Node.js", "Python / FastAPI", "Go (Golang)", "REST & GraphQL"],
    },
    {
      title: "Basis Data & Keamanan",
      icon: Database,
      items: ["PostgreSQL", "Redis", "MySQL", "Enkripsi AES-256"],
    },
    {
      title: "Cloud & Infrastruktur",
      icon: Cloud,
      items: ["Docker Containers", "CI/CD Pipeline", "Linux / VPS", "Cloudflare Edge"],
    },
    {
      title: "Desain Antarmuka & UX",
      icon: Cpu,
      items: ["Figma Enterprise", "Design Tokens", "Wireframing", "WCAG Usability"],
    },
  ];

  return (
    <section id="tech" className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Ekosistem Teknologi
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Teknologi Modern & Terpercaya
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Kami memilih teknologi open-source yang terbukti stabil, aktif dikembangkan, dan memiliki ekosistem enterprise global tanpa risiko keterikatan lisensi tertutup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
