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
    enableAiAssessment: process.env.NEXT_PUBLIC_ENABLE_AI_ASSESSMENT === 'true',
    enableVipZone: process.env.NEXT_PUBLIC_ENABLE_VIP_ZONE === 'true',
    enableChat: process.env.NEXT_PUBLIC_ENABLE_CHAT === 'true',
  },
  
  // Default settings
  defaults: {
    theme: 'light',
    locale: 'en-US',
  },

  // Environment configuration
  env: {
    nodeEnv: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
  },
} as const;

// Export as envConfig for backward compatibility
export const envConfig = {
  nodeEnv: config.env.nodeEnv,
  enableAiAssessment: config.features.enableAiAssessment,
  enableVipZone: config.features.enableVipZone,
  enableChat: config.features.enableChat,
};

export default config;
