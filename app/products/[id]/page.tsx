import { AddToCartButton } from "@/components/add-to-cart-button";
import { NavHeader } from "@/components/nav-header";
import { Card } from "@/components/ui/card";
import { getProduct } from "@/lib/products";
import { formatCurrency } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

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
      <NavHeader />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
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

                <AddToCartButton
                  product={{ ...product, image: product.image || undefined }}
                />
              </div>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
}
