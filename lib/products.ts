type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Service de Table Élégance",
    description:
      "Service complet 12 pièces en porcelaine fine avec finitions dorées",
    price: 249.99,
    image: "/hero-image.webp",
  },
  {
    id: "2",
    name: "Collection Cristal Royal",
    description: "Ensemble de verres en cristal pour 6 personnes",
    price: 189.99,
    image: "/hero-image-2.jpg",
  },
  {
    id: "3",
    name: "Set de Couverts Premium",
    description: "Couverts en acier inoxydable 18/10, finition miroir",
    price: 159.99,
    image: "/hero-image.webp",
  },
];

export function getProducts() {
  return products;
}

export type { Product };
