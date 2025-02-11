import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export function ProductCard({ name, description, price, image }: ProductProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        <p className="mt-4 text-xl font-bold">
          {price.toLocaleString("fr-FR", {
            style: "currency",
            currency: "EUR",
          })}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Réserver</Button>
      </CardFooter>
    </Card>
  );
}
