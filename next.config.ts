import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Enable experimental features for better i18n support
    optimizePackageImports: ['next-intl']
  }
};

export default withNextIntl(nextConfig);
