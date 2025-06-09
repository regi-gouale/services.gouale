import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { Skeleton } from "@/components/ui/skeleton";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Suspense } from "react";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="font-poppins mb-6 text-3xl font-bold">
        Bienvenue, {session?.user?.name}
      </h1>

      <Suspense
        fallback={
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      >
        <DashboardStats />
      </Suspense>

      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Actions rapides</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/products" className="block">
            <div className="rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
              <h3 className="mb-2 text-xl font-semibold">
                Parcourir le catalogue
              </h3>
              <p className="text-muted-foreground">
                Découvrez notre sélection d'articles pour votre événement
              </p>
            </div>
          </Link>
          <Link href="/dashboard/profile" className="block">
            <div className="rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
              <h3 className="mb-2 text-xl font-semibold">Gérer mon profil</h3>
              <p className="text-muted-foreground">
                Mettez à jour vos informations personnelles
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
