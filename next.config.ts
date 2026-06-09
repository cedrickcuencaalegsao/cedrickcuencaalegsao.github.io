import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Optional: if you're deploying to a project site (username.github.io/repo),
  // uncomment and set the repo name:
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
