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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-sky-500/20 selection:text-sky-900">
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
