import { NextRequest, NextResponse } from 'next/server'
import { assessmentService, companyService, contactService } from '@/app/services/services'
import { apiIntegration } from '@/lib/integrations'
import { Company, Contact } from '@/lib/types'

export async function POST(request: NextRequest) {
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
    const companyData: Omit<Company, 'id' | 'createdAt' | 'updatedAt'> = {
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

    const company = await companyService.createCompany(companyData)

    // Create contact record
    const contactData: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'> = {
      firstName: data.contactName?.split(' ')[0] || 'Unknown',
      lastName: data.contactName?.split(' ').slice(1).join(' ') || '',
      email: data.email,
      phone: data.phone,
      jobTitle: 'Owner', // Default
      companyId: company.id,
      consent: true
    }

    const contact = await contactService.createContact(contactData)

    // Calculate assessment
    const assessmentData = await assessmentService.calculateAssessment(company)
    
    // Create assessment record
    const assessment = await assessmentService.createAssessment({
      ...assessmentData,
      companyId: company.id,
      contactId: contact.id
    })

    // Send email notification
    try {
      await apiIntegration.email.sendAssessmentResults(
        contact.email,
        company.name,
        assessment
      )
    } catch (emailError) {
      console.warn('Failed to send assessment email:', emailError)
      // Don't fail the entire request if email fails
    }

    return NextResponse.json({
      success: true,
      data: {
        assessment,
        company,
        contact
      },
      message: 'Assessment completed successfully'
    })

  } catch (error) {
    console.error('Assessment API error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process assessment',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const companyId = searchParams.get('companyId')
    const contactEmail = searchParams.get('email')

    if (companyId) {
      const assessments = await assessmentService.getAssessmentsByCompany(companyId)
      return NextResponse.json({
        success: true,
        data: assessments
      })
    }

    if (contactEmail) {
      const contact = await contactService.getContactByEmail(contactEmail)
      if (contact) {
        const assessments = await assessmentService.getAssessmentsByCompany(contact.companyId)
        return NextResponse.json({
          success: true,
          data: assessments
        })
      }
    }

    return NextResponse.json(
      { error: 'Missing required parameters' },
      { status: 400 }
    )

  } catch (error) {
    console.error('Assessment GET API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch assessments' },
      { status: 500 }
    )
  }
}