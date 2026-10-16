import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krevia Digital | Solusi Software Kustom & Transformasi Digital di Pekanbaru",
  description:
    "Krevia Digital adalah mitra rekayasa perangkat lunak dan transformasi digital di Pekanbaru, Riau, Indonesia. Layanan mencakup Custom Software Development, System Integration, UI/UX Design, dan Business Process Digitization.",
  keywords: [
    "Krevia Digital",
    "Software House Pekanbaru",
    "Custom Software Pekanbaru",
    "System Integration Indonesia",
    "UI/UX Design Pekanbaru",
    "Digitalisasi Proses Bisnis",
    "Jasa Pembuatan Aplikasi Riau",
    "Konsultan IT Pekanbaru",
  ],
  authors: [{ name: "Krevia Digital" }],
  openGraph: {
    title: "Krevia Digital | Solusi Software Kustom & Transformasi Digital",
    description: "Mitra rekayasa teknologi terpercaya untuk Custom Software, Integrasi Sistem, Desain UI/UX, dan Digitalisasi Bisnis.",
    url: "https://kreviadigital.com",
    siteName: "Krevia Digital",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${plusJakarta.className} bg-[#FAFCFF] text-slate-800 antialiased selection:bg-blue-600/10 selection:text-blue-700`}>
        {children}
      </body>
    </html>
  );
}
