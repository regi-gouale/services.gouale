export default async function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="font-poppins mb-6 text-3xl font-bold">Bienvenue,</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-2 text-xl font-semibold">Mes Réservations</h2>
          <p className="text-muted-foreground">
            Aucune réservation active pour le moment.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-2 text-xl font-semibold">Historique</h2>
          <p className="text-muted-foreground">
            Consultez l'historique de vos locations.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-2 text-xl font-semibold">Paramètres</h2>
          <p className="text-muted-foreground">
            Gérez vos informations personnelles et vos préférences.
          </p>
        </div>
      </div>
    </main>
  );
}
