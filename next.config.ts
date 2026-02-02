import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Help with hydration issues
    optimizePackageImports: ['lucide-react'],
  },
  // Suppress hydration warnings in development
  reactStrictMode: true,
  // Configure image domains for Next.js Image component
  images: {
    domains: ['cdn.dummyjson.com', 'i.dummyjson.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
