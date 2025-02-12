"use client";

import { NavHeader } from "@/components/nav-header";
import { Card } from "@/components/ui/card";

export default function CartPage() {
  return (
    <>
      <NavHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-poppins mb-8 text-3xl font-bold">Votre Panier</h1>

        <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
          <Card className="p-6">
            <div className="flex flex-col gap-4">
              <p className="text-center text-muted-foreground">
                Votre panier est vide
              </p>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="font-poppins mb-4 text-xl font-semibold">
                Récapitulatif
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>0,00 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>Gratuite</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>0,00 €</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
