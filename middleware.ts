import { auth } from "@/lib/auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session;

  // Public paths that don't require authentication
  const isPublicPath = ["/login", "/register"].includes(
    request.nextUrl.pathname
  );

  // Protected paths that require authentication
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!isLoggedIn) {
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${request.nextUrl.pathname}`, request.url)
      );
    }
  }

  // Redirect logged in users from auth pages to dashboard
  if (isPublicPath && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
