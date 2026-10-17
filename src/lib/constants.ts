/**
 * Centralized site configuration and official contact constants.
 * Single source of truth across all components and pages.
 */
export const SITE_CONFIG = {
  name: "Krevia Digital",
  tagline: "Software dan solusi digital untuk bisnis lokal di Pekanbaru.",
  whatsappNumber: "6285121114148",
  whatsappDisplay: "+62 851-2111-4148",
  email: "kreviadigitalid@gmail.com",
  location: "Kota Pekanbaru, Riau, Indonesia",
  getWhatsappUrl(message?: string) {
    const defaultMsg =
      "Halo Krevia Digital, saya ingin berdiskusi mengenai solusi sistem digital untuk bisnis saya.";
    const text = encodeURIComponent(message || defaultMsg);
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  },
} as const;
