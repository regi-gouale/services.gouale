import { PrismaClient } from "@/lib/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
// export const prisma = globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const connectionString = `${process.env.DATABASE_URL}`;

const poolConfig = { connectionString };
const adapter = new PrismaPg(poolConfig);

const prismaClientSingleton = () => {
  return new PrismaClient({ adapter });
};

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof prismaClientSingleton> | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
