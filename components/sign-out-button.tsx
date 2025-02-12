"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function SignOutButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={async () => signOut({ callbackUrl: "/" })}
      className="gap-2"
      aria-label="Se déconnecter et retourner à l'accueil"
    >
      <LogOut className="size-4" aria-hidden="true" />
      Déconnexion
    </Button>
  );
}
