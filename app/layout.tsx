import { CartProvider } from "@/components/cart";
import { PageTransition } from "@/components/page-transition";
import type { Metadata, Viewport } from "next";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
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
        className={`min-h-screen bg-background antialiased ${poppins.variable}`}
      >
        <CartProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              <SessionProvider>
                <PageTransition>{children}</PageTransition>
              </SessionProvider>
            </div>
          </div>
        </CartProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
