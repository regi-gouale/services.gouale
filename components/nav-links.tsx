import { cn } from "@/lib/utils";
import Link from "next/link";

const navigationLinks = [
  { href: "/products", label: "Produits" },
  { href: "/get-started", label: "Comment ça marche" },
] as const;

export function NavLinks() {
  return (
    <nav
      className="hidden md:flex items-center gap-6"
      aria-label="Navigation principale"
    >
      {navigationLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
