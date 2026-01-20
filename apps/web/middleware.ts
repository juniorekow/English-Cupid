import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/", "/get-started", "/login", "/signup"];

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("ec_session")?.value;
  const { pathname } = request.nextUrl;

  if (isLoggedIn && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/discover", request.url));
  }

  if (!isLoggedIn && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|static|.*\\..*).*)"],
};
