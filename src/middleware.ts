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

const getIsPublicRoute = (pathname: string) => {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicRoutes.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
    "i"
  )
  return publicPathnameRegex.test(pathname);
}

const getIsConstructionsRoute = (pathname: string) => {
  const constructionsPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${constructionsRoutes.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
    "i"
  );
  return constructionsPathnameRegex.test(pathname);
}

const getIsAuthRoute = (pathname: string) => {
  const authPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${authRoutes.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
    "i"
  );
  return authPathnameRegex.test(pathname);
}


const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
});

const authMiddleware = auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isPublicRoute = getIsPublicRoute(nextUrl.pathname);
  const isAuthRoute = getIsAuthRoute(nextUrl.pathname);
  const isConstructionsRoute = getIsConstructionsRoute(nextUrl.pathname);

  // Redirect logged-in users from auth routes to dashboard
  // if (isAuthRoute && isLoggedIn) {
  //     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  // }

  // Redirect unauthorized users to login for non-public routes
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(LOGIN_PAGE, nextUrl));
  }

  // Redirect to construction page for construction routes
  if (isConstructionsRoute) return Response.redirect(new URL(CONSTRUCTION_PAGE, req.nextUrl));

  // Apply internationalization middleware for public routes and authenticated users
  return intlMiddleware(req);
});

export default function middleware(req: NextRequest) {
  return (authMiddleware as any)(req);
}

export const config = {
matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};