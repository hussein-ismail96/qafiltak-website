import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
export function middleware(req: NextRequest) {
  const { origin } = req.nextUrl;

  // Check if the user is authenticated (for demonstration, assume a cookie named 'auth' is set when logged in)
  const isAuthorized = false;
  console.log("isAuthorized:", isAuthorized);
  console.log("Redirect URL:", `${origin}/auth`);
  const url = new URL(`auth/sign-up`, origin);
  // If the user is not authenticated and is trying to access a protected page, redirect to login
  if (!isAuthorized) {
    return NextResponse.redirect(url);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
