import { NextRequest, NextResponse } from 'next/server'
import { envConfig } from '@/lib/config'

// Mark this route as static
export const dynamic = 'force-static'

// Simple health check endpoint for static exports
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: envConfig.nodeEnv,
    features: {
      ai_assessment: envConfig.enableAiAssessment,
      vip_zone: envConfig.enableVipZone,
      chat: envConfig.enableChat,
    },
    staticExport: true,
  })
}