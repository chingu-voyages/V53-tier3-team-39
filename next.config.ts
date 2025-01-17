import type { NextConfig } from "next";
import { version } from "./package.json";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/friends-choice",
        destination: "/friends-choice/new",
        permanent: true,
      },
    ];
  },
  publicRuntimeConfig: {
    version,
  },
};

export default nextConfig;
