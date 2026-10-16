import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krevia Digital | Anti-Slop Software Engineering & Digitization di Pekanbaru",
  description:
    "Krevia Digital adalah startup rekayasa perangkat lunak di Pekanbaru, Indonesia. Layanan mencakup Custom Software Development, System Integration, UI/UX Design, dan Business Process Digitization tanpa template rapuh.",
  keywords: [
    "Krevia Digital",
    "Software House Pekanbaru",
    "Custom Software Pekanbaru",
    "System Integration Indonesia",
    "UI/UX Design Pekanbaru",
    "Business Process Digitization",
    "Anti Slop Software Agency",
  ],
  authors: [{ name: "Krevia Digital" }],
  openGraph: {
    title: "Krevia Digital | Anti-Slop Software Engineering & Digitization di Pekanbaru",
    description: "Startup rekayasa perangkat lunak di Pekanbaru, Indonesia. Custom Software, System Integration, UI/UX Design, dan Business Process Digitization tanpa vendor lock-in.",
    url: "https://kreviadigital.com",
    siteName: "Krevia Digital",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krevia Digital | Anti-Slop Software Engineering di Pekanbaru",
    description: "Startup rekayasa software & digitalisasi proses bisnis berbasis di Pekanbaru, Indonesia.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-[#F8FAFC] text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
