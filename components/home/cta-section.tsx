import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-xl bg-primary p-8 text-center text-primary-foreground md:p-12 lg:p-16">
          <h2 className="font-poppins mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Prêt à Sublimer Votre Événement ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Rejoignez nos clients satisfaits et créez des expériences
            inoubliables avec notre collection d'art de la table premium.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/get-started">Planifier Votre Événement</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
