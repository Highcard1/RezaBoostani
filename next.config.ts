import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['wattshare-images.s3.us-east-1.amazonaws.com'],
  },
};

export default nextConfig;
