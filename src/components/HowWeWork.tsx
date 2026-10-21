"use client";

import React from "react";
import { Search, Map, CalendarCheck, Code2, HeadphonesIcon } from "lucide-react";

export function HowWeWork() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Understand the Business",
      description:
        "We begin by learning your existing workflows, spreadsheet habits, and operational bottlenecks across job sites and the administrative office.",
    },
    {
      number: "02",
      icon: Map,
      title: "Map the Requirements",
      description:
        "We identify which ERP modules, user permissions, and data structures are essential for your initial operational baseline.",
    },
    {
      number: "03",
      icon: CalendarCheck,
      title: "Plan the Implementation",
      description:
        "We agree on a realistic initial deployment scope, milestone schedule, team responsibilities, and clear commercial terms.",
    },
    {
      number: "04",
      icon: Code2,
      title: "Develop and Validate",
      description:
        "We configure and test the software against your actual project data, gathering continuous feedback from field personnel and estimators.",
    },
    {
      number: "05",
      icon: HeadphonesIcon,
      title: "Improve and Support",
      description:
        "Following initial launch, we assist your team through onboarding, user training, and iterative refinements based on daily field usage.",
    },
  ];

  return (
    <section id="how-we-work" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-[#101D35] text-xs font-bold tracking-wider uppercase">
            <span>Implementation Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
            How We Work With You.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Successful ERP implementations require deliberate pacing and shared clarity. This is our structured approach from initial operational discovery through field validation.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.number}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#24D6B0] tracking-tight">
                      {st.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#101D35] leading-snug">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Phase {st.number}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
