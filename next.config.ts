import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: process.env.NEXT_PUBLIC_SITE_PROTOCOL,
  //       hostname: process.env.NEXT_PUBLIC_SITE_DOMAIN,
  //       pathname: "/**",
  //     },
  //   ],
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
