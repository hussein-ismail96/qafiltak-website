import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { getToken } from "next-auth/jwt";
import { locales, localePrefix, defaultLocale } from "./navigation";

export const publicPages = [
  "/403",
  "/505",
  "/offline",
  "/auth/login",
  ...locales.map((l) => `/${l}/auth/login`),
];

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix,
  defaultLocale,
});

const authMiddleware = withAuth((req) => intlMiddleware(req), {
  callbacks: {
    authorized: ({ token }) => token != null,
  },
});

export default async function middleware(req: NextRequest) {
  console.log("req --> ", JSON.stringify(req.headers));
  // Create the regular expression pattern
  const regexPattern = new RegExp(`^(${publicPages.join("|")})?$`, "i");

  req.headers.set(
    "Accept-Language",
    req.cookies?.get("NEXT_LOCALE")?.value ?? defaultLocale
  );

  const isPublicPage = regexPattern.test(req.nextUrl.pathname);
  console.log("----------------------------------");
  console.log("pathname -----> ", req.nextUrl.pathname);
  console.log("isPublicPage -----> ", isPublicPage);
  console.log("----------------------------------");

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: [
    "/((?!api|_next|_next/static|_next/assets|assets|_next/locales|favicon.ico|apple-touch-icon.png|favicon.svg|images|icons|403|manifest.*\\..*).*)",
  ],
};
