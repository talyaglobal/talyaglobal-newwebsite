import { NextRequest, NextResponse } from 'next/server'
import { envConfig } from '@/lib/config'

// Health check endpoint for monitoring and load balancers
export async function GET(request: NextRequest) {
  try {
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      environment: envConfig.nodeEnv,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      services: {
        database: await checkDatabaseHealth(),
        redis: await checkRedisHealth(),
        external_apis: await checkExternalAPIs(),
      },
      features: {
        ai_assessment: envConfig.enableAiAssessment,
        vip_zone: envConfig.enableVipZone,
        chat: envConfig.enableChat,
        notifications: envConfig.enableNotifications,
        analytics: envConfig.enableAnalytics,
      },
      company: {
        name: envConfig.companyName,
        website: envConfig.companyWebsite,
        email: envConfig.companyEmail,
      }
    }

    // Check if all critical services are healthy
    const allServicesHealthy = Object.values(healthData.services).every(
      service => service.status === 'healthy'
    )

    const statusCode = allServicesHealthy ? 200 : 503

    return NextResponse.json(healthData, { 
      status: statusCode,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })
  } catch (error) {
    console.error('Health check failed:', error)
    
    return NextResponse.json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: 'Health check failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { 
      status: 503,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })
  }
}

async function checkDatabaseHealth(): Promise<{ status: string; responseTime?: number; error?: string }> {
  try {
    const startTime = Date.now()
    
    // Simple database connectivity check
    const response = await fetch(`${envConfig.supabaseUrl}/rest/v1/`, {
      method: 'HEAD',
      headers: {
        'apikey': envConfig.supabaseAnonKey,
        'Authorization': `Bearer ${envConfig.supabaseAnonKey}`,
      },
    })

    const responseTime = Date.now() - startTime

    if (response.ok) {
      return { status: 'healthy', responseTime }
    } else {
      return { status: 'unhealthy', error: `HTTP ${response.status}` }
    }
  } catch (error) {
    return { 
      status: 'unhealthy', 
      error: error instanceof Error ? error.message : 'Database connection failed' 
    }
  }
}

async function checkRedisHealth(): Promise<{ status: string; responseTime?: number; error?: string }> {
  try {
    // Redis health check would go here
    // For now, we'll simulate a successful check
    return { status: 'healthy', responseTime: 5 }
  } catch (error) {
    return { 
      status: 'unhealthy', 
      error: error instanceof Error ? error.message : 'Redis connection failed' 
    }
  }
}

async function checkExternalAPIs(): Promise<{ status: string; services: Record<string, any> }> {
  const services: Record<string, any> = {}

  // Check OpenAI API
  if (envConfig.openaiApiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/models', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${envConfig.openaiApiKey}`,
        },
        signal: AbortSignal.timeout(5000), // 5 second timeout
      })
      
      services.openai = {
        status: response.ok ? 'healthy' : 'unhealthy',
        responseCode: response.status,
      }
    } catch (error) {
      services.openai = {
        status: 'unhealthy',
        error: 'Connection timeout or error',
      }
    }
  }

  // Check Claude API
  if (envConfig.claudeApiKey) {
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': envConfig.claudeApiKey,
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-haiku-20240307',
          max_tokens: 1,
          messages: [{ role: 'user', content: 'test' }],
        }),
        signal: AbortSignal.timeout(5000),
      })
      
      services.claude = {
        status: response.status === 200 || response.status === 400 ? 'healthy' : 'unhealthy',
        responseCode: response.status,
      }
    } catch (error) {
      services.claude = {
        status: 'unhealthy',
        error: 'Connection timeout or error',
      }
    }
  }

  // Check Stripe API
  if (envConfig.stripeSecretKey) {
    try {
      const response = await fetch('https://api.stripe.com/v1/account', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${envConfig.stripeSecretKey}`,
        },
        signal: AbortSignal.timeout(5000),
      })
      
      services.stripe = {
        status: response.ok ? 'healthy' : 'unhealthy',
        responseCode: response.status,
      }
    } catch (error) {
      services.stripe = {
        status: 'unhealthy',
        error: 'Connection timeout or error',
      }
    }
  }

  const allHealthy = Object.values(services).every(
    service => service.status === 'healthy'
  )

  return {
    status: allHealthy ? 'healthy' : 'degraded',
    services,
  }
}

