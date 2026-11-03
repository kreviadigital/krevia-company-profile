import { Hero } from "@/components/home/Hero";
import { ErpOverview } from "@/components/home/ErpOverview";
import { ServicesBento } from "@/components/home/ServicesBento";
import { WhyKrevia } from "@/components/home/WhyKrevia";
import { FaqSection } from "@/components/home/FaqSection";
import { HomeCtaSection } from "@/components/home/HomeCtaSection";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Stats } from "@/components/home/Stats";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-50 text-gray-900">
      
      {/* Hapus 'sticky top-0', ganti jadi 'relative' biar dia ikut naik ke atas saat discroll. */}
      <div className="relative z-0 h-screen overflow-hidden">
        <Hero />
      </div>

      {/* Wrapper ini berlatar `bg-gray-50` — sama dengan `--color-hero-bg` hero —
          supaya latar di belakang notch (yang digambar `top-full` dari dalam
          <Stats />) senada dengan hero, bukan bidang putih yang berbeda. Kalau
          hero-nya diubah ke warna lain, samakan juga latar di sini. */}
      <div className="relative z-10 bg-gray-50">
        <Stats />
        <ErpOverview />
        <ServicesBento />
        <WhyKrevia />
        <FaqSection />
        <HomeCtaSection />
      </div>
      
      {/* <FloatingWhatsApp /> */}
    </main>
  );
}