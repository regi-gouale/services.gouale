import { AddToCartButton } from "@/components/add-to-cart-button";
import { NavHeader } from "@/components/nav-header";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getProduct } from "@/lib/products";
import { formatCurrency } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.id);

  if (!product) {
    return {
      title: "Produit non trouvé",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

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
            <Card className="overflow-hidden">
              <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
                <Skeleton className="aspect-square rounded-lg" />
                <div className="flex flex-col space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <div className="mt-auto space-y-4">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-10 w-40" />
                  </div>
                </div>
              </div>
            </Card>
          }
        >
          <Card className="overflow-hidden">
            <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted/50">
                    <p className="text-muted-foreground">
                      Aucune image disponible
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <h1 className="font-poppins mb-2 text-3xl font-bold">
                  {product.name}
                </h1>
                <p className="mb-4 text-2xl font-semibold">
                  {formatCurrency(product.price)}
                </p>
                <p className="mb-6 text-muted-foreground">
                  {product.description}
                </p>

                <div className="mt-auto">
                  <div className="mb-4">
                    <span className="text-sm font-medium">Catégorie:</span>{" "}
                    <span className="text-sm">{product.category}</span>
                  </div>
                  <Suspense fallback={<Skeleton className="h-10 w-40" />}>
                    <AddToCartButton
                      product={{
                        ...product,
                        image: product.image || undefined,
                      }}
                    />
                  </Suspense>
                </div>
              </div>
            </div>
          </Card>
        </Suspense>
      </main>
    </>
  );
}
