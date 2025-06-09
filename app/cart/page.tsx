"use client";

import { ReservationForm } from "@/components/cart/reservation-form";
import { NavHeader } from "@/components/nav-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getProduct } from "@/lib/products";
import { useCart } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, addItem } = useCart();
  const searchParams = useSearchParams();

  useEffect(() => {
    const productId = searchParams.get("productId");
    const action = searchParams.get("action");

    if (productId && action === "add") {
      // Appeler une fonction asynchrone à l'intérieur de useEffect
      const fetchProductAndAddToCart = async () => {
        try {
          const product = await getProduct(productId);
          if (product) {
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
              image: product.image || undefined,
            });
            toast.success("Produit ajouté au panier");
          }
        } catch (error) {
          console.error("Erreur lors de l'ajout au panier:", error);
          toast.error("Erreur lors de l'ajout du produit au panier");
        }
      };

      fetchProductAndAddToCart();
    }
  }, [searchParams, addItem]);

  return (
    <>
      <NavHeader />
      <main className="container mx-auto px-4 py-8" suppressHydrationWarning>
        <h1 className="font-poppins mb-8 text-3xl font-bold">Votre Panier</h1>

        <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
          <Card className="p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center gap-4 py-8">
                <p className="text-center text-muted-foreground">
                  Votre panier est vide
                </p>
                <Link href="/products">
                  <Button>Voir nos produits</Button>
                </Link>
              </div>
            ) : (
              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4">
                    {item.image && (
                      <div className="relative aspect-square h-24 overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {formatCurrency(item.price)}
                      </p>
                      <div className="mt-auto flex items-center gap-2">
                        <div className="flex items-center rounded-lg border">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(0, item.quantity - 1)
                              )
                            }
                            aria-label="Diminuer la quantité"
                          >
                            <Minus className="size-4" />
                          </Button>
                          <Input
                            type="number"
                            min="0"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="h-8 w-24 border-0 text-center [appearance:textfield]"
                            aria-label="Quantité"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            aria-label="Augmenter la quantité"
                          >
                            <Plus className="size-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive"
                          onClick={() => removeItem(item.id)}
                          aria-label="Supprimer l'article"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right font-medium">
                      {formatCurrency(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="font-poppins mb-4 text-xl font-semibold">
                Récapitulatif
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{formatCurrency(getTotal())}</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>{formatCurrency(40)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{formatCurrency(getTotal() + 40)}</span>
                  </div>
                </div>
              </div>
              {items.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-poppins mb-4 text-lg font-medium">
                    Dates de réservation
                  </h3>
                  <ReservationForm />
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
