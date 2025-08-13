/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['stooltopia.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Import the generate-sitemap function only on server-side
      const { generateSitemap } = require('./src/lib/generate-sitemap.js');
      generateSitemap();
    }
    return config;
  },
}

module.exports = nextConfig 