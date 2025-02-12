import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ReservationsPage() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="upcoming" aria-label="Gestion des réservations">
        <TabsList aria-label="Filtrer les réservations">
          <TabsTrigger
            value="upcoming"
            aria-label="Voir les réservations à venir"
          >
            À venir
          </TabsTrigger>
          <TabsTrigger
            value="past"
            aria-label="Voir l'historique des réservations"
          >
            Historique
          </TabsTrigger>
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
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col space-y-4">
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground" role="status">
                      Aucune réservation prévue
                    </p>
                  </div>
                  <Button aria-label="Créer une nouvelle réservation">
                    Nouvelle Réservation
                  </Button>
                </div>
                <Calendar
                  mode="range"
                  className="rounded-md border"
                  aria-label="Calendrier de sélection de dates"
                />
              </div>
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
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground" role="status">
                  Aucun historique disponible
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
