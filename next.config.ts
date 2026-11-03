import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // A lockfile in the user home directory would otherwise be treated as the repo root.
    root: process.cwd(),
  },
};

export default nextConfig;
