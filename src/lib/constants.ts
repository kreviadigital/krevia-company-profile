/**
 * Centralized site configuration and official contact constants.
 * Single source of truth across all components and pages.
 */
export const SITE_CONFIG = {
  name: "Krevia Digital",
  tagline: "Software dan solusi digital untuk bisnis lokal di Pekanbaru.",
  whatsappNumber: "6285121282601",
  whatsappDisplay: "+62 851-2128-2601",
  email: "support@kreviadigitalid.my.id",
  instagramUsername: "kreviadigital",
  instagramUrl: "https://www.instagram.com/kreviadigital",
  location: "Kota Pekanbaru, Riau, Indonesia",
  getWhatsappUrl(message?: string) {
    const defaultMsg =
      "Halo Krevia Digital, saya ingin berdiskusi mengenai solusi sistem digital untuk bisnis saya.";
    const text = encodeURIComponent(message || defaultMsg);
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  },
} as const;
