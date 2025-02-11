import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.webp"
          alt="Arrangement élégant d'art de la table"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <h1 className="font-poppins mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Sublimez Vos Événements avec
          <br />
          <span className="text-primary">Un Art de la Table Exquis</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Transformez vos occasions spéciales avec notre collection raffinée
          d'art de la table. Des dîners intimes aux grandes célébrations, nous
          créons le cadre parfait pour vos moments mémorables.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Explorer la Collection</Button>
          <Button variant="outline" size="lg">
            En Savoir Plus
          </Button>
        </div>
      </div>
    </section>
  );
}
