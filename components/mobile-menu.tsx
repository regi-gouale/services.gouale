"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { LogIn, Menu, User, X } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationLinks = [
  { href: "/products", label: "Produits" },
  { href: "/get-started", label: "Comment ça marche" },
] as const;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="relative z-50 md:hidden hover:bg-primary/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? (
          <X className="size-6 transition-transform animate-in fade-in-0 zoom-in-0" />
        ) : (
          <Menu className="size-6 transition-transform animate-in fade-in-0 zoom-in-0" />
        )}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      <NavigationMenu
        id="mobile-navigation"
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-3/4 bg-background p-6 shadow-xl transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-4">
          {navigationLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                pathname === href && "text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          {session ? (
            <Link
              href="/dashboard/profile"
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary mt-4 flex items-center gap-2",
                pathname === "/dashboard/profile" && "text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              <User className="size-4" />
              <span>{session.user?.name}</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary mt-4 flex items-center gap-2",
                pathname === "/login" && "text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="size-4" />
              <span>Connexion</span>
            </Link>
          )}
        </nav>
      </NavigationMenu>
    </>
  );
}
