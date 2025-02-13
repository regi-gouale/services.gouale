import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: "Verre à vin",
      description: "Verre à vin en cristal de Bohême, 100% fait main",
      price: 0.25,
      category: "Verres",
      image: "/products/wine-glass.avif",
    },
    {
      name: "Verre à eau",
      description: "Verre à eau en cristal, parfait pour l'hydratation",
      price: 0.25,
      category: "Verres",
      image: "/products/water-glass.avif",
    },
    {
      name: "Couverts Olympe",
      description: "Couverts en acier inoxydable, résistants et durables",
      price: 0.99,
      category: "Couverts",
      image: "/products/cutlery.avif",
    },
    {
      name: "Assiette Plaza",
      description: "Assiette en céramique élégante pour présenter vos plats",
      price: 2.99,
      category: "Assiettes",
      image: "/products/plate.avif",
    },
    {
      name: "Pack Essentiel",
      description: "Idéal pour les petits événements jusqu'à 20 personnes",
      price: 79.99,
      category: "Packs",
      image: "/products/pack.jpg",
    },
    {
      name: "Pack Premium",
      description: "Pack complet pour les événements jusqu'à 50 personnes",
      price: 174.99,
      category: "Packs",
      image: "/products/pack.jpg",
    },
    {
      name: "Pack Prestige",
      description: "Pack de luxe pour les événements jusqu'à 100 personnes",
      price: 299.99,
      category: "Packs",
      image: "/products/pack.jpg",
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
