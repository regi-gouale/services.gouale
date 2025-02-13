"use client";

import { clsx, type ClassValue } from "clsx";
import { createContext, useContext, type Provider } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

export function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function isClient() {
  return typeof window !== "undefined";
}

export function createSafeContext<T>(defaultValue?: T) {
  const Context = React.createContext<T | undefined>(defaultValue);

  function useContext() {
    const ctx = React.useContext(Context);
    if (ctx === undefined) {
      throw new Error("useContext must be used within a Provider");
    }
    return ctx;
  }

  return [Context.Provider, useContext] as const;
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
