import { prisma } from "@/lib/prisma";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function getProducts() {
  return prisma.product.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function getProduct(id: string) {
  return prisma.product.findUnique({
    where: { id },
  });
}

export async function getFeaturedProducts() {
  return prisma.product.findMany({
    where: {
      featured: true,
    },
    take: 4,
  });
}

export async function searchProducts(query: string) {
  return prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
  });
}
