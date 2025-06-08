import { db } from '@/lib/database'
import { Company, Contact, Assessment, Recommendation, RiskAssessment } from '@/lib/types'
import { apiIntegration } from '@/lib/integrations'

// Company service following TalyaGlobal standards
export class CompanyService {
  async createCompany(data: Omit<Company, 'id' | 'createdAt' | 'updatedAt'>): Promise<Company> {
    try {
      return await db.create<Company>('companies', data)
    } catch (error) {
      console.error('Error creating company:', error)
      throw new Error('Failed to create company')
    }
  }

  async getCompanyById(id: string): Promise<Company | null> {
    try {
      return await db.findById<Company>('companies', id)
    } catch (error) {
      console.error('Error fetching company:', error)
      throw new Error('Failed to fetch company')
    }
  }

  async getCompanies(options?: {
    industry?: string
    stage?: string
    limit?: number
    offset?: number
  }): Promise<Company[]> {
    try {
      const where: Record<string, any> = {}
      
      if (options?.industry) {
        where.industry = options.industry
      }
      
      if (options?.stage) {
        where.stage = options.stage
      }

      return await db.findMany<Company>('companies', {
        where,
        orderBy: 'created_at.desc',
        limit: options?.limit,
        offset: options?.offset,
      })
    } catch (error) {
      console.error('Error fetching companies:', error)
      throw new Error('Failed to fetch companies')
    }
  }

  async updateCompany(id: string, data: Partial<Company>): Promise<Company> {
    try {
      return await db.update<Company>('companies', id, data)
    } catch (error) {
      console.error('Error updating company:', error)
      throw new Error('Failed to update company')
    }
  }

  async deleteCompany(id: string): Promise<void> {
    try {
      await db.delete('companies', id)
    } catch (error) {
      console.error('Error deleting company:', error)
      throw new Error('Failed to delete company')
    }
  }

  async searchCompanies(searchTerm: string, limit: number = 10): Promise<Company[]> {
    try {
      return await db.search<Company>(
        'companies',
        searchTerm,
        ['name', 'industry', 'description'],
        { limit }
      )
    } catch (error) {
      console.error('Error searching companies:', error)
      throw new Error('Failed to search companies')
    }
  }
}

// Contact service
export class ContactService {
  async createContact(data: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>): Promise<Contact> {
    try {
      return await db.create<Contact>('contacts', data)
    } catch (error) {
      console.error('Error creating contact:', error)
      throw new Error('Failed to create contact')
    }
  }

  async getContactById(id: string): Promise<Contact | null> {
    try {
      return await db.findById<Contact>('contacts', id)
    } catch (error) {
      console.error('Error fetching contact:', error)
      throw new Error('Failed to fetch contact')
    }
  }

  async getContactByEmail(email: string): Promise<Contact | null> {
    try {
      const contacts = await db.findMany<Contact>('contacts', {
        where: { email },
        limit: 1,
      })
      return contacts.length > 0 ? contacts[0] : null
    } catch (error) {
      console.error('Error fetching contact by email:', error)
      throw new Error('Failed to fetch contact')
    }
  }

  async getContactsByCompany(companyId: string): Promise<Contact[]> {
    try {
      return await db.findMany<Contact>('contacts', {
        where: { company_id: companyId },
        orderBy: 'created_at.desc',
      })
    } catch (error) {
      console.error('Error fetching contacts by company:', error)
      throw new Error('Failed to fetch contacts')
    }
  }

  async updateContact(id: string, data: Partial<Contact>): Promise<Contact> {
    try {
      return await db.update<Contact>('contacts', id, data)
    } catch (error) {
      console.error('Error updating contact:', error)
      throw new Error('Failed to update contact')
    }
  }
}

// Assessment service with AI integration
export class AssessmentService {
  async createAssessment(data: Omit<Assessment, 'id' | 'createdAt' | 'updatedAt'>): Promise<Assessment> {
    try {
      return await db.create<Assessment>('assessments', data)
    } catch (error) {
      console.error('Error creating assessment:', error)
      throw new Error('Failed to create assessment')
    }
  }

  async getAssessmentById(id: string): Promise<Assessment | null> {
    try {
      return await db.findById<Assessment>('assessments', id)
    } catch (error) {
      console.error('Error fetching assessment:', error)
      throw new Error('Failed to fetch assessment')
    }
  }

  async getAssessmentsByCompany(companyId: string): Promise<Assessment[]> {
    try {
      return await db.findMany<Assessment>('assessments', {
        where: { company_id: companyId },
        orderBy: 'created_at.desc',
      })
    } catch (error) {
      console.error('Error fetching assessments by company:', error)
      throw new Error('Failed to fetch assessments')
    }
  }

  async updateAssessment(id: string, data: Partial<Assessment>): Promise<Assessment> {
    try {
      return await db.update<Assessment>('assessments', id, data)
    } catch (error) {
      console.error('Error updating assessment:', error)
      throw new Error('Failed to update assessment')
    }
  }

  // Enhanced AI Assessment calculation with real AI integration
  async calculateAssessment(companyData: Company): Promise<Omit<Assessment, 'id' | 'companyId' | 'contactId' | 'createdAt' | 'updatedAt'>> {
    try {
      // Try AI-enhanced assessment first
      let aiResults = null
      try {
        aiResults = await apiIntegration.generateBusinessInsights({
          name: companyData.name,
          industry: companyData.industry,
          revenue: companyData.revenue,
          employees: companyData.employees,
          description: companyData.description || `${companyData.name} is a ${companyData.stage} company in the ${companyData.industry} industry.`
        })
      } catch (error) {
        console.warn('AI assessment failed, using traditional calculation:', error)
      }

      // Calculate traditional assessment
      const traditionalResults = this.calculateTraditionalAssessment(companyData)

      // Merge AI and traditional results
      const currentValuation = aiResults?.valuation || traditionalResults.currentValuation
      const hiddenValue = aiResults?.hiddenValue || traditionalResults.hiddenValue
      const fiveYearProjection = traditionalResults.fiveYearProjection
      const competitiveScore = traditionalResults.competitiveScore

      // Enhanced recommendations combining AI and traditional
      const recommendations = this.mergeRecommendations(
        traditionalResults.recommendations,
        aiResults?.recommendations || []
      )

      // Enhanced risk assessment
      const riskAssessment = this.mergeRiskAssessment(
        traditionalResults.riskAssessment,
        aiResults?.riskFactors || []
      )

      return {
        currentValuation,
        hiddenValue,
        fiveYearProjection,
        competitiveScore,
        recommendations,
        riskAssessment,
        status: 'completed',
      }
    } catch (error) {
      console.error('Error calculating assessment:', error)
      throw new Error('Failed to calculate assessment')
    }
  }

  private calculateTraditionalAssessment(companyData: Company) {
    // Industry multipliers
    const industryMultipliers: Record<string, number> = {
      'technology': 8.5,
      'healthcare': 7.2,
      'fintech': 9.1,
      'ecommerce': 6.8,
      'manufacturing': 4.5,
      'energy': 6.2,
      'food': 3.8,
      'real-estate': 5.5,
      'education': 4.2,
      'other': 5.0,
    }

    // Stage multipliers
    const stageMultipliers: Record<string, number> = {
      'startup': 1.2,
      'growth': 1.8,
      'established': 1.5,
      'mature': 1.0,
    }

    // Revenue parsing
    const revenueValue = this.parseRevenueRange(companyData.revenue)
    const industryMultiplier = industryMultipliers[companyData.industry] || 5.0
    const stageMultiplier = stageMultipliers[companyData.stage] || 1.0

    // Calculate current valuation
    const currentValuation = revenueValue * industryMultiplier * stageMultiplier

    // Calculate hidden value opportunities
    const hiddenValue = this.calculateHiddenValue(companyData, currentValuation)

    // Calculate 5-year projection
    const growthRate = this.parseGrowthRate(companyData.growthRate)
    const fiveYearProjection = currentValuation * Math.pow(1 + (growthRate / 100), 5)

    // Calculate competitive score
    const competitiveScore = this.calculateCompetitiveScore(companyData)

    // Generate recommendations
    const recommendations = this.generateRecommendations(companyData, currentValuation)

    // Generate risk assessment
    const riskAssessment = this.generateRiskAssessment(companyData)

    return {
      currentValuation,
      hiddenValue,
      fiveYearProjection,
      competitiveScore,
      recommendations,
      riskAssessment,
    }
  }

  private mergeRecommendations(traditional: Recommendation[], aiRecommendations: string[]): Recommendation[] {
    const merged = [...traditional]

    // Add AI recommendations as additional recommendations
    aiRecommendations.forEach((aiRec, index) => {
      merged.push({
        id: `ai-rec-${index}`,
        title: `AI Insight: ${aiRec.substring(0, 50)}...`,
        description: aiRec,
        category: 'immediate',
        impact: 'medium',
        effort: 'medium',
        estimatedValue: 0,
      })
    })

    return merged
  }

  private mergeRiskAssessment(traditional: RiskAssessment, aiRiskFactors: string[]): RiskAssessment {
    const mergedFactors = [...traditional.factors]

    // Add AI risk factors
    aiRiskFactors.forEach((aiRisk) => {
      mergedFactors.push({
        category: 'AI Analysis',
        level: 'medium',
        description: aiRisk,
        mitigation: 'Consult with TalyaGlobal experts for detailed mitigation strategy',
      })
    })

    return {
      overall: traditional.overall,
      factors: mergedFactors,
    }
  }

  private parseRevenueRange(revenue: string): number {
    const ranges: Record<string, number> = {
      '0-100k': 50000,
      '100k-500k': 300000,
      '500k-1m': 750000,
      '1m-5m': 3000000,
      '5m-10m': 7500000,
      '10m-50m': 30000000,
      '50m+': 75000000,
    }
    return ranges[revenue] || 1000000
  }

  private parseGrowthRate(growthRate: string): number {
    const rates: Record<string, number> = {
      'negative': -5,
      '0-10': 5,
      '10-25': 17.5,
      '25-50': 37.5,
      '50-100': 75,
      '100+': 150,
    }
    return rates[growthRate] || 10
  }

  private calculateHiddenValue(company: Company, currentValuation: number): number {
    let hiddenValue = 0

    // AI automation potential
    if (company.digitalLevel === 'basic' || company.digitalLevel === 'intermediate') {
      hiddenValue += currentValuation * 0.15 // 15% improvement potential
    }

    // Market expansion potential
    if (company.geography === 'local' || company.geography === 'national') {
      hiddenValue += currentValuation * 0.12 // 12% expansion potential
    }

    // Recurring revenue optimization
    const recurringPercentage = this.parseRecurringRevenue(company.recurringRevenue)
    if (recurringPercentage < 50) {
      hiddenValue += currentValuation * 0.08 // 8% recurring revenue potential
    }

    return Math.round(hiddenValue)
  }

  private parseRecurringRevenue(recurringRevenue: string): number {
    const percentages: Record<string, number> = {
      '0-25': 12.5,
      '25-50': 37.5,
      '50-75': 62.5,
      '75-100': 87.5,
    }
    return percentages[recurringRevenue] || 25
  }

  private calculateCompetitiveScore(company: Company): number {
    let score = 50 // Base score

    // Industry bonus
    const techIndustries = ['technology', 'fintech', 'healthcare']
    if (techIndustries.includes(company.industry)) {
      score += 10
    }

    // Digital level bonus
    const digitalBonuses: Record<string, number> = {
      'basic': 0,
      'intermediate': 10,
      'advanced': 20,
      'cutting-edge': 30,
    }
    score += digitalBonuses[company.digitalLevel] || 0

    // Competitive advantages bonus
    score += Math.min(company.competitiveAdvantages.length * 5, 25)

    // Growth rate bonus
    const growthRate = this.parseGrowthRate(company.growthRate)
    if (growthRate > 25) score += 15
    else if (growthRate > 10) score += 10
    else if (growthRate > 0) score += 5

    return Math.min(Math.max(score, 0), 100)
  }

  private generateRecommendations(company: Company, valuation: number): Recommendation[] {
    const recommendations: Recommendation[] = []

    // AI automation recommendation
    if (company.digitalLevel === 'basic' || company.digitalLevel === 'intermediate') {
      recommendations.push({
        id: 'ai-automation',
        title: 'Implement AI-Powered Automation',
        description: 'Leverage TalyaGlobal\'s AI platform to automate key business processes and increase efficiency by 25%',
        category: 'immediate',
        impact: 'high',
        effort: 'medium',
        estimatedValue: valuation * 0.15,
      })
    }

    // Market expansion recommendation
    if (company.geography === 'local' || company.geography === 'national') {
      recommendations.push({
        id: 'market-expansion',
        title: 'Geographic Market Expansion',
        description: 'Expand to 2 new geographic markets with proven demand and distribution channels',
        category: 'long-term',
        impact: 'high',
        effort: 'high',
        estimatedValue: valuation * 0.12,
      })
    }

    // Pricing optimization
    recommendations.push({
      id: 'pricing-optimization',
      title: 'AI-Powered Pricing Strategy',
      description: 'Optimize pricing strategy using market analysis and AI algorithms to increase margins by 15%',
      category: 'immediate',
      impact: 'medium',
      effort: 'low',
      estimatedValue: valuation * 0.08,
    })

    return recommendations
  }

  private generateRiskAssessment(company: Company): RiskAssessment {
    const factors = []

    // Market risk
    if (company.marketPosition === 'emerging' || company.marketPosition === 'niche') {
      factors.push({
        category: 'Market Position',
        level: 'medium' as const,
        description: 'Limited market presence may affect growth potential',
        mitigation: 'Develop strategic partnerships and increase marketing investment',
      })
    }

    // Technology risk
    if (company.digitalLevel === 'basic') {
      factors.push({
        category: 'Technology',
        level: 'high' as const,
        description: 'Low digital maturity creates competitive disadvantage',
        mitigation: 'Implement digital transformation roadmap with TalyaGlobal\'s AI platform',
      })
    }

    // Financial risk
    const growthRate = this.parseGrowthRate(company.growthRate)
    if (growthRate < 0) {
      factors.push({
        category: 'Financial Performance',
        level: 'high' as const,
        description: 'Negative growth indicates operational challenges',
        mitigation: 'Conduct comprehensive operational review and cost optimization',
      })
    }

    // Determine overall risk level
    const highRiskFactors = factors.filter(f => f.level === 'high').length
    const mediumRiskFactors = factors.filter(f => f.level === 'medium').length
    
    let overall: 'low' | 'medium' | 'high' = 'low'
    if (highRiskFactors > 0) overall = 'high'
    else if (mediumRiskFactors > 1) overall = 'medium'

    return {
      overall,
      factors,
    }
  }
}

// Export service instances
export const companyService = new CompanyService()
export const contactService = new ContactService()
export const assessmentService = new AssessmentService()