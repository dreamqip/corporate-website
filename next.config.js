/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
      },
      {
        hostname: 's3.us-west-2.amazonaws.com',
        protocol: 'https',
      }
    ],
  },
};

module.exports = nextConfig;
