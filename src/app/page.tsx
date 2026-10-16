import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WorkProcess } from "@/components/WorkProcess";
import { CtaBanner } from "@/components/CtaBanner";
import { TechStack } from "@/components/TechStack";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFCFF] text-slate-800">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <ServicesBento />
      <About />
      <WhyChooseUs />
      <WorkProcess />
      <CtaBanner />
      <TechStack />
      <ContactSection />
      <Footer />
    </main>
  );
}
