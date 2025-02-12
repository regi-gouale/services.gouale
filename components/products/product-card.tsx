"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/lib/cart";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export function ProductCard({
  id,
  name,
  description,
  price,
  image,
}: ProductProps) {
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      addItem(id);
      toast.success(`"${name}" a été ajouté au panier`);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Card className="group flex h-full flex-col transition-all hover:shadow-lg">
      <CardHeader className="relative aspect-square overflow-hidden rounded-t-lg p-0">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          quality={90}
        />
      </CardHeader>
      <CardContent className="grow p-6">
        <CardTitle className="group-hover:text-primary mb-2 line-clamp-1">
          {name}
        </CardTitle>
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex w-full items-center justify-between gap-4">
          <p
            className="text-lg font-bold"
            aria-label={`Prix : ${new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
            }).format(price)}`}
          >
            {new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
            }).format(price)}
          </p>
          <Button
            className="transition-transform hover:scale-105"
            onClick={handleAddToCart}
            disabled={isAdding}
            aria-label={`Ajouter ${name} au panier`}
          >
            <ShoppingCart className="mr-2 size-4" aria-hidden="true" />
            Ajouter
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
