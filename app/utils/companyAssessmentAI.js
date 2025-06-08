import { apiIntegration } from '../../lib/integrations'

export class CompanyAssessmentAI {
  constructor() {
    this.industryBenchmarks = {
      technology: { avgMultiple: 8.5, growthRate: 25, profitMargin: 20 },
      healthcare: { avgMultiple: 7.2, growthRate: 15, profitMargin: 18 },
      fintech: { avgMultiple: 9.1, growthRate: 30, profitMargin: 22 },
      ecommerce: { avgMultiple: 6.8, growthRate: 20, profitMargin: 12 },
      manufacturing: { avgMultiple: 4.5, growthRate: 8, profitMargin: 15 },
      energy: { avgMultiple: 6.2, growthRate: 12, profitMargin: 25 },
      food: { avgMultiple: 3.8, growthRate: 6, profitMargin: 8 },
      'real-estate': { avgMultiple: 5.5, growthRate: 10, profitMargin: 30 },
      education: { avgMultiple: 4.2, growthRate: 5, profitMargin: 12 },
      other: { avgMultiple: 5.0, growthRate: 10, profitMargin: 15 }
    }
  }

  async assessCompany(data) {
    // Try to use AI services for enhanced assessment
    try {
      const aiResults = await apiIntegration.generateBusinessInsights({
        name: data.companyName || 'Company',
        industry: data.industry,
        revenue: data.annualRevenue?.toString() || '0',
        employees: data.employees?.toString() || '1',
        description: `Company in ${data.industry} with ${data.employees} employees and $${data.annualRevenue} revenue`
      })

      // Combine AI results with traditional assessment
      const traditionalResults = this.calculateTraditionalAssessment(data)
      
      return {
        ...traditionalResults,
        aiEnhanced: true,
        aiRecommendations: aiResults.recommendations || [],
        aiRiskFactors: aiResults.riskFactors || [],
        aiValuation: aiResults.valuation || traditionalResults.estimatedValuation,
        aiHiddenValue: aiResults.hiddenValue || traditionalResults.hiddenValue
      }
    } catch (error) {
      console.warn('AI assessment failed, using traditional method:', error)
      return this.calculateTraditionalAssessment(data)
    }
  }

  calculateTraditionalAssessment(data) {
    const industryData = this.industryBenchmarks[data.industry] || this.industryBenchmarks.technology
    
    // Calculate base score components
    const revenueScore = this.calculateRevenueScore(data.annualRevenue, industryData)
    const growthScore = this.calculateGrowthScore(data.revenueGrowth, industryData)
    const profitabilityScore = this.calculateProfitabilityScore(data.netProfit, data.annualRevenue, industryData)
    const digitalScore = this.calculateDigitalScore(data)
    const marketScore = this.calculateMarketScore(data)
    
    // Weight the scores
    const weights = {
      revenue: 0.25,
      growth: 0.25,
      profitability: 0.20,
      digital: 0.15,
      market: 0.15
    }
    
    const finalScore = (
      revenueScore * weights.revenue +
      growthScore * weights.growth +
      profitabilityScore * weights.profitability +
      digitalScore * weights.digital +
      marketScore * weights.market
    )
    
    // Calculate estimated valuation
    const revenueMultiple = industryData.avgMultiple * (finalScore / 100)
    const estimatedValuation = data.annualRevenue * revenueMultiple
    
    // Generate recommendations
    const recommendations = this.generateRecommendations(data, finalScore)
    
    // Calculate growth potential
    const growthPotential = this.calculateGrowthPotential(data, industryData)
    
    // Calculate hidden value
    const hiddenValue = estimatedValuation * 0.25 // 25% potential hidden value
    
    return {
      overallScore: Math.round(finalScore),
      estimatedValuation: Math.round(estimatedValuation),
      hiddenValue: Math.round(hiddenValue),
      growthPotential,
      recommendations,
      breakdown: {
        revenue: Math.round(revenueScore),
        growth: Math.round(growthScore),
        profitability: Math.round(profitabilityScore),
        digital: Math.round(digitalScore),
        market: Math.round(marketScore)
      },
      marketPosition: this.assessMarketPosition(data, finalScore),
      financialHealth: this.assessFinancialHealth(data),
      competitiveAdvantage: this.assessCompetitiveAdvantage(data),
      aiEnhanced: false
    }
  }

  calculateRevenueScore(revenue, industryData) {
    if (revenue >= 50000000) return 100
    if (revenue >= 10000000) return 90
    if (revenue >= 5000000) return 80
    if (revenue >= 1000000) return 70
    if (revenue >= 500000) return 60
    if (revenue >= 100000) return 50
    return 30
  }

  calculateGrowthScore(growthRate, industryData) {
    const numericGrowth = parseFloat(growthRate) || 0
    const industryAvg = industryData.growthRate
    
    if (numericGrowth >= industryAvg * 2) return 100
    if (numericGrowth >= industryAvg * 1.5) return 85
    if (numericGrowth >= industryAvg) return 70
    if (numericGrowth >= industryAvg * 0.5) return 55
    if (numericGrowth > 0) return 40
    return 20
  }

  calculateProfitabilityScore(netProfit, revenue, industryData) {
    if (!netProfit || !revenue) return 50
    
    const profitMargin = (netProfit / revenue) * 100
    const industryAvg = industryData.profitMargin
    
    if (profitMargin >= industryAvg * 1.5) return 100
    if (profitMargin >= industryAvg) return 80
    if (profitMargin >= industryAvg * 0.5) return 60
    if (profitMargin > 0) return 40
    return 20
  }

  calculateDigitalScore(data) {
    let score = 50
    
    if (data.hasDigitalPresence) score += 20
    if (data.hasInternationalOperations) score += 15
    if (data.hasRecurringRevenue) score += 15
    
    return Math.min(score, 100)
  }

  calculateMarketScore(data) {
    let score = 50
    
    // Industry growth potential
    const highGrowthIndustries = ['technology', 'healthcare', 'fintech', 'ecommerce']
    if (highGrowthIndustries.includes(data.industry)) {
      score += 20
    }
    
    // Years in business stability
    const years = parseInt(data.yearsInBusiness) || 0
    if (years >= 10) score += 15
    else if (years >= 5) score += 10
    else if (years >= 2) score += 5
    
    // Employee count (indicates scale)
    const employees = parseInt(data.employees) || 0
    if (employees >= 100) score += 15
    else if (employees >= 50) score += 10
    else if (employees >= 10) score += 5
    
    return Math.min(score, 100)
  }

  generateRecommendations(data, score) {
    const recommendations = []
    
    if (!data.hasDigitalPresence) {
      recommendations.push({
        category: 'Digital Transformation',
        priority: 'High',
        description: 'Establish strong digital presence with website, e-commerce, and digital marketing',
        impact: 'Increase valuation by 15-25%'
      })
    }
    
    if (!data.hasRecurringRevenue) {
      recommendations.push({
        category: 'Revenue Model',
        priority: 'High',
        description: 'Develop recurring revenue streams through subscriptions or service contracts',
        impact: 'Improve predictability and increase valuation multiple'
      })
    }
    
    if (score < 70) {
      recommendations.push({
        category: 'Operational Efficiency',
        priority: 'Medium',
        description: 'Implement AI-powered automation to reduce costs and improve margins',
        impact: 'Reduce operational costs by 20-30%'
      })
    }
    
    if (!data.hasInternationalOperations) {
      recommendations.push({
        category: 'Market Expansion',
        priority: 'Medium',
        description: 'Explore international market opportunities for revenue diversification',
        impact: 'Access to larger addressable market'
      })
    }
    
    return recommendations
  }

  calculateGrowthPotential(data, industryData) {
    const factors = []
    
    if (data.hasDigitalPresence) factors.push('Strong digital foundation')
    if (data.hasRecurringRevenue) factors.push('Predictable revenue model')
    if (data.hasInternationalOperations) factors.push('Global market access')
    
    const growthRate = parseFloat(data.revenueGrowth) || 0
    if (growthRate > industryData.growthRate) {
      factors.push('Above-industry growth rate')
    }
    
    return {
      level: factors.length >= 3 ? 'High' : factors.length >= 2 ? 'Medium' : 'Moderate',
      factors
    }
  }

  assessMarketPosition(data, score) {
    if (score >= 80) return 'Market Leader'
    if (score >= 65) return 'Strong Competitor'
    if (score >= 50) return 'Established Player'
    return 'Emerging Company'
  }

  assessFinancialHealth(data) {
    const profitMargin = data.netProfit / data.annualRevenue
    const growthRate = parseFloat(data.revenueGrowth) || 0
    
    if (profitMargin > 0.15 && growthRate > 15) return 'Excellent'
    if (profitMargin > 0.10 && growthRate > 10) return 'Good'
    if (profitMargin > 0.05 && growthRate > 5) return 'Fair'
    return 'Needs Improvement'
  }

  assessCompetitiveAdvantage(data) {
    const advantages = []
    
    if (data.hasDigitalPresence) advantages.push('Digital capabilities')
    if (data.hasRecurringRevenue) advantages.push('Predictable revenue')
    if (data.hasInternationalOperations) advantages.push('Global reach')
    
    const years = parseInt(data.yearsInBusiness) || 0
    if (years >= 10) advantages.push('Market experience')
    
    return {
      level: advantages.length >= 3 ? 'Strong' : advantages.length >= 2 ? 'Moderate' : 'Limited',
      factors: advantages
    }
  }
}