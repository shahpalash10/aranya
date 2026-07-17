import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import BenefitsSection from "@/components/BenefitsSection";
import WhyIndianSkinSection from "@/components/WhyIndianSkinSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import RoadmapSection from "@/components/RoadmapSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactUsSection from "@/components/ContactUsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import FloatingPetals from "@/components/FloatingPetals";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      {/* Global overlays */}
      <FloatingPetals />
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <BenefitsSection />
        <WhyIndianSkinSection />
        <SustainabilitySection />
        <RoadmapSection />
        <TestimonialsSection />
        <ContactUsSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
