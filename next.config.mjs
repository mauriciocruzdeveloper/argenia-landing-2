import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
 
const withNextIntl = createNextIntlPlugin('./src/intl/i18n.ts');
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};
 
export default withNextIntl(nextConfig);