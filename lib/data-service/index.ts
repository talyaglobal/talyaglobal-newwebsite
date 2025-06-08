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

