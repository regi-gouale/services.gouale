"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useEffect, useState } from "react";

interface Reservation {
  id: string;
  startDate: string;
  endDate: string;
  status: "pending" | "active" | "completed" | "cancelled";
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
}

export function ReservationsList({
  onViewDetails,
}: {
  onViewDetails: (reservation: Reservation) => void;
}) {
  const [upcomingReservations, setUpcomingReservations] = useState<
    Reservation[]
  >([]);
  const [pastReservations, setPastReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const response = await fetch("/api/reservations");
        const data = await response.json();

        const now = new Date();
        const upcoming = data.filter(
          (r: Reservation) => new Date(r.endDate) >= now
        );
        const past = data.filter((r: Reservation) => new Date(r.endDate) < now);

        setUpcomingReservations(upcoming);
        setPastReservations(past);
      } catch (error) {
        console.error("Failed to fetch reservations:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchReservations();
  }, []);

  const ReservationTableSkeleton = () => (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-64" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 border rounded-lg"
            >
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
              <Skeleton className="h-8 w-20" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (isLoading) {
    return (
      <div className="space-y-6">
        <ReservationTableSkeleton />
        <ReservationTableSkeleton />
      </div>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Réservations à venir</CardTitle>
          <CardDescription>Vos prochaines réservations</CardDescription>
        </CardHeader>
        <CardContent>
          {upcomingReservations.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Aucune réservation à venir
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dates</TableHead>
                  <TableHead>Articles</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingReservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {format(
                            new Date(reservation.startDate),
                            "dd/MM/yyyy",
                            {
                              locale: fr,
                            }
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          au{" "}
                          {format(new Date(reservation.endDate), "dd/MM/yyyy", {
                            locale: fr,
                          })}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{reservation.items.length} article(s)</TableCell>
                    <TableCell>
                      <span className="capitalize">{reservation.status}</span>
                    </TableCell>
                    <TableCell>
                      {formatCurrency(
                        reservation.items.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onViewDetails(reservation)}
                      >
                        Voir
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Historique</CardTitle>
          <CardDescription>Vos réservations passées</CardDescription>
        </CardHeader>
        <CardContent>
          {pastReservations.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Aucune réservation passée
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dates</TableHead>
                  <TableHead>Articles</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pastReservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {format(
                            new Date(reservation.startDate),
                            "dd/MM/yyyy",
                            {
                              locale: fr,
                            }
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          au{" "}
                          {format(new Date(reservation.endDate), "dd/MM/yyyy", {
                            locale: fr,
                          })}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{reservation.items.length} article(s)</TableCell>
                    <TableCell>
                      <span className="capitalize">{reservation.status}</span>
                    </TableCell>
                    <TableCell>
                      {formatCurrency(
                        reservation.items.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onViewDetails(reservation)}
                      >
                        Voir
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </>
  );
}
