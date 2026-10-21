import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kreviadigitalid.my.id"),
  title: "Krevia Digital | Solusi ERP Modular & Sistem Bisnis Terintegrasi",
  description:
    "Krevia Digital menyediakan solusi ERP modular untuk membantu bisnis mengintegrasikan operasional, mengontrol biaya proyek, dan meningkatkan visibilitas alur kerja di Pekanbaru dan Indonesia.",
  keywords: [
    "Krevia Digital",
    "ERP Pekanbaru",
    "Platform ERP Modular",
    "ERP Konstruksi Indonesia",
    "Software ERP Riau",
    "Kontrol Biaya Proyek",
    "Sistem Bisnis Terintegrasi",
    "Aplikasi Manajemen Bisnis",
  ],
  authors: [{ name: "Krevia Digital" }],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Krevia Digital | Solusi ERP Modular & Sistem Bisnis Terintegrasi",
    description:
      "Krevia Digital menyediakan solusi ERP modular untuk membantu bisnis mengintegrasikan operasional, mengontrol biaya proyek, dan meningkatkan visibilitas alur kerja.",
    url: "https://kreviadigitalid.my.id",
    siteName: "Krevia Digital",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krevia Digital - Platform ERP Modular & Sistem Bisnis Terintegrasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krevia Digital | Solusi ERP Modular & Sistem Bisnis Terintegrasi",
    description:
      "Krevia Digital menyediakan solusi ERP modular untuk membantu bisnis mengintegrasikan operasional, mengontrol biaya proyek, dan meningkatkan visibilitas alur kerja.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
      </head>
      <body className={`${plusJakarta.className} bg-[#F4F7FB] text-[#101D35] antialiased selection:bg-[#24D6B0]/20 selection:text-[#101D35]`}>
        {children}
      </body>
    </html>
  );
}
