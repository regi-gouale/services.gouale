"use client";

import { SignOutButton } from "@/components/sign-out-button";
import { cn } from "@/lib/utils";
import { CalendarDays, Home, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
        <div className="container flex h-14 items-center justify-between">
          <div className="mr-4 flex">
            <Link
              href="/dashboard"
              className="mr-6 flex items-center space-x-2"
            >
              <span className="font-bold">Tableau de bord</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/dashboard"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/dashboard"
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                <span className="flex items-center gap-x-2">
                  <Home className="size-4" />
                  <span>Accueil</span>
                </span>
              </Link>
              <Link
                href="/dashboard/reservations"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/dashboard/reservations")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                <span className="flex items-center gap-x-2">
                  <CalendarDays className="size-4" />
                  <span>Réservations</span>
                </span>
              </Link>
              <Link
                href="/dashboard/profile"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/dashboard/profile")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                <span className="flex items-center gap-x-2">
                  <User className="size-4" />
                  <span>Profil</span>
                </span>
              </Link>
              <Link
                href="/dashboard/settings"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/dashboard/settings")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                <span className="flex items-center gap-x-2">
                  <Settings className="size-4" />
                  <span>Paramètres</span>
                </span>
              </Link>
            </nav>
          </div>
          <SignOutButton />
        </div>
      </header>
      <main className="flex-1 space-y-4 p-8 pt-6">
        <Suspense fallback={<div className="animate-pulse">Chargement...</div>}>
          {children}
        </Suspense>
      </main>
    </div>
  );
}
