/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "*.trusted-domain.com",
      },
      {
        protocol: "https",
        hostname: "www.kindpng.com",
      },
    ],
  },
};

module.exports = nextConfig;
