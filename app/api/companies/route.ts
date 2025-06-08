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
    tags: ['SaaS', 'AI', 'Cloud']
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
    tags: ['B2B', 'Enterprise', 'SaaS']
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
    tags: ['Productivity', 'Remote Work']
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const industry = searchParams.get('industry')
    const stage = searchParams.get('stage')
    const limit = searchParams.get('limit')
    const offset = searchParams.get('offset')
    const search = searchParams.get('search')

    // In static export mode or when not in server context, return mock data
    if (process.env.NEXT_PHASE === 'phase-export' || typeof window === 'undefined') {
      let filteredCompanies = [...MOCK_COMPANIES]
      
      if (search) {
        const searchLower = search.toLowerCase()
        filteredCompanies = filteredCompanies.filter(company => 
          company.name.toLowerCase().includes(searchLower) ||
          company.description.toLowerCase().includes(searchLower)
        )
      }
      
      if (industry) {
        filteredCompanies = filteredCompanies.filter(
          company => company.industry === industry
        )
      }
      
      if (stage) {
        filteredCompanies = filteredCompanies.filter(
          company => company.stage === stage
        )
      }
      
      const pageLimit = limit ? parseInt(limit) : 10
      const pageOffset = offset ? parseInt(offset) : 0
      const paginatedCompanies = filteredCompanies.slice(
        pageOffset,
        pageOffset + pageLimit
      )
      
      return NextResponse.json({
        success: true,
        data: paginatedCompanies,
        total: filteredCompanies.length,
        limit: pageLimit,
        offset: pageOffset
      })
    }

    // In normal mode, use the real service
    if (search) {
      const companies = await companyService.searchCompanies(
        search,
        limit ? parseInt(limit) : 10
      )
      return NextResponse.json({
        success: true,
        data: companies
      })
    }

    const companies = await companyService.getCompanies(
      { industry, stage },
      limit ? parseInt(limit) : 10,
      offset ? parseInt(offset) : 0
    )

    return NextResponse.json({
      success: true,
      ...companies
    })

  } catch (error) {
    console.error('Error fetching companies:', error)
    return NextResponse.json(
      { error: 'Failed to fetch companies' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // In static export mode, return a mock response
    if (process.env.NEXT_PHASE === 'phase-export') {
      const data = await request.json()
      const newCompany = {
        id: `mock-${Date.now()}`,
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      return NextResponse.json({
        success: true,
        data: newCompany,
        message: 'Company created successfully (mocked)'
      })
    }

    // In normal mode, use the real service
    const data = await request.json()
    const company = await companyService.createCompany(data)
    
    return NextResponse.json({
      success: true,
      data: company,
      message: 'Company created successfully'
    })
  } catch (error) {
    console.error('Error creating company:', error)
    return NextResponse.json(
      { error: 'Failed to create company' },
      { status: 500 }
    )
  }
}