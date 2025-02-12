import { Card, CardContent } from "@/components/ui/card";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-6 text-center">
        <span className="mb-4 text-4xl">{icon}</span>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/50 py-24">
      <div className="container mx-auto flex max-w-5xl flex-col items-center px-4 ">
        <h2 className="font-poppins mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Pourquoi Nous Choisir
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Qualité Premium"
            description="Art de la table haut de gamme de marques renommées"
            icon="✨"
          />
          <FeatureCard
            title="Location Flexible"
            description="Périodes de location journalière, hebdomadaire ou événementielle"
            icon="📅"
          />
          <FeatureCard
            title="Livraison & Installation"
            description="Service professionnel de livraison et de mise en place"
            icon="🚚"
          />
          <FeatureCard
            title="Articles Désinfectés"
            description="Nettoyage et désinfection approfondis après chaque utilisation"
            icon="🧼"
          />
        </div>
      </div>
    </section>
  );
}
