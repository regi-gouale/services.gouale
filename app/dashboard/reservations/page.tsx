"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

interface Reservation {
  id: string;
  startDate: string;
  endDate: string;
  status: string;
  items: any[];
}

export default function ReservationsPage() {
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

  return (
    <div className="space-y-6">
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">À venir</TabsTrigger>
          <TabsTrigger value="past">Historique</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Réservations à venir</CardTitle>
              <CardDescription>
                Gérez vos prochaines réservations de matériel
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : upcomingReservations.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Aucune réservation à venir
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date de début</TableHead>
                      <TableHead>Date de fin</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Articles</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingReservations.map((reservation) => (
                      <TableRow key={reservation.id}>
                        <TableCell>
                          {new Date(reservation.startDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {new Date(reservation.endDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{reservation.status}</TableCell>
                        <TableCell>
                          {reservation.items.length} articles
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              /* TODO: Implement view details */
                            }}
                          >
                            Voir les détails
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historique des réservations</CardTitle>
              <CardDescription>
                Consultez vos réservations passées
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : pastReservations.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Aucun historique de réservation
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date de début</TableHead>
                      <TableHead>Date de fin</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Articles</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastReservations.map((reservation) => (
                      <TableRow key={reservation.id}>
                        <TableCell>
                          {new Date(reservation.startDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {new Date(reservation.endDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{reservation.status}</TableCell>
                        <TableCell>
                          {reservation.items.length} articles
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              /* TODO: Implement view details */
                            }}
                          >
                            Voir les détails
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
