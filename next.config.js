/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  // Enable static exports for static site generation
  output: 'export',
  // Add a trailing slash for static exports
  trailingSlash: true,
  // Configure the build output directory
  distDir: '.next',
  // Configure webpack for better module resolution
  webpack: (config, { isServer }) => {
    // Configure path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname + '/src',
    };
    return config;
  },
  // Disable TypeScript type checking during build (handled by CI/CD)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build (handled by CI/CD)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
