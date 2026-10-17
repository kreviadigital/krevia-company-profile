import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import { About } from "@/components/About";
import { WorkProcess } from "@/components/WorkProcess";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0D1829]">
      <Preloader />
      <SmoothScroll />
      <Navbar />
      <Hero />
      <ServicesBento />
      <IndustrySolutions />
      <About />
      <WorkProcess />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
