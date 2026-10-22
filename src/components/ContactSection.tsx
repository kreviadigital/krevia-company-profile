"use client";

import React from "react";
import { MessageSquare, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct CTA Copy & Contact Methods */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
              Ceritakan Alur Operasional Bisnis Anda.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Sampaikan bagaimana bisnis Anda saat ini mengelola operasional, alur kerja tim, atau kebutuhan kehadiran digital. Kami akan mendiskusikan solusi teknis yang paling tepat dan transparan.
            </p>

            {/* Direct Verified Contact Channels */}
            <div className="pt-4 space-y-3.5 border-t border-slate-200">
              <a
                href={SITE_CONFIG.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#24D6B0] transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">WhatsApp Resmi</p>
                  <p className="text-sm sm:text-base font-bold text-[#101D35] group-hover:text-emerald-700 transition-colors">
                    {SITE_CONFIG.whatsappDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#24D6B0] transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Email Korespondensi</p>
                  <p className="text-sm sm:text-base font-bold text-[#101D35] group-hover:text-blue-700 transition-colors">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Basis Operasional</p>
                  <p className="text-sm font-bold text-[#101D35]">
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
