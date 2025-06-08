/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Strict Mode for highlighting potential problems
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    domains: [
      'images.unsplash.com',
      'tailwindui.com',
      'images.ctfassets.net',
      'via.placeholder.com',
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: process.env.NODE_ENV === 'production', // Optimize images in production
  },

  // Enable static exports for static site generation
  output: 'export',
  
  // Add a trailing slash for static exports
  trailingSlash: true,
  
  // Configure the build output directory
  distDir: '.next',
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Configure path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname + '/src',
    };

    // Important: return the modified config
    return config;
  },

  // Environment variables that should be available to the client
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://talyaglobal.com',
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  },

  // TypeScript configuration
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  // ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // Enable source maps in production
  productionBrowserSourceMaps: false,

  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],

  // Configure build ID
  generateBuildId: async () => {
    return process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'dev';
  },
};

// Conditionally add PWA support in production
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

module.exports = process.env.NODE_ENV === 'development' ? nextConfig : withPWA(nextConfig);
