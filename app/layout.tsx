import { CartProvider } from "@/components/cart";
import { PageTransition } from "@/components/page-transition";
import { Skeleton } from "@/components/ui/skeleton";
import type { Metadata, Viewport } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Gouale Services | Location d'Art de la Table",
    template: "%s | Gouale Services",
  },
  description:
    "L'art de la table, sans les contraintes. Location de vaisselle et accessoires pour vos événements.",
  metadataBase: new URL("https://gouale.services"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Gouale Services",
    description: "Location d'art de la table pour vos événements",
    siteName: "Gouale Services",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background antialiased ${inter.variable}`}
      >
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="space-y-4 text-center">
                <Skeleton className="h-8 w-32 mx-auto" />
                <Skeleton className="h-4 w-48 mx-auto" />
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              </div>
            </div>
          }
        >
          <SessionProvider>
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="space-y-4">
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-96 w-full" />
                    <Skeleton className="h-32 w-full" />
                  </div>
                </div>
              }
            >
              <CartProvider>
                <Suspense
                  fallback={<div className="min-h-screen bg-background" />}
                >
                  <PageTransition>{children}</PageTransition>
                </Suspense>
                <Toaster />
              </CartProvider>
            </Suspense>
          </SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
