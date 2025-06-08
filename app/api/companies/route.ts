import { NextRequest, NextResponse } from 'next/server'
import { companyService } from '@/app/services/services'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const industry = searchParams.get('industry')
    const stage = searchParams.get('stage')
    const limit = searchParams.get('limit')
    const offset = searchParams.get('offset')
    const search = searchParams.get('search')

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

    const companies = await companyService.getCompanies({
      industry: industry || undefined,
      stage: stage as any || undefined,
      limit: limit ? parseInt(limit) : undefined,
      offset: offset ? parseInt(offset) : undefined,
    })

    return NextResponse.json({
      success: true,
      data: companies
    })

  } catch (error) {
    console.error('Companies API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch companies' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const company = await companyService.createCompany(data)
    
    return NextResponse.json({
      success: true,
      data: company,
      message: 'Company created successfully'
    })

  } catch (error) {
    console.error('Company creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create company' },
      { status: 500 }
    )
  }
}