import { NavHeader } from "@/components/nav-header";
import { ProductCard } from "@/components/products/product-card";
import { ProductsGridSkeleton } from "@/components/products/product-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
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
          <ProductCard {...product} image={product.image ?? undefined} />
        </div>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Suspense
        fallback={
          <div className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center px-4 py-2 shadow-md z-40 h-16">
            <div className="container mx-4 flex items-center justify-between px-4 md:mx-auto">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-32" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          </div>
        }
      >
        <NavHeader />
      </Suspense>
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <Suspense
          fallback={
            <div className="mb-12 text-center">
              <Skeleton className="h-10 w-48 mx-auto mb-4" />
              <Skeleton className="h-6 w-96 mx-auto" />
            </div>
          }
        >
          <div className="mb-12 text-center">
            <h1 className="font-poppins mb-4 text-4xl font-bold">
              Nos Produits
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Découvrez notre collection d'art de la table raffinée pour
              sublimer vos événements
            </p>
          </div>
        </Suspense>

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
