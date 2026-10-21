import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductSpotlight } from "@/components/ProductSpotlight";
import { ErpCapabilities } from "@/components/ErpCapabilities";
import { PricingSection } from "@/components/PricingSection";
import { WhyKrevia } from "@/components/WhyKrevia";
import { HowWeWork } from "@/components/HowWeWork";
import { About } from "@/components/About";
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
      <ProductSpotlight />
      <ErpCapabilities />
      <PricingSection />
      <WhyKrevia />
      <HowWeWork />
      <About />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
