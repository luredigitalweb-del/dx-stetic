import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeBand } from "@/components/MarqueeBand";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { InstagramSection } from "@/components/InstagramSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-paper text-brand-ink">
        <HeroSection />
        <MarqueeBand />
        <DifferentialsSection />
        <ServicesSection />
        <AboutSection />
        <InstagramSection />
        <TestimonialsSection />
        <LocationSection />
        <Footer />
      </main>
      <WhatsAppFAB />
    </>
  );
}
