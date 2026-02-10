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

    // Quality setting - balance between visual quality and file size
    quality: 85,

    // Minimum cache TTL for optimized images (in seconds)
    minimumCacheTTL: 60,

    // Use sharp for faster image processing (Next.js default)
    // No need to specify - Next.js uses sharp by default when available
  },

  // PPR disabled - requires canary version
};

export default nextConfig;
