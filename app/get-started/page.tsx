import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const packages = [
  {
    id: "basic",
    name: "Pack Essentiel",
    description: "Idéal pour les petits événements jusqu'à 20 personnes",
    price: "199€",
    features: [
      "Service de table complet pour 20 personnes",
      "Vaisselle élégante",
      "Couverts assortis",
      "Verres à vin et à eau",
    ],
  },
  {
    id: "premium",
    name: "Pack Premium",
    description: "Parfait pour les événements moyens jusqu'à 50 personnes",
    price: "399€",
    features: [
      "Service de table complet pour 50 personnes",
      "Vaisselle haut de gamme",
      "Couverts en argent",
      "Verres en cristal",
      "Décoration de table basique",
    ],
  },
  {
    id: "luxury",
    name: "Pack Luxe",
    description: "Pour les grands événements jusqu'à 100 personnes",
    price: "799€",
    features: [
      "Service de table complet pour 100 personnes",
      "Vaisselle de luxe",
      "Couverts plaqués or",
      "Verres en cristal premium",
      "Décoration de table complète",
      "Service de mise en place",
    ],
  },
];

export default function GetStartedPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="font-poppins mb-4 text-4xl font-bold">
          Commencez Votre Location
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Choisissez le forfait qui correspond le mieux à vos besoins et
          commencez à planifier votre événement dès aujourd'hui.
        </p>
      </div>

      <Tabs defaultValue="basic" className="mx-auto max-w-5xl">
        <TabsList className="grid w-full grid-cols-3">
          {packages.map((pkg) => (
            <TabsTrigger key={pkg.id} value={pkg.id}>
              {pkg.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {packages.map((pkg) => (
          <TabsContent key={pkg.id} value={pkg.id}>
            <Card>
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 text-3xl font-bold">{pkg.price}</div>
                <ul className="mb-6 space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Image
                        src="/check.svg"
                        alt="Inclus"
                        width={16}
                        height={16}
                        className="text-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Sélectionner ce Pack</Button>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
