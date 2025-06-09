// import { auth } from "@/lib/auth";
// import type { NextRequestWithAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default async function middleware(request: NextRequestWithAuth) {
//   const session = await auth();
//   const isAuthPage = request.nextUrl.pathname.startsWith("/(auth)");
//   const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard");
//   const isApiAuthRoute = request.nextUrl.pathname.startsWith("/api/auth");

//   // Allow public API routes
//   if (isApiAuthRoute) {
//     return NextResponse.next();
//   }

//   // Redirect authenticated users away from auth pages
//   if (isAuthPage && session) {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }

//   // Protect dashboard routes
//   if (isDashboardPage && !session) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/(auth)/:path*", "/api/auth/:path*"],
// };

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Vérifier si l'utilisateur est connecté via un cookie
  const authCookie = request.cookies.get("next-auth.session-token")?.value;

  // Redirection vers la page de connexion si l'utilisateur n'est pas connecté et essaie d'accéder au tableau de bord
  if (!authCookie && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirection vers le tableau de bord si l'utilisateur est connecté et essaie d'accéder aux pages d'authentification
  if (authCookie && request.nextUrl.pathname.startsWith("/(auth)")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/(auth)/:path*"],
};
