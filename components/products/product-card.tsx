"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { type Product } from "@/lib/products";
import { useCart } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

interface ProductCardProps extends Product {
  featured?: boolean;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  image,
  featured,
}: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name, price, quantity: 1, image });
    toast.success("Produit ajouté au panier");
  };

  return (
    <Card className={featured ? "border-primary" : undefined}>
      {image && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="line-clamp-1 text-lg font-semibold">{name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <p className="mt-4 font-semibold">{formatCurrency(price)}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full gap-2" onClick={handleAddToCart}>
          <ShoppingCart className="size-4" />
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
}
