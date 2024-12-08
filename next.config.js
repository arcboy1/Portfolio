/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github-readme-stats.vercel.app',
          pathname: '/api/**',
        },
      ],
      dangerouslyAllowSVG: true, // Allow SVG images to be rendered
    },
  };
  
  module.exports = nextConfig;