"use client";

import React from "react";
import { Terminal, Layers, Database, Cpu, Cloud, Smartphone } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function TechStack() {
  const stackCategories = [
    {
      code: "FRONTEND",
      title: "Antarmuka & Web Modern",
      icon: Layers,
      items: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      code: "MOBILE",
      title: "Aplikasi Mobile Multiplatform",
      icon: Smartphone,
      items: ["Flutter", "React Native", "Offline-first DB", "Native Device Bridges"],
    },
    {
      code: "BACKEND",
      title: "Sistem Backend & Microservices",
      icon: Terminal,
      items: ["Node.js / Express", "Python / FastAPI", "Go (Golang)", "REST & gRPC APIs"],
    },
    {
      code: "DATA_STORE",
      title: "Basis Data & Caching",
      icon: Database,
      items: ["PostgreSQL (ACID)", "Redis Cache", "MySQL / MariaDB", "Vector & NoSQL Stores"],
    },
    {
      code: "DEVOPS",
      title: "Infrastruktur & Cloud",
      icon: Cloud,
      items: ["Docker Containers", "CI/CD Automations", "Linux / VPS Clusters", "Cloudflare DNS & Edge"],
    },
    {
      code: "DESIGN",
      title: "Design System & Prototyping",
      icon: Cpu,
      items: ["Figma Enterprise", "Design Tokens 1:1", "Wireframe Architecture", "WCAG 2.1 Audits"],
    },
  ];

  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-white bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-800 font-mono-code text-xs mb-4">
            <span className="text-sky-600 font-bold">// 04</span>
            <span>OPEN_SOURCE_ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ekosistem Teknologi Teruji
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Kami hanya memilih teknologi open-source yang aktif dikembangkan secara global, memiliki performa tinggi, dan bebas dari ketergantungan lisensi komersial terikat.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <SpotlightCard key={idx} className="flex flex-col justify-between bg-slate-50/70 border-slate-200/90 shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-600 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono-code text-[11px] text-slate-400 font-medium">[{cat.code}]</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-4">{cat.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="font-mono-code text-xs px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 shadow-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
