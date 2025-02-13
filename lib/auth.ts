import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
// import { generateWelcomeEmail, sendEmail } from "./email";
import { prisma } from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials?.email || !credentials?.password) {
    //       throw new Error("Email and password required");
    //     }

    //     const user = await prisma.user.findUnique({
    //       where: { email: credentials.email },
    //     });

    //     if (!user || !user.password) {
    //       throw new Error("Email not found");
    //     }

    //     const isValid = await compare(credentials.password, user.password);

    //     if (!isValid) {
    //       throw new Error("Invalid password");
    //     }

    //     return {
    //       id: user.id,
    //       email: user.email,
    //       name: user.name,
    //     };
    //   },
    // }),
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
              // const welcomeEmail = generateWelcomeEmail(user.name || "");
              // await sendEmail({
              //   to: user.email,
              //   subject: welcomeEmail.subject,
              //   html: welcomeEmail.html,
              // });
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
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});
