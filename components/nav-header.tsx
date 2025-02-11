import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NavHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline justify-self-auto">
          <span className="font-poppins text-xl font-semibold text-primary">
            Gouale
          </span>
          <span className="text-xs">Services</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="#services"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#features"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Caractéristiques
          </Link>
          <Link
            href="#testimonials"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Témoignages
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* <Button variant="outline" size="sm" asChild>
            <Link href="/login">Se Connecter</Link>
          </Button> */}
          <Button size="sm" asChild>
            <Link href="/get-started">Commencer</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
