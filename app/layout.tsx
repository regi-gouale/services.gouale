import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          geistSans.className,
          geistMono.className,
          poppins.className,
          "antialiased",
          "bg-zinc-50/35"
        )}
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
