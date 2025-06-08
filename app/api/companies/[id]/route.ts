import { NextRequest, NextResponse } from 'next/server'
import { companyService } from '@/app/services/services'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
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
    const data = await request.json()
    
    const company = await companyService.updateCompany(params.id, data)
    
    return NextResponse.json({
      success: true,
      data: company,
      message: 'Company updated successfully'
    })

  } catch (error) {
    console.error('Company update error:', error)
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
    await companyService.deleteCompany(params.id)
    
    return NextResponse.json({
      success: true,
      message: 'Company deleted successfully'
    })

  } catch (error) {
    console.error('Company deletion error:', error)
    return NextResponse.json(
      { error: 'Failed to delete company' },
      { status: 500 }
    )
  }
}