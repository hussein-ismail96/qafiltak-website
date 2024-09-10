import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { getToken } from "next-auth/jwt";
import { routing } from "./navigation";

const intlMiddleware = createIntlMiddleware(routing);

const authMiddleware = withAuth(
  (req) => {
    intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
  }
);

const { defaultLocale } = routing;

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  req.headers.set(
    "Accept-Language",
    req.cookies?.get("NEXT_LOCALE")?.value ?? defaultLocale
  );

  if (token) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
