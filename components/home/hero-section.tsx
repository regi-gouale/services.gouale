import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-background to-muted/20"
      role="region"
      aria-label="Hero section"
    >
      <Carousel className="size-full" aria-label="Images de présentation">
        <CarouselContent className="h-full">
          <CarouselItem className="relative h-[80vh] w-full">
            <div className="absolute inset-0">
              <Image
                src="/hero-image.webp"
                alt="Table élégamment décorée avec des éléments raffinés"
                fill
                className="object-cover opacity-20"
                priority
              />
            </div>
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="container px-4 text-center">
                <h1 className="font-poppins mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Sublimez Vos Événements avec
                  <br />
                  <span className="text-primary">
                    Un Art de la Table Exquis
                  </span>
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                  Transformez vos occasions spéciales avec notre collection
                  raffinée
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    href="/products"
                    aria-label="Voir notre catalogue de produits"
                  >
                    <Button size="lg">Découvrir Nos Produits</Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    aria-label="Plus d'informations sur nos services"
                  >
                    En Savoir Plus
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="relative h-[80vh] w-full">
            <div className="absolute inset-0">
              <Image
                src="/hero-image-2.jpg"
                alt="Décoration de table élégante avec une mise en place sophistiquée"
                fill
                className="object-cover opacity-20"
                priority
              />
            </div>
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="container px-4 text-center">
                <h1 className="font-poppins mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Des Moments Inoubliables
                  <br />
                  <span className="text-primary">
                    Dans les Moindres Détails
                  </span>
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                  Une attention particulière pour chaque événement
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    href="/products"
                    aria-label="Voir notre catalogue de produits"
                  >
                    <Button size="lg">Découvrir Nos Produits</Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    aria-label="Nous contacter pour plus d'informations"
                  >
                    Nous Contacter
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </div>
      </Carousel>
    </section>
  );
}
