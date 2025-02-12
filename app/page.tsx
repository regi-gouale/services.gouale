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
      {/* <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4"
      >
        Aller au contenu principal
      </Link> */}
      <NavHeader />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <footer className="bg-card py-8" role="contentinfo">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Gouale Services. Tous droits
            réservés.
          </p>
        </div>
      </footer>
    </>
  );
}
