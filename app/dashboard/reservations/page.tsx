import { ReservationsList } from "@/components/reservations/reservations-list";
import { Skeleton } from "@/components/ui/skeleton";
import { Reservation } from "@/lib/generated/prisma";
import { Suspense } from "react";

function ReservationsPageSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-96" />
      </div>
      <div className="grid gap-4">
        <Skeleton className="h-10 w-full" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ReservationsPage() {
  return (
    <div className="space-y-6 mx-auto mt-10 flex flex-col justify-center max-w-5xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Mes Réservations</h1>
        <p className="text-muted-foreground">
          Gérez vos réservations de matériel audiovisuel
        </p>
      </div>

      <Suspense fallback={<ReservationsPageSkeleton />}>
        <ReservationsList
          onViewDetails={(reservation) => {
            throw new Error("Function not implemented.");
          }}
        />
      </Suspense>
    </div>
  );
}
