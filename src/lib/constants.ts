/**
 * Centralized site configuration and official contact constants.
 * Single source of truth across all components and pages.
 */
export const SITE_CONFIG = {
  name: "Krevia Digital",
  tagline: "Build Smarter. Operate Better.",
  description:
    "Krevia Digital is building integrated ERP solutions to help businesses connect operations, improve visibility, and make better decisions.",
  whatsappNumber: "6285121282601",
  whatsappDisplay: "+62 851-2128-2601",
  email: "support@kreviadigitalid.my.id",
  instagramUsername: "kreviadigital",
  instagramUrl: "https://www.instagram.com/kreviadigital",
  location: "Pekanbaru, Riau, Indonesia",
  getWhatsappUrl(message?: string) {
    const defaultMsg =
      "Hello Krevia Digital, I would like to discuss our business operations and explore your ERP solutions.";
    const text = encodeURIComponent(message || defaultMsg);
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  },
} as const;
