// Environment configuration utility with validation
import { z } from 'zod'

// Environment schema for validation
const envSchema = z.object({
  // Node environment
  nodeEnv: z.enum(['development', 'production', 'test']).default('development'),
  
  // App configuration
  appName: z.string().default('tsmart-platform'),
  appUrl: z.string().url().default('https://app.tsmart.ai'),
  apiUrl: z.string().url().default('https://api.tsmart.ai'),
  
  // Company information
  companyName: z.string().default('Talya Smart'),
  companyWebsite: z.string().url().default('https://www.tsmart.ai'),
  companyEmail: z.string().email().default('info@tsmart.ai'),
  companyAddress: z.string().default('17-09 Zink Pl UNIT 4, Fair Lawn, NJ 07410, United States'),
  companyLinkedin: z.string().url().default('https://www.linkedin.com/company/talya-smart'),
  companyYoutube: z.string().url().default('https://www.youtube.com/@TalyaSmart'),
  
  // Database configuration
  supabaseUrl: z.string().url().default('https://hkxsicsvsdtrmtqbspdc.supabase.co'),
  supabaseAnonKey: z.string().default('your_supabase_anon_key'),
  supabaseServiceRoleKey: z.string().default('your_supabase_service_role_key'),
  
  // Security
  jwtSecret: z.string().default('tsmart_secure_jwt_secret_key_2025_production'),
  encryptionKey: z.string().default('tsmart_32_char_encryption_key_2025'),
  
  // External APIs
  openaiApiKey: z.string().optional(),
  claudeApiKey: z.string().optional(),
  
  // Email configuration
  gmailUser: z.string().email().optional(),
  gmailAppPassword: z.string().optional(),
  
  // SMS/WhatsApp
  twilioAccountSid: z.string().optional(),
  twilioAuthToken: z.string().optional(),
  
  // Payment processing
  stripePublishableKey: z.string().optional(),
  stripeSecretKey: z.string().optional(),
  
  // Feature flags
  enableAnalytics: z.boolean().default(true),
  enableChat: z.boolean().default(true),
  enableNotifications: z.boolean().default(true),
  enableAiAssessment: z.boolean().default(true),
  enableVipZone: z.boolean().default(true),
})

// Parse and validate environment variables
function parseEnv() {
  const env = {
    nodeEnv: process.env.NODE_ENV,
    appName: process.env.APP_NAME,
    appUrl: process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL,
    apiUrl: process.env.API_URL,
    
    companyName: process.env.COMPANY_NAME,
    companyWebsite: process.env.COMPANY_WEBSITE,
    companyEmail: process.env.COMPANY_EMAIL,
    companyAddress: process.env.COMPANY_ADDRESS,
    companyLinkedin: process.env.COMPANY_LINKEDIN,
    companyYoutube: process.env.COMPANY_YOUTUBE,
    
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    
    jwtSecret: process.env.JWT_SECRET,
    encryptionKey: process.env.ENCRYPTION_KEY,
    
    openaiApiKey: process.env.OPENAI_API_KEY,
    claudeApiKey: process.env.CLAUDE_API_KEY,
    
    gmailUser: process.env.GMAIL_USER,
    gmailAppPassword: process.env.GMAIL_APP_PASSWORD,
    
    twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
    
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    enableChat: process.env.NEXT_PUBLIC_ENABLE_CHAT === 'true',
    enableNotifications: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS === 'true',
    enableAiAssessment: process.env.NEXT_PUBLIC_ENABLE_AI_ASSESSMENT === 'true',
    enableVipZone: process.env.NEXT_PUBLIC_ENABLE_VIP_ZONE === 'true',
  }

  try {
    return envSchema.parse(env)
  } catch (error) {
    console.error('Environment validation failed:', error)
    throw new Error('Invalid environment configuration')
  }
}

// Export validated configuration
export const envConfig = parseEnv()

// Company configuration for easy access
export const companyConfig = {
  name: envConfig.companyName,
  website: envConfig.companyWebsite,
  email: envConfig.companyEmail,
  address: envConfig.companyAddress,
  linkedin: envConfig.companyLinkedin,
  youtube: envConfig.companyYoutube,
} as const

// Feature flags for conditional rendering
export const featureFlags = {
  analytics: envConfig.enableAnalytics,
  chat: envConfig.enableChat,
  notifications: envConfig.enableNotifications,
  aiAssessment: envConfig.enableAiAssessment,
  vipZone: envConfig.enableVipZone,
} as const

// API configuration
export const apiConfig = {
  baseUrl: envConfig.apiUrl,
  supabase: {
    url: envConfig.supabaseUrl,
    anonKey: envConfig.supabaseAnonKey,
    serviceRoleKey: envConfig.supabaseServiceRoleKey,
  },
  openai: {
    apiKey: envConfig.openaiApiKey,
    model: 'gpt-4-turbo-preview',
  },
  claude: {
    apiKey: envConfig.claudeApiKey,
    model: 'claude-3-sonnet',
  },
  stripe: {
    publishableKey: envConfig.stripePublishableKey,
    secretKey: envConfig.stripeSecretKey,
  },
} as const

// Utility functions
export function isDevelopment() {
  return envConfig.nodeEnv === 'development'
}

export function isProduction() {
  return envConfig.nodeEnv === 'production'
}

export function getAppUrl() {
  return envConfig.appUrl
}

export function getApiUrl() {
  return envConfig.apiUrl
}

