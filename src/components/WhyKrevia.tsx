"use client";

import React from "react";
import { Workflow, Hammer, Blocks, MessageSquareCheck, Milestone } from "lucide-react";

export function WhyKrevia() {
  const pillars = [
    {
      icon: Workflow,
      title: "Connected Workflows Over Disconnected Silos",
      description:
        "Instead of maintaining isolated spreadsheets for budget, procurement, and daily logs, our system links records so a change on-site updates the financial picture automatically.",
    },
    {
      icon: Hammer,
      title: "Engineered for Field Realities",
      description:
        "Software should conform to the way construction personnel actually work. We prioritize rapid data entry, clean interfaces, and straightforward daily reporting over burdensome bureaucratic menus.",
    },
    {
      icon: Blocks,
      title: "Modular, Step-by-Step Rollout",
      description:
        "You do not need to replace your entire operation overnight. Start with core project tracking or RAB budgeting, validate adoption with your team, and expand modules as confidence grows.",
    },
    {
      icon: MessageSquareCheck,
      title: "Clear Scope & Direct Accountability",
      description:
        "We set realistic expectations on implementation timelines, software boundaries, and commercial terms before building. No hidden vendor lock-in or ambiguous promises.",
    },
    {
      icon: Milestone,
      title: "A Long-Term Systems Mindset",
      description:
        "Building effective enterprise business systems requires continuous feedback and refinement. We treat our software as an evolving asset that matures alongside your operational requirements.",
    },
  ];

  return (
    <section id="why-krevia" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-[#F1F5F9]/60 border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-[#101D35] text-xs font-bold tracking-wider uppercase">
            <span>Our Product Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
            Why Krevia Digital.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We avoid vague buzzwords and unsupported claims. Instead, our software is guided by pragmatic engineering principles focused on operational visibility and reliability.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#101D35] text-[#24D6B0] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#101D35] leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Callout Card */}
          <div className="bg-[#101D35] text-white rounded-3xl p-7 sm:p-8 border border-slate-800 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#24D6B0]">
                Integrity in Engineering
              </span>
              <h3 className="text-xl font-bold text-white">
                Honest Product Maturity
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As an early-stage technology company, we partner with forward-thinking businesses to build and validate software that truly solves practical problems.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
              Build Smarter. Operate Better.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
