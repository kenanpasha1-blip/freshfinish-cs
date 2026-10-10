import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Short, dash-free address printed on the price list.
  async redirects() {
    return [{ source: "/prices", destination: "/end-of-tenancy-price-calculator#calculator", permanent: false }];
  },
};

export default nextConfig;
