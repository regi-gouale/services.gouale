"use client";

import { SignOutButton } from "@/components/sign-out-button";
import { dashboardConfig } from "@/lib/dashboard";
import { cn } from "@/lib/utils";
import { CalendarDays, Home, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentPagePath = pathname as keyof typeof dashboardConfig;
  const currentPage = dashboardConfig[currentPagePath] ?? {
    title: "Dashboard",
    description: "Vue d'ensemble",
  };

  return (
    <div className="flex min-h-screen">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4"
      >
        Aller au contenu principal
      </a>

      {/* Sidebar */}
      <aside
        className="w-64 border-r bg-card px-4 py-6"
        role="complementary"
        aria-label="Navigation du tableau de bord"
      >
        <div className="mb-8">
          <Link
            href="/"
            className="flex items-baseline"
            aria-label="Retourner à l'accueil"
          >
            <span className="font-poppins text-xl font-semibold text-primary">
              Gouale
            </span>
            <span className="text-sm">Services</span>
          </Link>
        </div>
        <nav
          className="space-y-2"
          role="navigation"
          aria-label="Menu principal"
        >
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 transition-colors",
              pathname === "/dashboard"
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            aria-current={pathname === "/dashboard" ? "page" : undefined}
          >
            <Home className="size-4" aria-hidden="true" />
            <span>Tableau de bord</span>
          </Link>
          <Link
            href="/dashboard/reservations"
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 transition-colors",
              pathname === "/dashboard/reservations"
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            aria-current={
              pathname === "/dashboard/reservations" ? "page" : undefined
            }
          >
            <CalendarDays className="size-4" aria-hidden="true" />
            <span>Réservations</span>
          </Link>
          <Link
            href="/dashboard/profile"
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 transition-colors",
              pathname === "/dashboard/profile"
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            aria-current={
              pathname === "/dashboard/profile" ? "page" : undefined
            }
          >
            <User className="size-4" aria-hidden="true" />
            <span>Profil</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 transition-colors",
              pathname === "/dashboard/settings"
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            aria-current={
              pathname === "/dashboard/settings" ? "page" : undefined
            }
          >
            <Settings className="size-4" aria-hidden="true" />
            <span>Paramètres</span>
          </Link>
        </nav>
        <div className="mt-auto pt-6">
          <SignOutButton />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1" id="main-content">
        <header className="border-b bg-card px-6 py-4" role="banner">
          <h1 className="text-2xl font-semibold">{currentPage.title}</h1>
          <p className="text-sm text-muted-foreground">
            {currentPage.description}
          </p>
        </header>
        <main className="p-6" role="main">
          {children}
        </main>
      </div>
    </div>
  );
}
