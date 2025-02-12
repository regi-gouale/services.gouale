"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-background to-muted/20"
      role="region"
      aria-labelledby="hero-title"
    >
      <Carousel
        className="size-full"
        aria-label="Images de présentation"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent className="h-full">
          <CarouselItem className="relative h-[80vh] w-full transition-opacity">
            <div className="absolute inset-0">
              <Image
                src="/hero-image.webp"
                alt="Table élégamment décorée avec des éléments raffinés"
                fill
                className="object-cover opacity-20 transition-opacity"
                priority
                sizes="100vw"
                quality={90}
              />
            </div>
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="container px-4 text-center">
                <h1
                  id="hero-title"
                  className="font-poppins mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                >
                  Sublimez Vos Événements avec
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Un Art de la Table Exquis
                  </span>
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                  Transformez vos occasions spéciales avec notre collection
                  raffinée
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/products"
                    aria-label="Voir notre catalogue de produits"
                  >
                    <Button
                      size="lg"
                      className="w-full transition-transform hover:scale-105 sm:w-auto"
                    >
                      Nos Produits
                    </Button>
                  </Link>
                  <Link
                    href="/#services"
                    aria-label="Plus d'informations sur nos services"
                    className="w-full transition-transform hover:scale-105 sm:w-auto text-center px-4 py-2 rounded-lg bg-primary-foreground shadow-md text-sm"
                  >
                    En Savoir Plus
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="relative h-[80vh] w-full transition-opacity">
            <div className="absolute inset-0">
              <Image
                src="/hero-image-2.jpg"
                alt="Décoration de table élégante avec une mise en place sophistiquée"
                fill
                className="object-cover opacity-20 transition-opacity"
                priority
                sizes="100vw"
                quality={90}
              />
            </div>
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="container px-4 text-center">
                <h1 className="font-poppins mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Des Moments Inoubliables
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Dans les Moindres Détails
                  </span>
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                  Une attention particulière pour chaque événement
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/products"
                    aria-label="Voir notre catalogue de produits"
                  >
                    <Button
                      size="lg"
                      className="w-full transition-transform hover:scale-105 sm:w-auto"
                    >
                      Découvrir Nos Produits
                    </Button>
                  </Link>
                  <Link
                    href="/#contact"
                    aria-label="Nous contacter pour plus d'informations"
                    className="w-full transition-transform hover:scale-105 sm:w-auto text-center px-4 py-2 rounded-lg bg-primary-foreground shadow-md"
                  >
                    Contactez-nous
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious
            className="left-4 transition-transform hover:scale-105"
            aria-label="Voir la diapositive précédente"
          />
          <CarouselNext
            className="right-4 transition-transform hover:scale-105"
            aria-label="Voir la diapositive suivante"
          />
        </div>
      </Carousel>
    </section>
  );
}
