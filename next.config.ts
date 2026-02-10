import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    // Modern formats for better compression and quality
    formats: ['image/avif', 'image/webp'],

    // Responsive image sizes for different device breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for srcset generation
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimum cache TTL for optimized images (in seconds)
    minimumCacheTTL: 60,
  },

  // PPR disabled - requires canary version
};

export default nextConfig;
