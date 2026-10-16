"use client";

import React, { useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  Clock,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    service: "Custom Software Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    "Custom Software Development",
    "System Integration & APIs",
    "UI/UX Design & Prototyping",
    "Business Process Digitization",
    "Konsultasi Arsitektur Enterprise Lengkap",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Halo Systems Architect Krevia Digital,
Saya ingin menginisiasi technical discovery call untuk proyek sistem:

• Nama Pengirim: ${formData.name || "-"}
• Perusahaan / Bisnis: ${formData.company || "-"}
• Layanan Terkait: ${formData.service}
• Kontak HP/WA: ${formData.phone || "-"}

Gambaran Kendala / Kebutuhan Sistem:
${formData.message || "Ingin mendiskusikan kebutuhan arsitektur sistem lebih lanjut."}

Mohon informasi jadwal diskusi teknisnya. Terima kasih!`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/6282283000000?text=${encodedText}`;

    setSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/70 bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-800 font-mono-code text-xs mb-4">
            <span className="text-sky-600 font-bold">// 05</span>
            <span>TECHNICAL_DISCOVERY_CALL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Konsultasikan Kebutuhan Sistem Anda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Diskusikan bottleneck operasional dan target digitalisasi perusahaan Anda langsung dengan engineer kami di Pekanbaru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Office & Operations Card */}
          <div className="lg:col-span-5 space-y-6">
            <SpotlightCard className="p-7 sm:p-8 bg-white border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 font-mono-code text-xs text-sky-700 font-semibold mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>OFFICE_AND_OPERATIONS // PKU</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pusat Rekayasa Pekanbaru</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Krevia Digital berbasis di Pekanbaru, Riau, siap melayani kemitraan teknologi di seluruh kawasan Sumatra dan nasional.
              </p>

              <div className="space-y-4 font-mono-code text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block">LOKASI KANTOR</span>
                    <span className="text-slate-800 font-medium">Kota Pekanbaru, Riau, Indonesia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block">EMAIL KEMITRAAN</span>
                    <span className="text-slate-800 font-medium">halo@kreviadigital.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block">JAM RESPON TEKNIS</span>
                    <span className="text-slate-800 font-medium">Senin – Sabtu, 08:30 – 17:30 WIB</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-700 font-mono-code">
                  <strong className="text-slate-900">SLA 1x24 JAM:</strong> Setiap formulir dianalisis langsung oleh Systems Architect kami.
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-7 sm:p-9 bg-white border-slate-200 shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono-code text-xs text-slate-700 font-semibold uppercase tracking-wider mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Budi Hartono"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-mono-code text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-xs text-slate-700 font-semibold uppercase tracking-wider mb-2">
                      Perusahaan / Organisasi *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PT Maju Bersama Riau"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-mono-code text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono-code text-xs text-slate-700 font-semibold uppercase tracking-wider mb-2">
                      Nomor WhatsApp / HP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-mono-code text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-xs text-slate-700 font-semibold uppercase tracking-wider mb-2">
                      Layanan yang Diperlukan
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-mono-code text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc} className="bg-white text-slate-900">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono-code text-xs text-slate-700 font-semibold uppercase tracking-wider mb-2">
                    Deskripsi Masalah / Target Sistem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Jelaskan alur kerja yang ingin diotomatisasi, sistem lama yang ingin diintegrasikan, atau aplikasi yang ingin dibangun..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-mono-code text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-mono-code font-bold text-xs shadow-md shadow-sky-600/25 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>DISPATCH_TO_WHATSAPP()</span>
                </button>

                {submitted && (
                  <p className="text-center font-mono-code text-xs text-emerald-700 font-semibold mt-2">
                    ✓ Pesan terformat! WhatsApp terbuka di tab baru. Tim engineer kami siap merespons Anda.
                  </p>
                )}
              </form>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
