import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Public paths that don't require authentication
  // const isPublicPath = ["/login", "/register"].includes(
  //   request.nextUrl.pathname
  // );

  // Protected paths that require authentication

  // Redirect logged in users from auth pages to dashboard

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
