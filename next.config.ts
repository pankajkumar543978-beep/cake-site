import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PROD_SITE_URL: process.env.NEXT_PROD_SITE_URL,
    NEXT_PROD_BUSINESS_NAME: process.env.NEXT_PROD_BUSINESS_NAME,
    NEXT_PROD_BUSINESS_PHONE: process.env.NEXT_PROD_BUSINESS_PHONE,
    NEXT_PROD_BUSINESS_PHONE_FORMATTED: process.env.NEXT_PROD_BUSINESS_PHONE_FORMATTED,
    NEXT_PROD_BUSINESS_EMAIL: process.env.NEXT_PROD_BUSINESS_EMAIL,
    NEXT_PROD_WHATSAPP_NUMBER: process.env.NEXT_PROD_WHATSAPP_NUMBER,
    NEXT_PROD_WHATSAPP_URL: process.env.NEXT_PROD_WHATSAPP_URL,
    NEXT_PROD_INSTAGRAM_HANDLE: process.env.NEXT_PROD_INSTAGRAM_HANDLE,
    NEXT_PROD_INSTAGRAM_URL: process.env.NEXT_PROD_INSTAGRAM_URL,
    NEXT_PROD_GOOGLE_MAPS_URL: process.env.NEXT_PROD_GOOGLE_MAPS_URL,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
