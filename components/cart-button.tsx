"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/store";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function CartButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const items = useCart((state) => state.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative hover:bg-primary/10 transition-colors"
      onClick={() => {
        startTransition(() => {
          router.push("/cart");
        });
      }}
      disabled={isPending}
      aria-label={`Voir le panier (${itemCount} article${itemCount !== 1 ? "s" : ""})`}
    >
      <ShoppingCart className="size-6" />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
          {itemCount}
        </span>
      )}
    </Button>
  );
}
