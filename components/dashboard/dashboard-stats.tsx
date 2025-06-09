import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CalendarDays, Clock, Users } from "lucide-react";
import Link from "next/link";

async function getStats(userId: string) {
  const [activeReservations, upcomingReservations, totalReservations] =
    await Promise.all([
      prisma.reservation.count({
        where: {
          userId,
          status: "active",
        },
      }),
      prisma.reservation.count({
        where: {
          userId,
          status: "pending",
        },
      }),
      prisma.reservation.count({
        where: {
          userId,
        },
      }),
    ]);

  return {
    activeReservations,
    upcomingReservations,
    totalReservations,
  };
}

export async function DashboardStats() {
  const session = await auth();
  const stats = session?.user?.id ? await getStats(session.user.id) : null;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Link href="/dashboard/reservations" className="block">
        <div className="rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <CalendarDays className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="mb-2 text-xl font-semibold">
                Réservations actives
              </h2>
              <p className="text-2xl font-bold text-primary">
                {stats?.activeReservations ?? 0}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <Link href="/dashboard/reservations" className="block">
        <div className="rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="mb-2 text-xl font-semibold">En attente</h2>
              <p className="text-2xl font-bold text-primary">
                {stats?.upcomingReservations ?? 0}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <Link href="/dashboard/reservations" className="block">
        <div className="rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="mb-2 text-xl font-semibold">Total réservations</h2>
              <p className="text-2xl font-bold text-primary">
                {stats?.totalReservations ?? 0}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
