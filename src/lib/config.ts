// Application configuration
export const config = {
  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.talyaglobal.com',
    timeout: 30000, // 30 seconds
  },
  
  // Feature flags
  features: {
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    maintenanceMode: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true',
  },
  
  // Default settings
  defaults: {
    theme: 'light',
    locale: 'en-US',
  },
} as const;

export default config;
