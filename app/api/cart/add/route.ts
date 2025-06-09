import { getProduct } from "@/lib/products";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const productId = formData.get("productId") as string;

    if (!productId) {
      return NextResponse.json(
        { error: "L'ID du produit est requis" },
        { status: 400 }
      );
    }

    // Récupérer les détails du produit
    const product = await getProduct(productId);
    if (!product) {
      return NextResponse.json(
        { error: "Produit non trouvé" },
        { status: 404 }
      );
    }

    // Nous redirigerons l'utilisateur vers la page du panier
    // Le produit sera ajouté au panier via le localStorage côté client
    // lorsque la page du panier sera chargée
    const url = new URL("/cart", request.url);
    url.searchParams.append("productId", productId);
    url.searchParams.append("action", "add");

    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Erreur lors de l'ajout au panier:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
