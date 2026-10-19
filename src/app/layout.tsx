import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kreviadigital.com"),
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
    title: "Krevia Digital | Solusi Software Kustom & Transformasi Digital",
    description: "Mitra rekayasa teknologi terpercaya untuk Custom Software, Integrasi Sistem, Desain UI/UX, dan Digitalisasi Bisnis.",
    url: "https://kreviadigital.com",
    siteName: "Krevia Digital",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krevia Digital - Solusi Software Kustom & Arsitektur Skalabel di Pekanbaru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krevia Digital | Solusi Software Kustom & Transformasi Digital",
    description: "Mitra rekayasa teknologi terpercaya untuk Custom Software, Integrasi Sistem, Desain UI/UX, dan Digitalisasi Bisnis.",
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
      <body className={`${plusJakarta.className} bg-[#F8FAFC] text-[#0D1829] antialiased selection:bg-amber-500/20 selection:text-amber-900`}>
        {children}
      </body>
    </html>
  );
}
