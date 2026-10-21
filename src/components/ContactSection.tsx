"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight, MessageSquare, Mail, MapPin, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    businessType: "General Contracting & Construction",
    operationalNeeds: "",
  });

  const [contactError, setContactError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    "General Contracting & Construction",
    "Specialty Trade & Subcontractor",
    "Real Estate & Property Development",
    "Civil Engineering & Infrastructure",
    "Materials & Equipment Supply",
    "Other Project-Based Business",
  ];

  const validateContact = (val: string): boolean => {
    const trimmed = val.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    const isPhone = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{8,16}$/.test(trimmed);
    return isEmail || isPhone;
  };

  const sanitizeInput = (val: string, maxLen = 100): string => {
    return val.replace(/[<>]/g, "").trim().slice(0, maxLen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanName = sanitizeInput(formData.name, 100);
    const cleanContact = sanitizeInput(formData.contact, 100);
    const cleanNeeds = sanitizeInput(formData.operationalNeeds, 1000);

    if (!cleanName) {
      setContactError("Please enter your name.");
      return;
    }

    if (!validateContact(cleanContact)) {
      setContactError(
        "Please provide a valid WhatsApp number (e.g. +62 851...) or a valid business email."
      );
      return;
    }
    setContactError("");
    setIsSubmitting(true);

    const text = `Hello Krevia Digital,
I would like to discuss our business operations and explore Krevia's ERP direction:

• Name: ${cleanName}
• Contact: ${cleanContact}
• Industry / Business Type: ${formData.businessType}
• Operational Needs & Current Challenges:
${cleanNeeds || "Not specified yet."}

Looking forward to hearing from your team.`;

    // Simulated short dispatch delay for realistic UI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const targetUrl = SITE_CONFIG.getWhatsappUrl(text);
      if (typeof window !== "undefined") {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      }
    }, 400);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      contact: "",
      businessType: "General Contracting & Construction",
      operationalNeeds: "",
    });
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct CTA Copy & Contact Methods */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-[#101D35] text-xs font-bold tracking-wider uppercase">
              <span>Direct Discovery</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101D35] leading-tight">
              Let&apos;s Understand Your Business Operations.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tell us how your business currently manages projects, costs, materials, and daily operations. We&apos;ll discuss whether Krevia&apos;s ERP direction fits your needs.
            </p>

            {/* Direct Verified Contact Channels */}
            <div className="pt-4 space-y-4 border-t border-slate-200">
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
                  <p className="text-xs text-slate-500 font-semibold uppercase">Direct WhatsApp</p>
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
                  <p className="text-xs text-slate-500 font-semibold uppercase">Email Inquiries</p>
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
                  <p className="text-xs text-slate-500 font-semibold uppercase">Operating Base</p>
                  <p className="text-sm font-bold text-[#101D35]">
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h3 className="text-xl font-bold text-[#101D35]">
                    Discuss Your ERP Needs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill out this form to initiate a direct consultation with our engineering team.
                  </p>
                </div>

                {/* Error Banner */}
                {contactError && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{contactError}</span>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label htmlFor="client-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hendra Pratama"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#24D6B0] focus:border-transparent text-sm transition-all"
                  />
                </div>

                {/* Contact Field */}
                <div>
                  <label htmlFor="client-contact" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    WhatsApp or Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="client-contact"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="e.g. +62 851... or name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#24D6B0] focus:border-transparent text-sm transition-all"
                  />
                </div>

                {/* Business Type Field */}
                <div>
                  <label htmlFor="business-type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Industry / Business Domain
                  </label>
                  <select
                    id="business-type"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#24D6B0] focus:border-transparent text-sm transition-all"
                  >
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Operational Needs Field */}
                <div>
                  <label htmlFor="operational-needs" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Operational Challenges or Scope (Optional)
                  </label>
                  <textarea
                    id="operational-needs"
                    rows={4}
                    value={formData.operationalNeeds}
                    onChange={(e) => setFormData({ ...formData, operationalNeeds: e.target.value })}
                    placeholder="Describe your current bottlenecks: e.g. tracking RAB variance across multiple job sites, reconciling concrete and rebar purchase orders, or coordinating field teams."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#24D6B0] focus:border-transparent text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#101D35] hover:bg-[#1C2E4F] text-white font-bold text-sm sm:text-base transition-all duration-200 hover:shadow-lg disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Formatting Inquiry...</span>
                  ) : (
                    <>
                      <span>Discuss Your ERP Needs</span>
                      <ArrowRight className="w-4 h-4 text-[#24D6B0]" />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-slate-400">
                  Your inquiry connects directly to our engineering team with zero promotional spam.
                </p>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#101D35]">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry details have been formatted and routed to our team. If WhatsApp didn&apos;t open automatically, you can also reach us directly at{" "}
                  <a
                    href={SITE_CONFIG.getWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#101D35] underline"
                  >
                    {SITE_CONFIG.whatsappDisplay}
                  </a>.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-4 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
