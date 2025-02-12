import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NavHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container mx-4 flex h-16 items-center justify-between px-4 lg:mx-auto">
        <Link
          href="/"
          className="flex items-baseline justify-self-auto"
          aria-label="Gouale Services - Retour à l'accueil"
        >
          <span className="font-poppins text-xl font-semibold text-primary">
            Gouale
          </span>
          <span className="text-xs">Services</span>
        </Link>
        <nav
          className="hidden gap-6 md:flex"
          role="navigation"
          aria-label="Navigation principale"
        >
          <Link
            href="#services"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Voir nos services"
          >
            Services
          </Link>
          <Link
            href="#features"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Voir nos caractéristiques"
          >
            Caractéristiques
          </Link>
          <Link
            href="#testimonials"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Voir les témoignages"
          >
            Témoignages
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Nous contacter"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button size="sm" asChild>
            <Link href="/get-started" aria-label="Commencer avec nos services">
              Commencer
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
