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
      },
      {
        hostname: '*.cloudfront.net',
        protocol: 'https',
      },
      {
        hostname: 'res.cloudinary.com',
        protocol: 'https',
      },
      {
        hostname: 'firebasestorage.googleapis.com',
        protocol: 'https',
      },
      {
        hostname: 'cdn.sanity.io',
        protocol: 'https',
      }
    ],
  },
};

module.exports = nextConfig;
