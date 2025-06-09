"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/store";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

export function AddToCartButton(props: { product: Product }) {
  const { product } = props;
  const addItem = useCart((state) => state.addItem);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);

    try {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image || undefined,
      });

      toast.success("Produit ajouté au panier");
    } catch (error) {
      console.error("Erreur lors de l'ajout au panier:", error);
      toast.error("Erreur lors de l'ajout du produit au panier");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      className="w-full gap-2"
      size="lg"
      disabled={isLoading}
    >
      <ShoppingCart className="size-4" />
      {isLoading ? "Ajout en cours..." : "Ajouter au panier"}
    </Button>
  );
}
