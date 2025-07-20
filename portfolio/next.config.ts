import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['wattshare-images.s3.us-east-1.amazonaws.com'],
  },
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Enable static exports for better SEO
  trailingSlash: true,
  // Add headers for better caching and SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
