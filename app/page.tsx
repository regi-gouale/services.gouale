import { ContactSection } from "@/components/home/contact-section";
import { CTASection } from "@/components/home/cta-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { NavHeader } from "@/components/nav-header";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense
        fallback={
          <div className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center px-4 py-2 shadow-md z-40 h-16">
            <div className="container mx-4 flex items-center justify-between px-4 md:mx-auto">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-32" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          </div>
        }
      >
        <NavHeader />
      </Suspense>
      <main className="min-h-screen">
        <HeroSection />
        <Suspense
          fallback={
            <section className="bg-muted/50 py-24">
              <div className="container mx-auto flex max-w-5xl flex-col items-center px-4">
                <Skeleton className="h-10 w-64 mb-12" />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg border bg-card p-6 shadow-sm"
                    >
                      <Skeleton className="h-12 w-12 rounded-full mb-4" />
                      <Skeleton className="h-6 w-32 mb-2" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4 mt-2" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          }
        >
          <FeaturesSection />
        </Suspense>
        <Suspense
          fallback={
            <section className="container mx-auto flex max-w-5xl flex-col items-center px-4 py-24">
              <Skeleton className="h-10 w-64 mb-12" />
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="group rounded-lg border bg-card p-6 shadow-sm"
                  >
                    <Skeleton className="h-12 w-12 rounded-full mb-4" />
                    <Skeleton className="h-6 w-40 mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3 mt-2" />
                  </div>
                ))}
              </div>
            </section>
          }
        >
          <ServicesSection />
        </Suspense>
        <Suspense
          fallback={
            <section className="py-24">
              <div className="container mx-auto max-w-5xl px-4">
                <Skeleton className="h-10 w-64 mb-12 mx-auto" />
                <div className="grid gap-8 md:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg border bg-card p-6 shadow-sm text-center"
                    >
                      <Skeleton className="h-6 w-full mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mx-auto mb-4" />
                      <Skeleton className="h-6 w-24 mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          }
        >
          <TestimonialsSection />
        </Suspense>
        <CTASection />
        <Suspense
          fallback={
            <section className="bg-muted/50 py-24">
              <div className="container mx-auto max-w-5xl px-4">
                <Skeleton className="h-10 w-48 mb-4 mx-auto" />
                <Skeleton className="h-6 w-96 mb-12 mx-auto" />
                <div className="mx-auto max-w-md space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-24 w-full" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </section>
          }
        >
          <ContactSection />
        </Suspense>
      </main>
    </>
  );
}
