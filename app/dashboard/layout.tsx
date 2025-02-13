"use client";

import { Logo } from "@/components/icons/logo";
import { SignOutButton } from "@/components/sign-out-button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CalendarDays, Home, Settings, User } from "lucide-react";
import { SessionProvider } from "next-auth/react";
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
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="flex items-center justify-between">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 px-2"
            >
              <Logo />
              <SidebarTrigger />
            </Link>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/dashboard"}
                    tooltip="Accueil"
                  >
                    <Link href="/dashboard">
                      <Home className="size-4" />
                      <span>Accueil</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/dashboard/reservations")}
                    tooltip="Réservations"
                  >
                    <Link href="/dashboard/reservations">
                      <CalendarDays className="size-4" />
                      <span>Réservations</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/dashboard/profile")}
                    tooltip="Profil"
                  >
                    <Link href="/dashboard/profile">
                      <User className="size-4" />
                      <span>Profil</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/dashboard/settings")}
                    tooltip="Paramètres"
                  >
                    <Link href="/dashboard/settings">
                      <Settings className="size-4" />
                      <span>Paramètres</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SignOutButton className="w-full" />
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 space-y-4 p-8 pt-6 w-full">
          <Suspense
            fallback={<div className="animate-pulse">Chargement...</div>}
          >
            <SessionProvider>{children}</SessionProvider>
          </Suspense>
        </main>
      </div>
    </SidebarProvider>
  );
}
