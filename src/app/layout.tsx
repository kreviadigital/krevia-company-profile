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
  title: "Krevia Digital | Integrated ERP Solutions",
  description:
    "Krevia Digital is building integrated ERP solutions to help businesses connect operations, manage projects, and improve visibility across business workflows.",
  keywords: [
    "Krevia Digital",
    "Construction ERP",
    "Integrated ERP Solutions",
    "Project Cost Control",
    "Construction Management Software",
    "Indonesian ERP Software",
    "B2B Enterprise Systems",
    "Business Process Digitization",
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
    title: "Krevia Digital | Integrated ERP Solutions",
    description:
      "Krevia Digital is building integrated ERP solutions to help businesses connect operations, manage projects, and improve visibility across business workflows.",
    url: "https://kreviadigitalid.my.id",
    siteName: "Krevia Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krevia Digital - Integrated ERP Solutions & Construction Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krevia Digital | Integrated ERP Solutions",
    description:
      "Krevia Digital is building integrated ERP solutions to help businesses connect operations, manage projects, and improve visibility across business workflows.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
