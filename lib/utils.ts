"use client";

import { clsx, type ClassValue } from "clsx";
import { createContext, useContext, type Provider } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createContextWithProvider<ContextType>(): readonly [
  Provider<ContextType>,
  () => ContextType,
] {
  const Context = createContext<ContextType | undefined>(undefined);

  function useContextHook(): ContextType {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error("useContext must be used within its Provider");
    }
    return context;
  }

  return [Context.Provider, useContextHook] as const;
}
