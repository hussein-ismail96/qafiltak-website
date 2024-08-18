import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  // Get the token from the request
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // Define the paths where this middleware should apply
  const { pathname } = req.nextUrl;

  // If the user has a token
  if (token) {
    // Redirect to the home page if trying to access the login page
    if (pathname.includes("/auth")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    // Allow access to the home page or other authenticated routes
    return NextResponse.next();
  }

  // If no token is present, allow access to the login page but redirect others
  if (pathname !== "/auth/login") {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  // Allow access to the login page for unauthenticated users
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/auth/sign-up", "/"],
};
