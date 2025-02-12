"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // console.error(error);
    toast.error("Une erreur inattendue s'est produite. Veuillez réessayer.");
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">
          Oups ! Quelque chose s'est mal passé
        </h2>
        <p className="text-muted-foreground">
          Une erreur inattendue s'est produite. Nous nous excusons pour la gêne
          occasionnée.
        </p>
      </div>
      <Button
        onClick={reset}
        variant="outline"
        className="transition-transform hover:scale-105"
      >
        Réessayer
      </Button>
    </div>
  );
}
