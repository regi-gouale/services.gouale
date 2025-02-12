import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24" aria-labelledby="cta-title">
      <div className="container mx-auto flex max-w-5xl flex-col items-center px-4">
        <div className="group rounded-xl bg-primary p-8 text-center text-primary-foreground transition-shadow hover:shadow-2xl md:p-12 lg:p-16">
          <h2
            id="cta-title"
            className="font-poppins mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Prêt à Sublimer Votre Événement ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Rejoignez nos clients satisfaits et créez des expériences
            inoubliables avec notre collection d'art de la table premium.
          </p>
          {/* <Button
            size="lg"
            variant="secondary"
            asChild
            className="transition-transform hover:scale-105"
          > */}
          <Link
            href="/get-started"
            aria-label="Commencer à planifier votre événement"
            className="flex items-center justify-center"
          >
            Planifier Votre Événement
          </Link>
          {/* </Button> */}
        </div>
      </div>
    </section>
  );
}
