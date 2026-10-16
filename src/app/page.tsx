import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TechStack } from "@/components/TechStack";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A11] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <ServicesBento />
      <About />
      <WhyChooseUs />
      <TechStack />
      <ContactSection />
      <Footer />
    </main>
  );
}
