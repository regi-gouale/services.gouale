import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export function TestimonialCard({
  name,
  role,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="group transition-all hover:scale-105">
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex gap-1" role="img" aria-label={`Note de ${rating} sur 5`}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="size-5 fill-primary text-primary transition-colors group-hover:fill-primary/90 group-hover:text-primary/90"
            />
          ))}
        </div>
        <blockquote className="text-lg">"{quote}"</blockquote>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <section 
      id="testimonials" 
      className="bg-muted/50 py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="container mx-auto flex max-w-5xl flex-col items-center px-4">
        <h2 
          id="testimonials-title"
          className="font-poppins mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Avis de Nos Clients
        </h2>
        <div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          role="region"
          aria-label="Témoignages clients"
        >
          <TestimonialCard
            name="Sophie Martin"
            role="Organisatrice d'Événements"
            quote="La qualité de l'art de la table et le service fourni ont dépassé nos attentes. Hautement recommandé !"
            rating={5}
          />
          <TestimonialCard
            name="Michel Dubois"
            role="Propriétaire de Restaurant"
            quote="Solution parfaite pour nos événements éphémères. Service professionnel et qualité excellente."
            rating={5}
          />
          <TestimonialCard
            name="Emma Blanc"
            role="Coordinatrice de Mariages"
            quote="Ils ont rendu notre réception de mariage absolument magnifique. L'attention aux détails était impressionnante."
            rating={5}
          />
        </div>
      </div>
    </section>
  );
}
