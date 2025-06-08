'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  Lock,
  Award,
  Zap,
  Target,
  Calendar,
  Mail,
  Phone,
  Download,
  Eye,
  BarChart3,
  FileText,
  Video,
  MessageSquare,
  Briefcase,
  Network,
  Gift,
  Clock
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function VIPZonePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const membershipTiers = [
    {
      name: 'Silver VIP',
      price: '$10,000',
      period: 'Annual',
      description: 'Essential access to exclusive investment opportunities',
      features: [
        'Quarterly investment reports',
        'Access to select investment opportunities',
        'VIP customer support',
        'Market insights newsletter',
        'Annual investor meeting invitation'
      ],
      color: 'from-gray-400 to-gray-600',
      popular: false
    },
    {
      name: 'Gold VIP',
      price: '$25,000',
      period: 'Annual',
      description: 'Enhanced access with priority investment opportunities',
      features: [
        'Monthly detailed portfolio reports',
        'Priority access to all investments',
        'Dedicated relationship manager',
        'Quarterly strategy calls',
        'Exclusive webinars and events',
        'Early exit opportunity notifications'
      ],
      color: 'from-yellow-400 to-yellow-600',
      popular: true
    },
    {
      name: 'Platinum VIP',
      price: '$50,000',
      period: 'Annual',
      description: 'Ultimate access with co-investment opportunities',
      features: [
        'Real-time portfolio dashboard',
        'Co-investment opportunities',
        'Direct access to TalyaGlobal executives',
        'Custom investment strategies',
        'Private investor events',
        'First access to IPO opportunities',
        'Personalized market analysis'
      ],
      color: 'from-purple-400 to-purple-600',
      popular: false
    }
  ]

  const exclusiveBenefits = [
    {
      icon: TrendingUp,
      title: 'Priority Investment Access',
      description: 'First access to high-potential investment opportunities before they become available to the general market.',
      tier: 'All Tiers'
    },
    {
      icon: Users,
      title: 'Dedicated Relationship Manager',
      description: 'Personal investment advisor who understands your goals and provides tailored investment recommendations.',
      tier: 'Gold & Platinum'
    },
    {
      icon: BarChart3,
      title: 'Advanced Portfolio Analytics',
      description: 'Real-time dashboard with detailed performance metrics, risk analysis, and market insights.',
      tier: 'Platinum Only'
    },
    {
      icon: Globe,
      title: 'Global Investment Network',
      description: 'Access to international investment opportunities across our 8+ country network.',
      tier: 'All Tiers'
    },
    {
      icon: Shield,
      title: 'Risk Management Tools',
      description: 'Advanced risk assessment tools and portfolio diversification strategies.',
      tier: 'Gold & Platinum'
    },
    {
      icon: Award,
      title: 'Exclusive Events & Networking',
      description: 'Private investor events, networking opportunities, and direct access to portfolio company executives.',
      tier: 'Platinum Only'
    }
  ]

  const portfolioInsights = [
    {
      company: 'US Gourmet Distribution',
      sector: 'Food & Beverage',
      performance: '+400%',
      status: 'Active Growth',
      insight: 'Expanding B2B e-commerce platform with AI-driven logistics optimization',
      confidential: true
    },
    {
      company: 'Talya Smart Energy',
      sector: 'Clean Technology',
      performance: '+92%',
      status: 'Series A',
      insight: 'Revolutionary "Energy Tinder" platform gaining traction in European markets',
      confidential: true
    },
    {
      company: 'Orbit Battery Systems',
      sector: 'Energy Storage',
      performance: '+78%',
      status: 'Growth Stage',
      insight: 'Next-gen battery technology with major automotive partnerships in development',
      confidential: true
    }
  ]

  const upcomingOpportunities = [
    {
      title: 'AI Healthcare Platform',
      sector: 'HealthTech',
      minInvestment: '$100K',
      expectedROI: '35-45%',
      timeline: '18-24 months',
      description: 'Revolutionary AI-powered diagnostic platform with FDA approval pathway',
      availability: 'Platinum VIP Only',
      status: 'Opening Soon'
    },
    {
      title: 'Sustainable Agriculture Tech',
      sector: 'AgriTech',
      minInvestment: '$50K',
      expectedROI: '25-35%',
      timeline: '24-36 months',
      description: 'Vertical farming technology with 90% water reduction and 300% yield increase',
      availability: 'Gold & Platinum VIP',
      status: 'Available Now'
    },
    {
      title: 'Blockchain Financial Services',
      sector: 'FinTech',
      minInvestment: '$250K',
      expectedROI: '40-60%',
      timeline: '12-18 months',
      description: 'DeFi platform for institutional investors with regulatory compliance',
      availability: 'All VIP Tiers',
      status: 'Coming Q2 2025'
    }
  ]

  const vipResources = [
    {
      icon: FileText,
      title: 'Investment Research Reports',
      description: 'In-depth analysis of market trends, sector opportunities, and investment strategies',
      access: 'Monthly'
    },
    {
      icon: Video,
      title: 'Executive Briefings',
      description: 'Video updates from TalyaGlobal leadership on portfolio performance and market outlook',
      access: 'Quarterly'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Performance Dashboard',
      description: 'Real-time tracking of your investments with detailed analytics and projections',
      access: '24/7'
    },
    {
      icon: MessageSquare,
      title: 'Direct Communication Channel',
      description: 'Secure messaging platform for direct communication with investment team',
      access: 'Always Available'
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating VIP Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-500/20 rounded-full floating-element flex items-center justify-center">
          <Crown className="w-8 h-8 text-yellow-400" />
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-purple-500/20 rounded-full floating-element flex items-center justify-center" style={{animationDelay: '2s'}}>
          <Star className="w-10 h-10 text-purple-400" />
        </div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-500/20 rounded-full floating-element flex items-center justify-center" style={{animationDelay: '4s'}}>
          <Shield className="w-6 h-6 text-blue-400" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Crown className="w-4 h-4" />
              <span>TG Investment Club - VIP Zone</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6">
              <span className="text-gradient-gold">Exclusive</span> Investment
              <br />
              <span className="text-white">Club</span>
            </h1>
            
            <p className="text-xl text-purple-100 leading-relaxed mb-12">
              Join an elite community of sophisticated investors with exclusive access to 
              high-potential opportunities, personalized insights, and direct access to TalyaGlobal's 
              global investment network.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 hover:from-yellow-500 hover:to-amber-600 text-lg px-8 py-4 rounded-2xl font-semibold">
                <Crown className="mr-2 w-5 h-5" />
                Join VIP Club
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 rounded-2xl">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>

            {/* VIP Stats */}
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-purple-200">VIP Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$175M+</div>
                <div className="text-purple-200">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">127%</div>
                <div className="text-purple-200">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-purple-200">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Choose Your <span className="text-gradient">VIP Membership</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Select the membership tier that best fits your investment goals and access requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <Card key={index} className={`glass-card relative ${tier.popular ? 'ring-2 ring-yellow-400 scale-105' : ''} hover:scale-105 transition-all duration-500`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center`}>
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-serif">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-gradient mb-2">{tier.price}</div>
                  <div className="text-slate-600">{tier.period}</div>
                  <p className="text-slate-600 mt-4">{tier.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}>
                    {tier.popular ? 'Get Started' : 'Choose Plan'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-gradient">Exclusive</span> Member Benefits
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Unlock premium features and services designed for sophisticated investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exclusiveBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {benefit.tier}
                    </span>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Insights Preview */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-gradient">Portfolio</span> Insights Preview
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Get a glimpse of the exclusive insights available to VIP members.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioInsights.map((insight, index) => (
              <Card key={index} className="glass-card group hover:scale-105 transition-all duration-500">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold">{insight.company}</h3>
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-purple-600 font-medium">VIP Only</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sector</span>
                      <span className="font-semibold">{insight.sector}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Performance</span>
                      <span className="font-semibold text-green-600">{insight.performance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Status</span>
                      <span className="font-semibold text-blue-600">{insight.status}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Eye className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-900">Exclusive Insight</span>
                    </div>
                    <p className="text-sm text-purple-800">{insight.insight}</p>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Lock className="mr-2 w-4 h-4" />
                    Unlock Full Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Opportunities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Upcoming <span className="text-gradient">Investment Opportunities</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Exclusive early access to high-potential investment opportunities.
            </p>
          </div>

          <div className="space-y-8">
            {upcomingOpportunities.map((opportunity, index) => (
              <Card key={index} className="glass-card group hover:scale-[1.02] transition-all duration-500">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8 items-center">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-2xl font-serif font-bold">{opportunity.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          opportunity.status === 'Available Now' ? 'bg-green-100 text-green-700' :
                          opportunity.status === 'Opening Soon' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {opportunity.status}
                        </span>
                      </div>
                      <p className="text-slate-600">{opportunity.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-purple-600 font-semibold">{opportunity.sector}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-600">{opportunity.availability}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-gradient">{opportunity.minInvestment}</div>
                          <div className="text-xs text-slate-600">Min Investment</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">{opportunity.expectedROI}</div>
                          <div className="text-xs text-slate-600">Expected ROI</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-slate-700">{opportunity.timeline}</div>
                        <div className="text-xs text-slate-600">Timeline</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Target className="mr-2 w-4 h-4" />
                        Express Interest
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Resources */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-gradient">VIP</span> Resources & Tools
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Access premium research, analytics, and communication tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vipResources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif font-bold">{resource.title}</h3>
                    <p className="text-sm text-slate-600">{resource.description}</p>
                    <div className="text-xs text-purple-600 font-semibold">{resource.access}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Ready to Join the
            <br />
            <span className="text-gradient-gold">Elite</span> Investment Club?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
            Gain exclusive access to high-potential investment opportunities, personalized insights, 
            and a global network of sophisticated investors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 hover:from-yellow-500 hover:to-amber-600 text-lg px-8 py-4 rounded-2xl font-semibold">
              <Crown className="mr-2 w-5 h-5" />
              Join VIP Club
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 rounded-2xl">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Mail className="w-8 h-8 mx-auto text-yellow-400" />
              <p className="text-sm">VIP Support</p>
              <p className="text-yellow-400">vip@talyaglobal.com</p>
            </div>
            <div className="space-y-2">
              <Phone className="w-8 h-8 mx-auto text-yellow-400" />
              <p className="text-sm">Direct Line</p>
              <p className="text-yellow-400">+1 (555) VIP-CLUB</p>
            </div>
            <div className="space-y-2">
              <Clock className="w-8 h-8 mx-auto text-yellow-400" />
              <p className="text-sm">Availability</p>
              <p className="text-yellow-400">24/7 VIP Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}