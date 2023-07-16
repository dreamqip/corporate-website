/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
      },
      {
        hostname: 'drive.google.com',
        protocol: 'https',
      }
    ],
  },
};

module.exports = nextConfig;
