import createMiddleware from 'next-intl/middleware';
import {
  locales,
  defaultLocale,
  localePrefix
} from './navigation';

export default createMiddleware({ locales, defaultLocale, localePrefix });
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};