import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // basePath only on GitHub Pages, not Vercel
  ...(isGithubActions && { basePath: "/rahul-portfolio" }),
};

export default nextConfig;
