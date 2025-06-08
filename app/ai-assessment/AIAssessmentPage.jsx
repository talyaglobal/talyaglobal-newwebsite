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
  Star
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Checkbox } from '../components/ui/checkbox'
import { Progress } from '../components/ui/progress'
import { CompanyAssessmentAI } from '../utils/companyAssessmentAI'

export function AIAssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [assessmentResults, setAssessmentResults] = useState(null)
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

  const assessmentAI = new CompanyAssessmentAI()

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
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'healthcare', label: 'Healthcare & Life Sciences' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'energy', label: 'Energy & Utilities' },
    { value: 'food', label: 'Food & Beverage' }
  ]

  const challenges = [
    'operational_efficiency',
    'market_expansion',
    'digital_transformation',
    'cost_management',
    'talent_acquisition',
    'regulatory_compliance',
    'supply_chain',
    'customer_acquisition'
  ]

  const goals = [
    'increase_revenue',
    'improve_profitability',
    'expand_internationally',
    'digital_transformation',
    'exit_planning',
    'raise_capital',
    'operational_excellence',
    'market_leadership'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
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
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Convert form data to assessment format
    const assessmentData = {
      industry: formData.industry,
      annualRevenue: parseFloat(formData.annualRevenue) || 0,
      netProfit: parseFloat(formData.netProfit) || 0,
      employees: parseInt(formData.employees) || 1,
      yearsInBusiness: parseInt(formData.yearsInBusiness) || 1,
      revenueGrowth: parseFloat(formData.revenueGrowth) / 100 || 0,
      hasDigitalPresence: formData.hasDigitalPresence,
      hasInternationalOperations: formData.hasInternationalOperations,
      hasRecurringRevenue: formData.hasRecurringRevenue,
      mainChallenges: formData.mainChallenges,
      futureGoals: formData.futureGoals
    }
    
    // Run AI assessment
    const results = assessmentAI.assessCompany(assessmentData)
    setAssessmentResults(results)
    setIsAnalyzing(false)
    setShowResults(true)
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  if (showResults && assessmentResults) {
    return <AssessmentResults results={assessmentResults} companyName={formData.companyName} />
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
          
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Discover Your Company's
            <br />
            <span className="text-gradient">Hidden Value</span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Our AI analyzes your business in minutes and reveals surprising insights about your 
            company's value, growth potential, and future opportunities.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
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
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
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
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              {React.createElement(steps[currentStep].icon, { className: "w-6 h-6 text-primary" })}
              <div>
                <h3 className="text-2xl font-serif">{steps[currentStep].title}</h3>
                <p className="text-muted-foreground font-normal">{steps[currentStep].description}</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 0: Company Overview */}
            {currentStep === 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="Enter your company name"
                    className="text-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map(industry => (
                        <SelectItem key={industry.value} value={industry.value}>
                          {industry.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                  <Input
                    id="yearsInBusiness"
                    type="number"
                    value={formData.yearsInBusiness}
                    onChange={(e) => handleInputChange('yearsInBusiness', e.target.value)}
                    placeholder="e.g., 5"
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="employees">Number of Employees *</Label>
                  <Input
                    id="employees"
                    type="number"
                    value={formData.employees}
                    onChange={(e) => handleInputChange('employees', e.target.value)}
                    placeholder="e.g., 25"
                    min="1"
                  />
                </div>
              </div>
            )}

            {/* Step 1: Financial Performance */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="annualRevenue">Annual Revenue (USD) *</Label>
                    <Input
                      id="annualRevenue"
                      type="number"
                      value={formData.annualRevenue}
                      onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                      placeholder="e.g., 5000000"
                      min="0"
                    />
                    <p className="text-sm text-muted-foreground">Enter your last 12 months revenue</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="netProfit">Net Profit (USD) *</Label>
                    <Input
                      id="netProfit"
                      type="number"
                      value={formData.netProfit}
                      onChange={(e) => handleInputChange('netProfit', e.target.value)}
                      placeholder="e.g., 750000"
                      min="0"
                    />
                    <p className="text-sm text-muted-foreground">After all expenses and taxes</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="revenueGrowth">Revenue Growth Rate (%) *</Label>
                  <Input
                    id="revenueGrowth"
                    type="number"
                    value={formData.revenueGrowth}
                    onChange={(e) => handleInputChange('revenueGrowth', e.target.value)}
                    placeholder="e.g., 25"
                    step="0.1"
                  />
                  <p className="text-sm text-muted-foreground">Year-over-year growth percentage</p>
                </div>
              </div>
            )}

            {/* Step 2: Strategic Position */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="digitalPresence"
                      checked={formData.hasDigitalPresence}
                      onCheckedChange={(checked) => handleInputChange('hasDigitalPresence', checked)}
                    />
                    <Label htmlFor="digitalPresence" className="text-base">
                      We have a strong digital presence (website, e-commerce, digital marketing)
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="internationalOps"
                      checked={formData.hasInternationalOperations}
                      onCheckedChange={(checked) => handleInputChange('hasInternationalOperations', checked)}
                    />
                    <Label htmlFor="internationalOps" className="text-base">
                      We operate in international markets
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="recurringRevenue"
                      checked={formData.hasRecurringRevenue}
                      onCheckedChange={(checked) => handleInputChange('hasRecurringRevenue', checked)}
                    />
                    <Label htmlFor="recurringRevenue" className="text-base">
                      We have recurring revenue streams (subscriptions, contracts, etc.)
                    </Label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Challenges & Goals */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Main Business Challenges (select all that apply)</Label>
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
                        <Checkbox
                          id={challenge.value}
                          checked={formData.mainChallenges.includes(challenge.value)}
                          onCheckedChange={(checked) => handleArrayChange('mainChallenges', challenge.value, checked)}
                        />
                        <Label htmlFor={challenge.value}>{challenge.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Future Goals (select all that apply)</Label>
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
                        <Checkbox
                          id={goal.value}
                          checked={formData.futureGoals.includes(goal.value)}
                          onCheckedChange={(checked) => handleArrayChange('futureGoals', goal.value, checked)}
                        />
                        <Label htmlFor={goal.value}>{goal.label}</Label>
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
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-bold mb-2">Almost Done!</h3>
                  <p className="text-muted-foreground">
                    We'll send your personalized assessment report to your email
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Full Name *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>
              
              <Button
                onClick={nextStep}
                className="btn-primary flex items-center space-x-2"
                disabled={!isStepValid()}
              >
                <span>{currentStep === steps.length - 1 ? 'Analyze My Company' : 'Next'}</span>
                {currentStep === steps.length - 1 ? (
                  <Zap className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
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
        <div className="glass-card p-12 space-y-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-spin">
                <div className="absolute inset-2 rounded-full bg-white"></div>
              </div>
              <Brain className="absolute inset-0 m-auto w-12 h-12 text-primary" />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Analyzing {companyName}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our AI is processing your data and generating personalized insights...
            </p>
          </div>

          <div className="space-y-4">
            <Progress value={progress} className="h-3" />
            <p className="text-sm font-medium text-primary">
              {tasks[currentTask]}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <BarChart3 className="w-8 h-8 mx-auto text-purple-600" />
              <p className="text-sm text-muted-foreground">Financial Analysis</p>
            </div>
            <div className="space-y-2">
              <Target className="w-8 h-8 mx-auto text-blue-600" />
              <p className="text-sm text-muted-foreground">Market Position</p>
            </div>
            <div className="space-y-2">
              <TrendingUp className="w-8 h-8 mx-auto text-green-600" />
              <p className="text-sm text-muted-foreground">Growth Potential</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Assessment Results Component (placeholder - will be implemented in next phase)
function AssessmentResults({ results, companyName }) {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">
            {companyName} Assessment Results
          </h1>
          <p className="text-xl text-muted-foreground">
            Your personalized AI-powered business analysis
          </p>
        </div>
        
        <Card className="glass-card p-8">
          <CardContent>
            <p className="text-center text-muted-foreground">
              Results dashboard will be implemented in the next phase...
            </p>
            <pre className="mt-4 text-xs overflow-auto">
              {JSON.stringify(results, null, 2)}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

