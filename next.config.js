/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github-readme-stats.vercel.app'], // Allow GitHub Stats images to load
  },
};

module.exports = nextConfig;