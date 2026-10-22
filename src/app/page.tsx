import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ErpOverview } from "@/components/ErpOverview";
import { ServicesBento } from "@/components/ServicesBento";
import { ProductSpotlight } from "@/components/ProductSpotlight";
import { WhyKrevia } from "@/components/WhyKrevia";
import { HowWeWork } from "@/components/HowWeWork";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#101D35]">
      <Preloader />
      <SmoothScroll />
      <Navbar />
      <Hero />
      <ErpOverview />
      <ServicesBento />
      <ProductSpotlight />
      <WhyKrevia />
      <HowWeWork />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
