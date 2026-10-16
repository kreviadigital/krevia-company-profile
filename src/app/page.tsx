import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { PortfolioSection } from "@/components/PortfolioSection";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WorkProcess } from "@/components/WorkProcess";
import { TechStack } from "@/components/TechStack";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFCFF] text-slate-800">
      <Preloader />
      <SmoothScroll />
      <Navbar />
      <Hero />
      <ServicesBento />
      <PortfolioSection />
      <About />
      <WhyChooseUs />
      <WorkProcess />
      <TechStack />
      <FaqSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
