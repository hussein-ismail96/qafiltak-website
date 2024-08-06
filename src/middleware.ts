import { NextRequest, NextResponse } from "next/server";
import { getSession } from 'next-auth/react';
export function middleware(req: NextRequest) {
  const {  origin } = req.nextUrl;
  const session = getSession();
  // Check if the user is authenticated (for demonstration, assume a cookie named 'auth' is set when logged in)


  // If the user is not authenticated and is trying to access a protected page, redirect to login
  if (!session) {
    return NextResponse.redirect(`${origin}/login`);
  }

  // Allow the request to proceed
  return NextResponse.next();
}
