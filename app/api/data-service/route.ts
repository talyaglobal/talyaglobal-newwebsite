import { NextResponse } from 'next/server'
import { envConfig } from '@/lib/config'

// Mark this route as static
export const dynamic = 'force-static'

// Simple data service endpoint for static exports
export async function GET() {
  try {
    // Return a simple health check response for static export
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      environment: envConfig.nodeEnv,
      staticExport: true,
      services: {
        database: { status: 'healthy', responseTime: 0 },
        redis: { status: 'healthy', responseTime: 0 },
        external_apis: {
          status: 'healthy',
          services: {
            email_service: { status: 'healthy', responseTime: 0 },
            storage_service: { status: 'healthy', responseTime: 0 }
          }
        }
      },
      features: {
        ai_assessment: envConfig.enableAiAssessment,
        vip_zone: envConfig.enableVipZone,
        chat: envConfig.enableChat
      }
    })
  } catch (error) {
    console.error('Data service error:', error)
    return NextResponse.json(
      { 
        status: 'error', 
        error: 'Data service failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
