import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div
      className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md"
      role="article"
    >
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
          aria-hidden="true"
          className="transition-transform group-hover:scale-110"
        />
      </div>
      <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="container mx-auto flex max-w-5xl flex-col items-center px-4 py-24"
      aria-labelledby="services-title"
    >
      <h2
        id="services-title"
        className="font-poppins mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Nos Services de Location
      </h2>
      <div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        role="region"
        aria-label="Liste des services"
      >
        <ServiceCard
          title="Arts de la Table Complets"
          description="Ensembles complets incluant assiettes, couverts et verrerie pour toute occasion."
          icon="/window.svg"
        />
        <ServiceCard
          title="Forfaits Événementiels"
          description="Collections spéciales pour mariages, événements d'entreprise et célébrations."
          icon="/globe.svg"
        />
        <ServiceCard
          title="Arrangements Sur Mesure"
          description="Sélections personnalisées adaptées à vos besoins et thèmes spécifiques."
          icon="/file.svg"
        />
      </div>
    </section>
  );
}
