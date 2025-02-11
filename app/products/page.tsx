import { NavHeader } from "@/components/nav-header";
import { ProductCard } from "@/components/products/product-card";
import { getProducts } from "@/lib/products";

export default function ProductsPage() {
  const products = getProducts();

  return (
    <>
      <NavHeader />
      <main className="min-h-screen py-24">
        <section className="container mx-auto px-4">
          <h1 className="mb-12 text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Nos Produits
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
