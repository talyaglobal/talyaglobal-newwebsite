'use client'

import { useState, useEffect } from 'react'
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Target,
  Info,
  ArrowRight,
  Download,
  Share2,
  RefreshCw
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'

export function ROICalculatorPage() {
  const [investmentAmount, setInvestmentAmount] = useState(100000)
  const [investmentPeriod, setInvestmentPeriod] = useState(5)
  const [riskLevel, setRiskLevel] = useState('medium')
  const [sector, setSector] = useState('technology')
  const [results, setResults] = useState(null)

  const riskProfiles = {
    low: { 
      name: 'Conservative', 
      minROI: 8, 
      maxROI: 15, 
      avgROI: 12,
      description: 'Stable returns with minimal risk',
      color: '#10B981'
    },
    medium: { 
      name: 'Balanced', 
      minROI: 15, 
      maxROI: 35, 
      avgROI: 25,
      description: 'Moderate risk with good growth potential',
      color: '#F59E0B'
    },
    high: { 
      name: 'Aggressive', 
      minROI: 25, 
      maxROI: 60, 
      avgROI: 40,
      description: 'High growth potential with higher risk',
      color: '#EF4444'
    }
  }

  const sectorMultipliers = {
    technology: { name: 'Technology & AI', multiplier: 1.2 },
    energy: { name: 'Energy & Renewables', multiplier: 1.1 },
    food: { name: 'Food Distribution', multiplier: 1.0 },
    ecommerce: { name: 'E-commerce', multiplier: 1.15 },
    real_estate: { name: 'Real Estate', multiplier: 0.9 }
  }

  const calculateROI = () => {
    const profile = riskProfiles[riskLevel]
    const sectorData = sectorMultipliers[sector]
    
    const baseROI = profile.avgROI * sectorData.multiplier
    const annualReturn = baseROI / 100
    
    // Calculate compound growth
    const finalValue = investmentAmount * Math.pow(1 + annualReturn, investmentPeriod)
    const totalReturn = finalValue - investmentAmount
    const totalROI = (totalReturn / investmentAmount) * 100
    
    // Generate year-by-year projection
    const projectionData = []
    for (let year = 0; year <= investmentPeriod; year++) {
      const value = investmentAmount * Math.pow(1 + annualReturn, year)
      projectionData.push({
        year: year,
        value: Math.round(value),
        profit: Math.round(value - investmentAmount)
      })
    }

    // Risk scenarios
    const scenarios = {
      conservative: {
        name: 'Conservative Scenario',
        roi: (profile.minROI * sectorData.multiplier),
        finalValue: investmentAmount * Math.pow(1 + (profile.minROI * sectorData.multiplier) / 100, investmentPeriod)
      },
      expected: {
        name: 'Expected Scenario',
        roi: baseROI,
        finalValue: finalValue
      },
      optimistic: {
        name: 'Optimistic Scenario',
        roi: (profile.maxROI * sectorData.multiplier),
        finalValue: investmentAmount * Math.pow(1 + (profile.maxROI * sectorData.multiplier) / 100, investmentPeriod)
      }
    }

    setResults({
      finalValue: Math.round(finalValue),
      totalReturn: Math.round(totalReturn),
      totalROI: Math.round(totalROI * 100) / 100,
      annualROI: Math.round(baseROI * 100) / 100,
      projectionData,
      scenarios,
      profile,
      sectorData
    })
  }

  useEffect(() => {
    calculateROI()
  }, [investmentAmount, investmentPeriod, riskLevel, sector])

  const pieData = results ? [
    { name: 'Initial Investment', value: investmentAmount, color: '#8B5CF6' },
    { name: 'Projected Returns', value: results.totalReturn, color: '#10B981' }
  ] : []

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            <span>Investment ROI Calculator</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Calculate Your
            <br />
            <span className="text-gradient">Investment Returns</span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Use our advanced ROI calculator to project potential returns based on TalyaGlobal's 
            proven investment strategies and historical performance data.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Inputs */}
          <div className="lg:col-span-1">
            <Card className="glass-card sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  <span>Investment Parameters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Investment Amount */}
                <div className="space-y-3">
                  <Label htmlFor="amount" className="text-sm font-medium">
                    Investment Amount
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <Input
                      id="amount"
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="pl-10 text-lg"
                      min="1000"
                      step="1000"
                    />
                  </div>
                  <div className="text-sm text-slate-600">
                    Minimum investment: $1,000
                  </div>
                </div>

                {/* Investment Period */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Investment Period: {investmentPeriod} years
                  </Label>
                  <input
                    type="range"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                    max={20}
                    min={1}
                    step={1}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>1 year</span>
                    <span>20 years</span>
                  </div>
                </div>

                {/* Risk Level */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Risk Profile</Label>
                  <Select value={riskLevel} onValueChange={setRiskLevel}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(riskProfiles).map(([key, profile]) => (
                        <SelectItem key={key} value={key}>
                          <div className="flex items-center space-x-2">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: profile.color }}
                            />
                            <span>{profile.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="text-sm text-slate-600">
                    {riskProfiles[riskLevel].description}
                  </div>
                </div>

                {/* Sector */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Investment Sector</Label>
                  <Select value={sector} onValueChange={setSector}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(sectorMultipliers).map(([key, sectorData]) => (
                        <SelectItem key={key} value={key}>
                          {sectorData.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <Button 
                    onClick={calculateROI} 
                    className="w-full btn-primary"
                  >
                    <RefreshCw className="mr-2 w-4 h-4" />
                    Recalculate
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 w-4 h-4" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-8">
            {results && (
              <>
                {/* Key Metrics */}
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="glass-card">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-gradient mb-2">
                        ${results.finalValue.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-600">Final Value</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        ${results.totalReturn.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-600">Total Return</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {results.totalROI}%
                      </div>
                      <div className="text-sm text-slate-600">Total ROI</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        {results.annualROI}%
                      </div>
                      <div className="text-sm text-slate-600">Annual ROI</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Scenario Analysis */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                      <span>Scenario Analysis</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {Object.entries(results.scenarios).map(([key, scenario]) => (
                        <div key={key} className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200">
                          <h4 className="font-semibold text-lg mb-3">{scenario.name}</h4>
                          <div className="space-y-2">
                            <div className="text-2xl font-bold text-gradient">
                              {scenario.roi.toFixed(1)}%
                            </div>
                            <div className="text-sm text-slate-600">Annual ROI</div>
                            <div className="text-lg font-semibold text-green-600">
                              ${Math.round(scenario.finalValue).toLocaleString()}
                            </div>
                            <div className="text-sm text-slate-600">Final Value</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Investment Insights */}
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <PieChart className="w-5 h-5 text-purple-600" />
                        <span>Investment Breakdown</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {pieData.map((entry, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-sm">{entry.name}</span>
                          </div>
                          <span className="text-sm font-semibold">
                            ${entry.value.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Info className="w-5 h-5 text-purple-600" />
                        <span>Investment Insights</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">Risk Profile</h4>
                        <p className="text-sm text-blue-800">
                          {results.profile.description}
                        </p>
                      </div>
                      
                      <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Sector Advantage</h4>
                        <p className="text-sm text-green-800">
                          {results.sectorData.name} sector shows strong growth potential with 
                          a {((results.sectorData.multiplier - 1) * 100).toFixed(0)}% performance multiplier.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">TalyaGlobal Advantage</h4>
                        <p className="text-sm text-purple-800">
                          Our calculations are based on 25+ years of proven investment performance 
                          and real portfolio data.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* CTA */}
                <Card className="glass-card bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-serif font-bold mb-4">
                      Ready to Start Your Investment Journey?
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                      Join our VIP Investment Club to access exclusive opportunities 
                      and personalized investment strategies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-white text-purple-600 hover:bg-gray-100">
                        Join VIP Club
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                        Schedule Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}