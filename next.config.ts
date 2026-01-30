import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fatherson-lawn",
  assetPrefix: "/fatherson-lawn/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
