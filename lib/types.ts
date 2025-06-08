// TypeScript interfaces and types for TalyaGlobal platform
export interface Company {
  id: string
  name: string
  industry: string
  stage: 'startup' | 'growth' | 'established' | 'mature'
  employees: string
  geography: string
  revenue: string
  profitMargin: string
  growthRate: string
  funding: string
  revenueModel: string
  digitalLevel: string
  recurringRevenue: string
  competitiveAdvantages: string[]
  marketPosition: string
  businessGoals: string[]
  biggestChallenge: string
  investmentTimeline: string
  description?: string
  createdAt: Date
  updatedAt: Date
}

export interface Contact {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  jobTitle: string
  companyId: string
  referralSource?: string
  consent: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Assessment {
  id: string
  companyId: string
  contactId: string
  currentValuation: number
  hiddenValue: number
  fiveYearProjection: number
  competitiveScore: number
  recommendations: Recommendation[]
  riskAssessment: RiskAssessment
  status: 'pending' | 'completed' | 'reviewed'
  createdAt: Date
  updatedAt: Date
}

export interface Recommendation {
  id: string
  title: string
  description: string
  category: 'immediate' | 'short-term' | 'long-term'
  impact: 'low' | 'medium' | 'high'
  effort: 'low' | 'medium' | 'high'
  estimatedValue: number
}

export interface RiskAssessment {
  overall: 'low' | 'medium' | 'high'
  factors: RiskFactor[]
}

export interface RiskFactor {
  category: string
  level: 'low' | 'medium' | 'high'
  description: string
  mitigation: string
}

export interface PortfolioCompany {
  id: string
  name: string
  industry: string
  description: string
  website?: string
  logo?: string
  status: 'active' | 'exited' | 'acquired'
  investmentAmount: number
  currentValuation: number
  growthRate: number
  founded: Date
  location: string
  employees: number
  tags: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  category: string
  features: string[]
  benefits: string[]
  pricing?: {
    type: 'fixed' | 'hourly' | 'project' | 'retainer'
    amount: number
    currency: string
  }
  duration?: string
  deliverables: string[]
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'admin' | 'user' | 'viewer'
  avatar?: string
  createdAt: Date
  updatedAt: Date
  lastLoginAt?: Date
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
  timestamp: Date
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  message: string
  success: boolean
  timestamp: Date
}

export interface InvestmentOpportunity {
  id: string
  title: string
  description: string
  sector: string
  minInvestment: number
  expectedROI: string
  timeline: string
  riskLevel: 'low' | 'medium' | 'high'
  status: 'active' | 'closed' | 'coming_soon'
  fundingProgress: number
  targetAmount: number
  raisedAmount: number
  investorCount: number
  highlights: string[]
  documents: string[]
  createdAt: Date
  updatedAt: Date
}

export interface VIPMember {
  id: string
  userId: string
  tier: 'silver' | 'gold' | 'platinum'
  joinDate: Date
  renewalDate: Date
  status: 'active' | 'suspended' | 'expired'
  benefits: string[]
  investmentLimit: number
  dedicatedManager?: string
  createdAt: Date
  updatedAt: Date
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: Date
  featured: boolean
  tags: string[]
  image?: string
  readTime: string
  createdAt: Date
  updatedAt: Date
}

// Assessment form data types
export interface AssessmentFormData {
  companyName: string
  industry: string
  yearsInBusiness: string
  employees: string
  annualRevenue: string
  netProfit: string
  revenueGrowth: string
  hasDigitalPresence: boolean
  hasInternationalOperations: boolean
  hasRecurringRevenue: boolean
  mainChallenges: string[]
  futureGoals: string[]
  contactName: string
  email: string
  phone: string
}

// AI Assessment result types
export interface AIAssessmentResult {
  overallScore: number
  estimatedValuation: number
  hiddenValue: number
  growthPotential: string
  recommendations: string[]
  riskFactors: string[]
  marketPosition: string
  financialHealth: string
  competitiveAdvantage: string
  aiEnhanced: boolean
  aiRecommendations?: string[]
  aiRiskFactors?: string[]
  aiValuation?: number
  aiHiddenValue?: number
}