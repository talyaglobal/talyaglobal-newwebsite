import { NextResponse } from 'next/server'
import { companyService } from '@/app/services/companyService'

// Mark this route as static
export const dynamic = 'force-static'

// Mock types for static export
interface Company {
  id: string;
  name: string;
  industry: string;
  stage: string;
  employees: string;
  geography: string;
  revenue: string;
  profitMargin: string;
  growthRate: string;
  funding: string;
  revenueModel: string;
  digitalLevel: string;
  recurringRevenue: string;
  competitiveAdvantages: string[];
  marketPosition: string;
  businessGoals: string[];
  biggestChallenge: string;
  investmentTimeline: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  jobTitle: string;
  companyId: string;
  consent: boolean;
  createdAt: string;
  updatedAt: string;
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.companyName || !data.industry || !data.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create company record
    const companyData = {
      name: data.companyName,
      industry: data.industry,
      stage: 'growth', // Default stage
      employees: data.employees || '1-10',
      geography: 'national', // Default
      revenue: data.annualRevenue?.toString() || '0-100k',
      profitMargin: data.netProfit ? ((data.netProfit / data.annualRevenue) * 100).toString() : '0-5',
      growthRate: data.revenueGrowth?.toString() || '0-10',
      funding: 'self-funded', // Default
      revenueModel: 'one-time', // Default
      digitalLevel: data.hasDigitalPresence ? 'intermediate' : 'basic',
      recurringRevenue: data.hasRecurringRevenue ? '25-50' : '0-25',
      competitiveAdvantages: data.mainChallenges || [],
      marketPosition: 'emerging', // Default
      businessGoals: data.futureGoals || [],
      biggestChallenge: data.mainChallenges?.[0] || 'growth',
      investmentTimeline: '6-12 months', // Default
      description: `${data.companyName} is a company in the ${data.industry} industry with ${data.employees} employees.`
    }

    // Use mock service for static export
    const company = await companyService.createCompany(companyData)

    // For static export, we'll return a mock success response
    return NextResponse.json({
      success: true,
      data: {
        assessmentId: 'mock-assessment-id',
        companyId: company.id,
        score: 75, // Mock score
        recommendations: [
          {
            id: 'rec-1',
            title: 'Enhance Digital Presence',
            priority: 'high',
            impact: 'high',
            effort: 'medium',
            description: 'Improve your website and social media presence to reach more customers.'
          },
          {
            id: 'rec-2',
            title: 'Optimize Operations',
            priority: 'medium',
            impact: 'high',
            effort: 'high',
            description: 'Streamline internal processes to improve efficiency.'
          }
        ]
      }
    })
  } catch (error) {
    console.error('Assessment submission error:', error)
    return NextResponse.json(
      { error: 'Failed to process assessment' },
      { status: 500 }
    )
  }
}

// Simple GET endpoint for static export compatibility
export async function GET() {
  // Return mock assessment data in static export mode
  const mockAssessment = {
    id: 'mock-assessment-1',
    companyId: '1',
    score: 75,
    recommendations: [
      'Optimize digital marketing strategy',
      'Improve customer acquisition cost',
      'Enhance customer retention programs'
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  
  return NextResponse.json({
    success: true,
    data: mockAssessment,
    message: 'Assessment data (mocked)',
    staticExport: true
  })
}