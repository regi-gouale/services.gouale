import { sendWelcomeEmail } from "@/lib/email";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.password) {
          throw new Error("Email not found");
        }

        const isValid = await compare(
          credentials.password as string,
          user.password
        );

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          // Send welcome email for new Google sign-ins
          if (user.email) {
            const dbUser = await prisma.user.findUnique({
              where: { email: user.email },
            });

            if (!dbUser) {
              await sendWelcomeEmail(user.name || "", user.email);
            }
          }
          return true;
        } catch (error) {
          console.error("Error during sign in:", error);
          return true; // Still allow sign in even if email fails
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
  session: {
    strategy: "database",
  },
  secret: process.env.AUTH_SECRET,
});
