"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    businessType: "UMKM & Retail",
    needs: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const businessTypes = [
    "UMKM & Retail",
    "Hotel & Penginapan",
    "Bengkel & Otomotif",
    "Distribusi & Pergudangan",
    "Klinik & Kesehatan",
    "Bisnis / Layanan Lainnya",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Halo Krevia Digital,
Saya ingin menceritakan kendala dan kebutuhan bisnis saya:

• Nama: ${formData.name || "-"}
• Kontak (WA/Email): ${formData.contact || "-"}
• Jenis Usaha: ${formData.businessType}

Kebutuhan / Masalah Operasional:
${formData.needs || "Ingin berdiskusi lebih lanjut mengenai solusi sistem."}

Mohon informasi ketersediaan jadwal konsultasi gratis. Terima kasih!`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/6282283868800?text=${encodedText}`;

    setSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="scroll-mt-24 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-[#0D1829] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Ceritakan masalah <br />
              bisnis Anda.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
              Konsultasi awal gratis.{" "}
              <span className="block mt-1">
                WhatsApp{" "}
                <a
                  href="https://wa.me/6282283868800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4A373] hover:underline"
                >
                  +62 822-8386-8800
                </a>{" "}
                · Email{" "}
                <a
                  href="mailto:halo@kreviadigital.com"
                  className="text-[#D4A373] hover:underline"
                >
                  halo@kreviadigital.com
                </a>
              </span>
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#14233c] border border-slate-700/80 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">
                  Permintaan Terkirim!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Kami membuka chat WhatsApp agar Anda dapat langsung terhubung dengan tim teknis kami. Anda juga dapat mengirimkan formulir baru jika diperlukan.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#D4A373] hover:underline pt-2 font-medium"
                >
                  Kirim permintaan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Nama Anda atau penanggung jawab"
                    className="w-full px-4 py-3 rounded-xl bg-[#14233c] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A373] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2"
                  >
                    WhatsApp / Email
                  </label>
                  <input
                    type="text"
                    id="contact"
                    required
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    placeholder="Nomor WhatsApp aktif atau alamat email"
                    className="w-full px-4 py-3 rounded-xl bg-[#14233c] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A373] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2"
                  >
                    Jenis usaha
                  </label>
                  <select
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) =>
                      setFormData({ ...formData, businessType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#14233c] border border-slate-700/80 text-white focus:outline-none focus:border-[#D4A373] text-sm transition-colors"
                  >
                    {businessTypes.map((bt) => (
                      <option key={bt} value={bt} className="bg-[#0D1829] text-white">
                        {bt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="needs"
                    className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2"
                  >
                    Kebutuhan Anda
                  </label>
                  <textarea
                    id="needs"
                    rows={4}
                    required
                    value={formData.needs}
                    onChange={(e) =>
                      setFormData({ ...formData, needs: e.target.value })
                    }
                    placeholder="Ceritakan kendala manual, pembukuan, stok, atau sistem yang ingin dibangun..."
                    className="w-full px-4 py-3 rounded-xl bg-[#14233c] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A373] text-sm transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#E4C99D] hover:bg-[#d8bc8f] text-[#0D1829] font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer hover:shadow-lg"
                  >
                    Kirim Permintaan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
