import { ContactSection } from "@/components/home/contact-section";
import { CTASection } from "@/components/home/cta-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { NavHeader } from "@/components/nav-header";

export default function Home() {
  return (
    <>
      <NavHeader />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
    </>
  );
}
