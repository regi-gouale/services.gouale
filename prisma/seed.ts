import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: "Professional Web Development",
      description:
        "Custom web development services tailored to your business needs",
      price: 2999.99,
      category: "Development",
      image: "/services/web-development.webp",
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile application development",
      price: 3999.99,
      category: "Development",
      image: "/services/mobile-development.webp",
    },
    {
      name: "UI/UX Design",
      description: "User-centered design solutions for digital products",
      price: 1499.99,
      category: "Design",
      image: "/services/ui-ux-design.webp",
    },
    {
      name: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and campaigns",
      price: 999.99,
      category: "Marketing",
      image: "/services/digital-marketing.webp",
    },
    {
      name: "Cloud Consulting",
      description: "Expert cloud infrastructure and deployment consulting",
      price: 1999.99,
      category: "Consulting",
      image: "/services/cloud-consulting.webp",
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
