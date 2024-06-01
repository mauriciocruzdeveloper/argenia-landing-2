import { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { auth } from "./auth/auth";
import { locales, defaultLocale } from "./intl/navigation";
import {
  publicRoutes,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  constructionsRoutes,
  CONSTRUCTION_PAGE,
  LOGIN_PAGE,
} from "./auth/routes";


const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
});

const authMiddleware = auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isConstructionsRoute = constructionsRoutes.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      // Redirect logged-in users from auth routes
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return; // Don't modify behavior for auth routes
  }

  if (!isLoggedIn && !isPublicRoute) {
    // Redirect unauthorized users to login for non-public routes
    return Response.redirect(new URL(LOGIN_PAGE, nextUrl));
  }

  if (isLoggedIn) {
    return intlMiddleware(req); // Apply internationalization for logged-in users
  }
});

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicRoutes.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
    "i"
  )
  const constructionsPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${constructionsRoutes.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
    "i"
  );

  console.log('!!!publicPathnameRegex', publicPathnameRegex); 

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  const isConstructionsRoute = constructionsPathnameRegex.test(req.nextUrl.pathname);

  console.log('!!!isPublicPage', isPublicPage);
  console.log('!!!isConstructionsRoute', isConstructionsRoute, constructionsRoutes, req.nextUrl.pathname);

  if (isConstructionsRoute) return Response.redirect(new URL(CONSTRUCTION_PAGE, req.nextUrl));
  if (isPublicPage) return intlMiddleware(req); // Apply internationalization for public pages
  return (authMiddleware as any)(req); // Apply authentication logic for non-public pages
}

export const config = {
matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};