import { CartProvider } from "@/components/cart";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TableScape | Location d'Art de la Table",
  description:
    "L'art de la table, sans les contraintes. Location de vaisselle et accessoires pour vos événements.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Location de matériel et services pour vos événements"
        />
      </head>
      <body
        className={`min-h-screen bg-background antialiased ${poppins.variable}`}
      >
        <CartProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
        </CartProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
