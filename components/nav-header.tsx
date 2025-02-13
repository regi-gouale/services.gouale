"use client";

import { CartButton } from "@/components/cart-button";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLinks } from "@/components/nav-links";
import { cn } from "@/lib/utils";
import { LogIn, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function NavHeader() {
  const { data: session } = useSession();

  return (
    <header
      className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center px-4 py-2 shadow-md z-40 h-16"
      role="banner"
    >
      <div className="container mx-4 flex items-center justify-between px-4 md:mx-auto">
        <MobileMenu />
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

        <NavLinks />

        <div className="md:mt-0 flex md:items-center md:gap-4">
          {session ? (
            <Link
              href="/dashboard/profile"
              className="hover:bg-primary/10 transition-colors rounded-lg flex items-center justify-center gap-2"
            >
              <User className="size-4" />
              <span className="hidden px-4 py-2 text-sm font-medium md:inline">
                {session.user?.name}
              </span>
            </Link>
          ) : (
            <Link
              href="/login"
              aria-label="Se connecter"
              className="hover:bg-primary/10 transition-colors rounded-lg flex items-center justify-center"
            >
              <LogIn className="size-10 p-2.5 md:hidden" />
              <span className="hidden px-4 py-2 text-sm font-bold md:inline">
                Connexion
              </span>
            </Link>
          )}
          <CartButton />
        </div>
      </div>
    </header>
  );
}
