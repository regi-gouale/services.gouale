import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { Product } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  await auth(); // Ensure user is authenticated

  const products: Product[] = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!products) {
    return NextResponse.error(); // returns a generic error response
  }

  return NextResponse.json(products);
}
