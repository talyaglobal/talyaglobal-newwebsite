/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Add any other domains you need for images
  },
  // Enable static exports for static site generation
  output: 'export',
  // Optional: Add a trailing slash for static exports
  trailingSlash: true,
  // Optional: Configure the build output directory (defaults to '.next')
  distDir: '.next',
  // Optional: Add environment variables that should be available at build time
  env: {
    // Add any build-time environment variables here
  },
  // Optional: Configure webpack
  webpack: (config) => {
    // Add any webpack configurations here if needed
    return config;
  },
};

module.exports = nextConfig;
