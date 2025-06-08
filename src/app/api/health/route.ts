import { NextResponse } from 'next/server';
import { config } from '@/lib/config';

export async function GET() {
  try {
    // Add health check logic here (e.g., database connection check)
    const status = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
    };
    
    return NextResponse.json(status);
  } catch (error) {
    return NextResponse.json(
      { status: 'error', error: 'Service unavailable' },
      { status: 503 }
    );
  }
}
