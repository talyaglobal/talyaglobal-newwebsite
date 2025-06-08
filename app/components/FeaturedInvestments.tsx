'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Clock, 
  DollarSign,
  Building2,
  Zap,
  Globe,
  Star,
  ChevronRight,
  MapPin,
  Users
} from 'lucide-react'

export function FeaturedInvestments() {
  const [activeInvestment, setActiveInvestment] = useState(0)

  const investments = [
    {
      id: 'us-gourmet',
      name: 'US Gourmet Distribution',
      category: 'Food & Beverage Distribution',
      description: 'Proven success story: grown from $3M to $45M turnover. Leading specialty food distributor serving premium restaurants and retailers across North America with sustainable supply chain solutions.',
      stage: 'Active Growth',
      riskLevel: 'Medium Risk',
      expectedROI: '85%',
      minInvestment: '$250K',
      timeline: '24 months',
      investors: 28,
      fundingProgress: 75,
      raised: '$3.8M',
      target: '$5.0M',
      location: 'United States',
      highlights: [
        '4x Revenue Growth',
        'Market Leadership',
        'E-commerce Expansion',
        'Sustainable Supply Chain'
      ],
      metrics: {
        revenue: '$45M',
        markets: '3 States',
        employees: '250+'
      },
      color: 'purple',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      id: 'talya-smart-energy',
      name: 'Talya Smart Energy Platform',
      category: 'Clean Technology & AI',
      description: 'AI-powered B2B energy platform with revolutionary "Energy Tinder" matching system. Advanced pricing algorithms and buyer-seller optimization across European markets.',
      stage: 'Series A',
      riskLevel: 'High Growth',
      expectedROI: '92%',
      minInvestment: '$100K',
      timeline: '18 months',
      investors: 15,
      fundingProgress: 68,
      raised: '$1.4M',
      target: '$2.0M',
      location: 'Germany',
      highlights: [
        'AI Technology',
        'B2B Platform',
        'Energy Innovation',
        'European Expansion'
      ],
      metrics: {
        technology: 'AI-Powered',
        market: 'B2B Energy',
        revenue: '$38M'
      },
      color: 'blue',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      id: 'orbit-battery-systems',
      name: 'Orbit Battery Systems',
      category: 'Energy Storage Technology',
      description: 'Next-generation battery technology for electric vehicles and renewable energy storage solutions with global manufacturing capabilities and strategic partnerships.',
      stage: 'Growth Stage',
      riskLevel: 'Medium Risk',
      expectedROI: '78%',
      minInvestment: '$500K',
      timeline: '30 months',
      investors: 22,
      fundingProgress: 82,
      raised: '$4.1M',
      target: '$5.0M',
      location: 'South Korea',
      highlights: [
        'Advanced Battery Tech',
        'EV Market Growth',
        'Global Manufacturing',
        'Strategic Partnerships'
      ],
      metrics: {
        revenue: '$52M',
        employees: '320+',
        patents: '15+'
      },
      color: 'violet',
      image: 'https://images.pexels.com/photos/9875437/pexels-photo-9875437.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  ]

  const currentInvestment = investments[activeInvestment]

  return (
    <section id="investments" className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Featured Investment Opportunities</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-gradient">Curated</span> Investment
            <br />
            <span className="text-gradient-subtle">Opportunities</span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Discover our carefully curated portfolio of high-potential investments across multiple sectors. 
            Each opportunity is backed by our 2+ years of experience and rigorous due diligence process.
          </p>
        </div>

        {/* Investment Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {investments.map((investment, index) => (
            <button
              key={investment.id}
              onClick={() => setActiveInvestment(index)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeInvestment === index
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl'
                  : 'bg-white text-slate-600 hover:bg-purple-50 hover:text-purple-600 shadow-lg'
              }`}
            >
              {investment.name}
            </button>
          ))}
        </div>

        {/* Main Investment Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Investment Details */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  currentInvestment.stage === 'Active Growth' 
                    ? 'bg-green-100 text-green-700'
                    : currentInvestment.stage === 'Series A'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-purple-100 text-purple-700'
                }`}>
                  {currentInvestment.stage}
                </span>
                <span className="text-sm text-slate-500">{currentInvestment.category}</span>
              </div>
              
              <h3 className="text-4xl font-serif font-bold text-slate-900">
                {currentInvestment.name}
              </h3>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                {currentInvestment.description}
              </p>

              {/* Location */}
              <div className="flex items-center space-x-2 text-slate-600">
                <MapPin className="w-4 h-4" />
                <span>{currentInvestment.location}</span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(currentInvestment.metrics).map(([key, value]) => (
                <div key={key} className="feature-card text-center">
                  <div className="text-lg font-bold text-slate-900">{value}</div>
                  <div className="text-xs text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-slate-800">Key Highlights</h4>
              <div className="grid grid-cols-2 gap-2">
                {currentInvestment.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 gradient-primary rounded-full"></div>
                    <span className="text-slate-700 font-medium text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`#portfolio`} className="btn-primary flex-1 text-center">
                View Details
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href={`#contact`} className="btn-secondary flex-1 text-center">
                Invest Now
                <DollarSign className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Investment Card */}
          <div className="relative">
            {/* Investment Image */}
            <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
              <img 
                src={currentInvestment.image} 
                alt={currentInvestment.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">{currentInvestment.name}</h4>
                <p className="text-sm opacity-90">{currentInvestment.category}</p>
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full px-3 py-1 text-sm font-bold flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +{currentInvestment.expectedROI}
              </div>
            </div>

            <div className={`portfolio-card space-y-6 ${currentInvestment.color}`}>
              {/* Investment Overview */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
                    currentInvestment.color === 'purple' ? 'gradient-primary' :
                    currentInvestment.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    'bg-gradient-to-r from-violet-500 to-purple-600'
                  }`}>
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Investment Overview</h4>
                    <p className="text-sm text-slate-600">Performance Metrics</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    +{currentInvestment.expectedROI}
                  </div>
                  <div className="text-xs text-slate-600">Current ROI</div>
                </div>
              </div>

              {/* Funding Progress */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700">Funding Progress</span>
                  <span className="text-slate-600">{currentInvestment.fundingProgress}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${currentInvestment.color}`}
                    style={{ width: `${currentInvestment.fundingProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>{currentInvestment.raised} raised</span>
                  <span>{currentInvestment.target} target</span>
                </div>
              </div>

              {/* Investment Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-600">Risk Level</span>
                  </div>
                  <div className="font-semibold text-slate-800">{currentInvestment.riskLevel}</div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-600">Min Investment</span>
                  </div>
                  <div className="font-semibold text-slate-800">{currentInvestment.minInvestment}</div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-600">Timeline</span>
                  </div>
                  <div className="font-semibold text-slate-800">{currentInvestment.timeline}</div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-600">Investors</span>
                  </div>
                  <div className="font-semibold text-slate-800">{currentInvestment.investors}</div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium text-slate-700">Premium Opportunity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-xl border border-white/50 floating-element">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-semibold text-slate-700">Hot Deal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">$175M+</div>
            <div className="text-slate-600">Total Portfolio Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">127%</div>
            <div className="text-slate-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-slate-600">Portfolio Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">8+</div>
            <div className="text-slate-600">Countries</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Story?</h3>
            <p className="text-xl mb-8 text-purple-100">
              Explore exclusive investment opportunities with proven track records 
              and exceptional growth potential across global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors duration-300">
                Schedule Consultation
              </Link>
              <Link href="#portfolio" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300">
                View Full Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}