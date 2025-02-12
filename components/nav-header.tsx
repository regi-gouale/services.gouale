"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";
import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header
      className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center px-4 py-2 shadow-md z-40 h-16"
      role="banner"
    >
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          className="animate-fade-in fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity lg:hidden"
          aria-hidden="true"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className="container mx-4 flex items-center justify-between px-4 lg:mx-auto">
        <Link
          href="/"
          className="relative z-50 flex items-baseline justify-self-auto transition-colors hover:text-primary"
          aria-label="Gouale Services - Retour à l'accueil"
        >
          <span className={cn("text-xl font-black text-primary uppercase")}>
            Gouale
          </span>
          <span className="text-xs">Services</span>
        </Link>

        <Button
          size="icon"
          variant="ghost"
          className="relative z-50 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? (
            <X className="size-6 transition-transform animate-in fade-in-0 zoom-in-0" />
          ) : (
            <Menu className="size-6 transition-transform animate-in fade-in-0 zoom-in-0" />
          )}
        </Button>

        <nav
          id="main-navigation"
          className={cn(
            "fixed inset-x-0 top-16 z-40 origin-top border-b bg-background/95 px-4 pb-8 pt-4 shadow-lg backdrop-blur md:static md:z-auto md:flex md:border-0 md:bg-transparent md:p-0 md:shadow-none",
            isMenuOpen ? "animate-slide-up" : "hidden md:block"
          )}
          role="navigation"
          aria-label="Navigation principale"
        >
          <ul className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
            <li>
              <Link
                href="/#services"
                className="group flex items-center text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Voir nos services"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative">
                  Services
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 transition-transform group-hover:scale-x-100" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/#features"
                className="group flex items-center text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Voir nos caractéristiques"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative">
                  Caractéristiques
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-foreground transition-transform group-hover:scale-x-100" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/#testimonials"
                className="group flex items-center text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Voir les témoignages"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative">
                  Témoignages
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-foreground transition-transform group-hover:scale-x-100" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="group flex items-center text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Nous contacter"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative">
                  Contact
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-foreground transition-transform group-hover:scale-x-100" />
                </span>
              </Link>
            </li>
            <li className="md:hidden">
              <Link
                href="/cart"
                className="group flex items-center text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Voir le panier"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative flex items-center gap-2">
                  <ShoppingCart className="size-5" />
                  Panier
                  {totalItems > 0 && (
                    <span className="absolute -right-4 -top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {totalItems}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:mt-0 md:flex md:items-center md:gap-4">
          <Link
            href="/cart"
            aria-label="Voir le panier"
            className="hidden md:flex items-center justify-center size-10 rounded-lg text-muted-foreground hover:text-foreground transition-colors relative"
          >
            <ShoppingCart className="size-5" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            href="/get-started"
            aria-label="Commencer avec nos services"
            className="border border-primary text-primary px-4 py-2 rounded-lg text-sm uppercase font-bold"
          >
            Commencer
          </Link>
        </div>
      </div>
    </header>
  );
}
