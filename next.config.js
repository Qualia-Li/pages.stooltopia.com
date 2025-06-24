/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['circulsense.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Import the generate-sitemap function only on server-side
      const { generateSitemap } = require('./src/lib/generate-sitemap.ts');
      generateSitemap();
    }
    return config;
  },
}

module.exports = nextConfig 