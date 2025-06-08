import { NextRequest, NextResponse } from 'next/server'
import { companyService } from '@/app/services/companyService'

// Mark this route as static
export const dynamic = 'force-static'

// Mock data for static export
const MOCK_COMPANIES = [
  {
    id: '1',
    name: 'Acme Inc',
    description: 'Leading provider of innovative solutions',
    industry: 'Technology',
    stage: 'Series A',
    logo: '/logos/acme.png',
    website: 'https://acme.example.com',
    foundedYear: 2015,
    employees: '11-50',
    location: 'San Francisco, CA',
    tags: ['SaaS', 'AI', 'Cloud'],
    createdAt: '2023-01-15T10:30:00Z',
    updatedAt: '2023-06-20T14:45:00Z'
  },
  {
    id: '2',
    name: 'Globex Corp',
    description: 'Global enterprise solutions',
    industry: 'Enterprise',
    stage: 'Series B',
    logo: '/logos/globex.png',
    website: 'https://globex.example.com',
    foundedYear: 2012,
    employees: '51-200',
    location: 'New York, NY',
    tags: ['B2B', 'Enterprise', 'SaaS'],
    createdAt: '2022-11-10T09:15:00Z',
    updatedAt: '2023-05-05T16:20:00Z'
  },
  {
    id: '3',
    name: 'Initech',
    description: 'Office productivity tools',
    industry: 'Productivity',
    stage: 'Seed',
    logo: '/logos/initech.png',
    website: 'https://initech.example.com',
    foundedYear: 2020,
    employees: '1-10',
    location: 'Austin, TX',
    tags: ['Productivity', 'Remote Work'],
    createdAt: '2023-03-01T11:20:00Z',
    updatedAt: '2023-07-10T13:10:00Z'
  }
]

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // In static export mode or when not in server context, use mock data
    if (process.env.NEXT_PHASE === 'phase-export' || typeof window === 'undefined') {
      const company = MOCK_COMPANIES.find(c => c.id === params.id)
      
      if (!company) {
        return NextResponse.json(
          { error: 'Company not found' },
          { status: 404 }
        )
      }
      
      return NextResponse.json({
        success: true,
        data: company
      })
    }

    // In normal mode, use the real service
    const company = await companyService.getCompanyById(params.id)
    
    if (!company) {
      return NextResponse.json(
        { error: 'Company not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: company
    })

  } catch (error) {
    console.error('Company fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch company' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // In static export mode, return a mock response
    if (process.env.NEXT_PHASE === 'phase-export') {
      const data = await request.json()
      const mockCompany = MOCK_COMPANIES.find(c => c.id === params.id) || {
        id: params.id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      const updatedCompany = {
        ...mockCompany,
        ...data,
        updatedAt: new Date().toISOString()
      }
      
      return NextResponse.json({
        success: true,
        data: updatedCompany,
        message: 'Company updated successfully (mocked)'
      })
    }

    // In normal mode, use the real service
    const data = await request.json()
    const company = await companyService.updateCompany(params.id, data)
    
    return NextResponse.json({
      success: true,
      data: company,
      message: 'Company updated successfully'
    })
  } catch (error) {
    console.error('Error updating company:', error)
    return NextResponse.json(
      { error: 'Failed to update company' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // In static export mode, return a success response
    if (process.env.NEXT_PHASE === 'phase-export') {
      return NextResponse.json({
        success: true,
        message: 'Company deleted successfully (mocked)'
      })
    }

    // In normal mode, use the real service
    await companyService.deleteCompany(params.id)
    
    return NextResponse.json({
      success: true,
      message: 'Company deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting company:', error)
    return NextResponse.json(
      { error: 'Failed to delete company' },
      { status: 500 }
    )
  }
}