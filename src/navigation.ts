import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['en', 'es'] as const;
export const defaultLocale = 'es'; // Default
export const localePrefix = 'always'; // Default
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});