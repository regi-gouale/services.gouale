"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex h-[calc(100vh-4rem)] items-center justify-center">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Une erreur est survenue</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Nous n'avons pas pu traiter votre demande. Veuillez réessayer.
          </p>
          <Button onClick={reset} variant="outline">
            Réessayer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
