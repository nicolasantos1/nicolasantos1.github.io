import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  experimental: {
    useTypeScriptCli: false,
  },
};

export default nextConfig;
