import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
