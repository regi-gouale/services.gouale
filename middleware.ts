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

export { auth as middleware } from "@/lib/auth";
