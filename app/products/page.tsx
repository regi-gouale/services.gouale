import { NavHeader } from "@/components/nav-header";
import { ProductCard } from "@/components/products/product-card";
import { ProductsGridSkeleton } from "@/components/products/product-skeleton";
import { getProducts } from "@/lib/products";
import { Suspense } from "react";

async function ProductsGrid() {
  const products = await getProducts();

  return (
    <div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      role="grid"
      aria-label="Liste des produits"
    >
      {products.map((product) => (
        <div key={product.id} role="gridcell">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <NavHeader />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="font-poppins mb-4 text-4xl font-bold">Nos Produits</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Découvrez notre collection d'art de la table raffinée pour sublimer
            vos événements
          </p>
        </div>

        <Suspense
          fallback={
            <div aria-label="Chargement des produits">
              <ProductsGridSkeleton />
            </div>
          }
        >
          <ProductsGrid />
        </Suspense>
      </main>
    </>
  );
}
