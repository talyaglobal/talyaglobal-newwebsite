'use client'

import { useState, useEffect } from 'react'
import { 
  Brain, 
  Building2, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Globe,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Target,
  BarChart3,
  Zap,
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  Mail,
  Download,
  Share2
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Checkbox } from '../components/ui/checkbox'
import { Progress } from '../components/ui/progress'

export default function AIAssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [assessmentResults, setAssessmentResults] = useState(null)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    // Company basics
    companyName: '',
    industry: '',
    yearsInBusiness: '',
    employees: '',
    
    // Financial data
    annualRevenue: '',
    netProfit: '',
    revenueGrowth: '',
    
    // Strategic data
    hasDigitalPresence: false,
    hasInternationalOperations: false,
    hasRecurringRevenue: false,
    mainChallenges: [],
    futureGoals: [],
    
    // Contact info
    contactName: '',
    email: '',
    phone: ''
  })

  const steps = [
    {
      title: 'Company Overview',
      description: 'Tell us about your business',
      icon: Building2,
      fields: ['companyName', 'industry', 'yearsInBusiness', 'employees']
    },
    {
      title: 'Financial Performance',
      description: 'Share your key financial metrics',
      icon: DollarSign,
      fields: ['annualRevenue', 'netProfit', 'revenueGrowth']
    },
    {
      title: 'Strategic Position',
      description: 'Help us understand your market position',
      icon: Target,
      fields: ['hasDigitalPresence', 'hasInternationalOperations', 'hasRecurringRevenue']
    },
    {
      title: 'Challenges & Goals',
      description: 'What are your main priorities?',
      icon: TrendingUp,
      fields: ['mainChallenges', 'futureGoals']
    },
    {
      title: 'Contact Information',
      description: 'How can we reach you?',
      icon: Users,
      fields: ['contactName', 'email', 'phone']
    }
  ]

  const industries = [
    { value: 'technology', label: 'Technology & Software' },
    { value: 'healthcare', label: 'Healthcare & Life Sciences' },
    { value: 'fintech', label: 'Financial Services' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'energy', label: 'Energy & Utilities' },
    { value: 'food', label: 'Food & Beverage' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'education', label: 'Education' },
    { value: 'other', label: 'Other' }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    setError('')
  }

  const handleArrayChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      runAssessment()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const runAssessment = async () => {
    setIsAnalyzing(true)
    setError('')
    
    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Assessment failed')
      }

      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setAssessmentResults(result.data)
      setIsAnalyzing(false)
      setShowResults(true)
    } catch (error) {
      console.error('Assessment error:', error)
      setError(error.message || 'Failed to complete assessment')
      setIsAnalyzing(false)
    }
  }

  const downloadReport = () => {
    // Create a simple text report
    const report = `
TalyaGlobal Business Assessment Report
=====================================

Company: ${formData.companyName}
Industry: ${formData.industry}
Assessment Date: ${new Date().toLocaleDateString()}

VALUATION ANALYSIS
------------------
Current Valuation: $${assessmentResults?.assessment?.currentValuation?.toLocaleString() || 'N/A'}
Hidden Value Potential: $${assessmentResults?.assessment?.hiddenValue?.toLocaleString() || 'N/A'}
5-Year Projection: $${assessmentResults?.assessment?.fiveYearProjection?.toLocaleString() || 'N/A'}
Competitive Score: ${assessmentResults?.assessment?.competitiveScore || 'N/A'}/100

RECOMMENDATIONS
---------------
${assessmentResults?.assessment?.recommendations?.map((rec, i) => `${i + 1}. ${rec.title}: ${rec.description}`).join('\n') || 'No recommendations available'}

RISK ASSESSMENT
---------------
Overall Risk Level: ${assessmentResults?.assessment?.riskAssessment?.overall || 'N/A'}
Risk Factors:
${assessmentResults?.assessment?.riskAssessment?.factors?.map((risk, i) => `${i + 1}. ${risk.category}: ${risk.description}`).join('\n') || 'No risk factors identified'}

---
This report was generated by TalyaGlobal's AI-powered assessment platform.
For detailed consultation, contact us at info@talyaglobal.com
    `

    const blob = new Blob([report], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${formData.companyName}-assessment-report.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const shareResults = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${formData.companyName} Business Assessment`,
          text: `Check out our business assessment results from TalyaGlobal!`,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      const shareText = `${formData.companyName} Business Assessment Results from TalyaGlobal - ${window.location.href}`
      navigator.clipboard.writeText(shareText)
      alert('Assessment link copied to clipboard!')
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  if (showResults && assessmentResults) {
    return <AssessmentResults 
      results={assessmentResults} 
      companyName={formData.companyName}
      onDownload={downloadReport}
      onShare={shareResults}
    />
  }

  if (isAnalyzing) {
    return <AnalyzingScreen companyName={formData.companyName} />
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Company Assessment</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Discover Your Company's
            <br />
            <span className="text-gradient">Hidden Value</span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Our AI analyzes your business in minutes and reveals surprising insights about your 
            company's value, growth potential, and future opportunities.
          </p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span className="text-red-800">{error}</span>
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-slate-600">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-purple-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = index === currentStep
              const isCompleted = index < currentStep
              
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-purple-600 text-white shadow-lg scale-105' 
                      : isCompleted
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium hidden sm:block">{step.title}</span>
                  {isCompleted && <CheckCircle className="w-4 h-4" />}
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20">
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              {React.createElement(steps[currentStep].icon, { className: "w-6 h-6 text-purple-600" })}
              <div>
                <h3 className="text-2xl font-serif font-bold">{steps[currentStep].title}</h3>
                <p className="text-slate-600">{steps[currentStep].description}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Step 0: Company Overview */}
              {currentStep === 0 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="companyName\" className="block text-sm font-medium text-slate-700">Company Name *</label>
                    <input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Enter your company name"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="industry" className="block text-sm font-medium text-slate-700">Industry *</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select your industry</option>
                      {industries.map(industry => (
                        <option key={industry.value} value={industry.value}>
                          {industry.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-slate-700">Years in Business *</label>
                    <input
                      id="yearsInBusiness"
                      type="number"
                      value={formData.yearsInBusiness}
                      onChange={(e) => handleInputChange('yearsInBusiness', e.target.value)}
                      placeholder="e.g., 5"
                      min="0"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="employees" className="block text-sm font-medium text-slate-700">Number of Employees *</label>
                    <input
                      id="employees"
                      type="number"
                      value={formData.employees}
                      onChange={(e) => handleInputChange('employees', e.target.value)}
                      placeholder="e.g., 25"
                      min="1"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Step 1: Financial Performance */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="annualRevenue" className="block text-sm font-medium text-slate-700">Annual Revenue (USD) *</label>
                      <input
                        id="annualRevenue"
                        type="number"
                        value={formData.annualRevenue}
                        onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                        placeholder="e.g., 5000000"
                        min="0"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <p className="text-sm text-slate-500">Enter your last 12 months revenue</p>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="netProfit" className="block text-sm font-medium text-slate-700">Net Profit (USD) *</label>
                      <input
                        id="netProfit"
                        type="number"
                        value={formData.netProfit}
                        onChange={(e) => handleInputChange('netProfit', e.target.value)}
                        placeholder="e.g., 750000"
                        min="0"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <p className="text-sm text-slate-500">After all expenses and taxes</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="revenueGrowth" className="block text-sm font-medium text-slate-700">Revenue Growth Rate (%) *</label>
                    <input
                      id="revenueGrowth"
                      type="number"
                      value={formData.revenueGrowth}
                      onChange={(e) => handleInputChange('revenueGrowth', e.target.value)}
                      placeholder="e.g., 25"
                      step="0.1"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <p className="text-sm text-slate-500">Year-over-year growth percentage</p>
                  </div>
                </div>
              )}

              {/* Step 2: Strategic Position */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="digitalPresence"
                        checked={formData.hasDigitalPresence}
                        onChange={(e) => handleInputChange('hasDigitalPresence', e.target.checked)}
                        className="w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500"
                      />
                      <label htmlFor="digitalPresence" className="text-base">
                        We have a strong digital presence (website, e-commerce, digital marketing)
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="internationalOps"
                        checked={formData.hasInternationalOperations}
                        onChange={(e) => handleInputChange('hasInternationalOperations', e.target.checked)}
                        className="w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500"
                      />
                      <label htmlFor="internationalOps" className="text-base">
                        We operate in international markets
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="recurringRevenue"
                        checked={formData.hasRecurringRevenue}
                        onChange={(e) => handleInputChange('hasRecurringRevenue', e.target.checked)}
                        className="w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500"
                      />
                      <label htmlFor="recurringRevenue" className="text-base">
                        We have recurring revenue streams (subscriptions, contracts, etc.)
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Challenges & Goals */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Main Business Challenges (select all that apply)</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { value: 'operational_efficiency', label: 'Operational Efficiency' },
                        { value: 'market_expansion', label: 'Market Expansion' },
                        { value: 'digital_transformation', label: 'Digital Transformation' },
                        { value: 'cost_management', label: 'Cost Management' },
                        { value: 'talent_acquisition', label: 'Talent Acquisition' },
                        { value: 'regulatory_compliance', label: 'Regulatory Compliance' },
                        { value: 'supply_chain', label: 'Supply Chain Issues' },
                        { value: 'customer_acquisition', label: 'Customer Acquisition' }
                      ].map(challenge => (
                        <div key={challenge.value} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id={challenge.value}
                            checked={formData.mainChallenges.includes(challenge.value)}
                            onChange={(e) => handleArrayChange('mainChallenges', challenge.value, e.target.checked)}
                            className="w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500"
                          />
                          <label htmlFor={challenge.value}>{challenge.label}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Future Goals (select all that apply)</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { value: 'increase_revenue', label: 'Increase Revenue' },
                        { value: 'improve_profitability', label: 'Improve Profitability' },
                        { value: 'expand_internationally', label: 'Expand Internationally' },
                        { value: 'digital_transformation', label: 'Digital Transformation' },
                        { value: 'exit_planning', label: 'Exit Planning' },
                        { value: 'raise_capital', label: 'Raise Capital' },
                        { value: 'operational_excellence', label: 'Operational Excellence' },
                        { value: 'market_leadership', label: 'Market Leadership' }
                      ].map(goal => (
                        <div key={goal.value} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id={goal.value}
                            checked={formData.futureGoals.includes(goal.value)}
                            onChange={(e) => handleArrayChange('futureGoals', goal.value, e.target.checked)}
                            className="w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500"
                          />
                          <label htmlFor={goal.value}>{goal.label}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold mb-2">Almost Done!</h3>
                    <p className="text-slate-600">
                      We'll send your personalized assessment report to your email
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contactName" className="block text-sm font-medium text-slate-700">Full Name *</label>
                      <input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number (Optional)</label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center space-x-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                
                <button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{currentStep === steps.length - 1 ? 'Analyze My Company' : 'Next'}</span>
                  {currentStep === steps.length - 1 ? (
                    <Zap className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  function isStepValid() {
    switch (currentStep) {
      case 0:
        return formData.companyName && formData.industry && formData.yearsInBusiness && formData.employees
      case 1:
        return formData.annualRevenue && formData.netProfit && formData.revenueGrowth
      case 2:
        return true // Optional checkboxes
      case 3:
        return true // Optional selections
      case 4:
        return formData.contactName && formData.email
      default:
        return false
    }
  }
}

// Analyzing Screen Component
function AnalyzingScreen({ companyName }) {
  const [progress, setProgress] = useState(0)
  const [currentTask, setCurrentTask] = useState(0)

  const tasks = [
    'Analyzing financial performance...',
    'Benchmarking against industry data...',
    'Calculating company valuation...',
    'Identifying growth opportunities...',
    'Generating AI insights...',
    'Preparing your personalized report...'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2
        if (newProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return newProgress
      })
    }, 60)

    const taskInterval = setInterval(() => {
      setCurrentTask(prev => (prev + 1) % tasks.length)
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(taskInterval)
    }
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 space-y-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-spin">
                <div className="absolute inset-2 rounded-full bg-white"></div>
              </div>
              <Brain className="absolute inset-0 m-auto w-12 h-12 text-purple-600" />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Analyzing {companyName}
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our AI is processing your data and generating personalized insights...
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm font-medium text-purple-600">
              {tasks[currentTask]}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <BarChart3 className="w-8 h-8 mx-auto text-purple-600" />
              <p className="text-sm text-slate-600">Financial Analysis</p>
            </div>
            <div className="space-y-2">
              <Target className="w-8 h-8 mx-auto text-blue-600" />
              <p className="text-sm text-slate-600">Market Position</p>
            </div>
            <div className="space-y-2">
              <TrendingUp className="w-8 h-8 mx-auto text-green-600" />
              <p className="text-sm text-slate-600">Growth Potential</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Assessment Results Component
function AssessmentResults({ results, companyName, onDownload, onShare }) {
  const assessment = results?.assessment
  const company = results?.company
  const contact = results?.contact

  if (!assessment) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Assessment Error</h2>
          <p className="text-slate-600">Unable to load assessment results. Please try again.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Assessment Complete</span>
          </div>
          <h1 className="text-4xl font-serif font-bold mb-4">
            {companyName} Assessment Results
          </h1>
          <p className="text-xl text-slate-600">
            Your personalized AI-powered business analysis
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 mb-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{assessment.competitiveScore || 'N/A'}/100</div>
              <div className="text-slate-600">Overall Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                ${assessment.currentValuation?.toLocaleString() || 'N/A'}
              </div>
              <div className="text-slate-600">Current Valuation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ${assessment.hiddenValue?.toLocaleString() || 'N/A'}
              </div>
              <div className="text-slate-600">Hidden Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                ${assessment.fiveYearProjection?.toLocaleString() || 'N/A'}
              </div>
              <div className="text-slate-600">5-Year Projection</div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Key Recommendations</h3>
              <div className="space-y-3">
                {assessment.recommendations?.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">{rec.title}</h4>
                      <p className="text-slate-700 text-sm">{rec.description}</p>
                      {rec.estimatedValue > 0 && (
                        <p className="text-green-600 text-sm font-medium">
                          Potential Value: ${rec.estimatedValue.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>
                )) || <p className="text-slate-600">No recommendations available</p>}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Risk Assessment</h3>
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm font-medium">Overall Risk Level:</span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    assessment.riskAssessment?.overall === 'low' ? 'bg-green-100 text-green-700' :
                    assessment.riskAssessment?.overall === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {assessment.riskAssessment?.overall?.toUpperCase() || 'N/A'}
                  </span>
                </div>
                <div className="space-y-2">
                  {assessment.riskAssessment?.factors?.map((risk, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-medium">{risk.category}:</span> {risk.description}
                    </div>
                  )) || <p className="text-slate-600 text-sm">No risk factors identified</p>}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-8 border-t border-slate-200">
            <Button onClick={onDownload} className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download Report</span>
            </Button>
            <Button onClick={onShare} variant="outline" className="flex items-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span>Share Results</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </Button>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Unlock Your Company's Potential?</h3>
          <p className="text-xl mb-8 text-purple-100">
            Schedule a consultation with our experts to discuss your assessment results and develop a strategic action plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-purple-50">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Explore Investment Opportunities
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}