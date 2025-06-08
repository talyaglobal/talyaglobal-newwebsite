'use client'

import Link from 'next/link'
import { ArrowRight, Building2, Bot, Database, TrendingUp, DollarSign, BarChart3, Network, Palette, Shield } from 'lucide-react'

export function ServicesOverview() {
  const consultancyServices = [
    {
      id: 'corporate-management',
      name: 'Corporate Management',
      icon: Building2,
      description: 'Strategic leadership and governance consulting for sustainable growth and operational excellence.',
      benefits: ['Strategic Planning', 'Board Advisory', 'Governance Optimization'],
      href: '/services/corporate-management'
    },
    {
      id: 'ai-digitalization',
      name: 'AI Digitalization',
      icon: Bot,
      description: 'Technology transformation with proven AI platforms including TSmart.ai enterprise automation suite.',
      benefits: ['Enterprise Automation', 'AI Integration', 'Digital Transformation'],
      href: '/services/ai-digitalization'
    },
    {
      id: 'dataroom-preparation',
      name: 'Data Room Preparation',
      icon: Database,
      description: 'Comprehensive due diligence documentation and data room setup for investment readiness.',
      benefits: ['Due Diligence', 'Documentation', 'Investment Readiness'],
      href: '/services/dataroom-preparation'
    },
    {
      id: 'exit-planning',
      name: 'Exit Planning',
      icon: TrendingUp,
      description: 'Strategic exit strategies and execution with our proven track record of 12+ successful exits.',
      benefits: ['Exit Strategy', 'Valuation Optimization', 'Transaction Management'],
      href: '/services/exit-planning'
    },
    {
      id: 'value-increase',
      name: 'Value Increase',
      icon: DollarSign,
      description: 'Operational improvements and growth strategies demonstrated by our US Gourmet 4x growth success.',
      benefits: ['Growth Strategies', 'Operational Excellence', 'Performance Optimization'],
      href: '/services/value-increase'
    },
    {
      id: 'cost-control',
      name: 'Cost Control Systems',
      icon: BarChart3,
      description: 'Financial optimization and efficiency systems powered by our Shuttle Smart and Insight & Buy platforms.',
      benefits: ['Cost Optimization', 'Efficiency Systems', 'Financial Controls'],
      href: '/services/cost-control'
    },
    {
      id: 'sales-machine',
      name: 'Sales Machine Development',
      icon: TrendingUp,
      description: 'Revenue generation and scaling systems with technology-enabled sales optimization.',
      benefits: ['Sales Optimization', 'Revenue Scaling', 'Technology Integration'],
      href: '/services/sales-machine'
    },
    {
      id: 'global-networking',
      name: 'Global Networking',
      icon: Network,
      description: 'International partnerships and expansion leveraging our presence across 8+ countries.',
      benefits: ['International Expansion', 'Partnership Development', 'Market Access'],
      href: '/services/global-networking'
    },
    {
      id: 'brand-creation',
      name: 'Brand Creation',
      icon: Palette,
      description: 'Identity development and market positioning for sustainable competitive advantage.',
      benefits: ['Brand Strategy', 'Market Positioning', 'Identity Development'],
      href: '/services/brand-creation'
    },
    {
      id: 'asset-management',
      name: 'Asset Management',
      icon: Shield,
      description: 'Portfolio optimization and wealth preservation with our comprehensive asset management approach.',
      benefits: ['Portfolio Optimization', 'Wealth Preservation', 'Risk Management'],
      href: '/services/asset-management'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our consultancy services are backed by real-world experience and proven technology platforms. 
            We don't just advise—we implement solutions that drive measurable results across all aspects 
            of your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {consultancyServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="lg:col-span-1 xl:col-span-1"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-purple-200 group cursor-pointer">
                  <Link href={service.href}>
                    <div className="text-center pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-center leading-tight text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                        {service.name}
                      </h3>
                    </div>
                    <div className="pt-0">
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-1">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="text-xs text-blue-600 flex items-center">
                            <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Technology Platforms Highlight */}
        <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Powered by Proven Technology Platforms
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our consultancy services are enhanced by our proprietary technology platforms, 
              providing you with cutting-edge tools and proven solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'TSmart.ai',
                description: 'Enterprise automation suite for finance, logistics, CRM, and HR',
                focus: 'Full-Stack Automation'
              },
              {
                name: 'TSmart Marine',
                description: 'Marine industry platform with warranty, performance, and marketplace modules',
                focus: 'Industry-Specific Solutions'
              },
              {
                name: 'Shuttle Smart',
                description: 'Corporate transport optimization with AI route planning',
                focus: 'Operational Efficiency'
              },
              {
                name: 'Insight & Buy',
                description: 'ERP and procurement tools tailored for B2B SaaS',
                focus: 'Business Intelligence'
              }
            ].map((platform, index) => (
              <div
                key={platform.name}
                className="bg-white rounded-lg p-6 shadow-sm"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h4 className="font-bold text-blue-600 mb-2">{platform.name}</h4>
                <p className="text-sm text-slate-600 mb-3">{platform.description}</p>
                <div className="text-xs text-amber-600 font-semibold">{platform.focus}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {[
            {
              principle: 'Integrity',
              description: 'Maintaining the highest ethical standards in all business dealings',
              icon: '🤝'
            },
            {
              principle: 'Confidentiality',
              description: 'Protecting client information and maintaining discretion',
              icon: '🔒'
            },
            {
              principle: 'Efficiency',
              description: 'Delivering results through streamlined processes and expert execution',
              icon: '⚡'
            },
            {
              principle: 'Personalization',
              description: 'Tailoring solutions to meet specific client needs and objectives',
              icon: '🎯'
            }
          ].map((item, index) => (
            <div key={item.principle} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">
                {item.principle}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <p className="text-slate-600 mt-4">
            Ready to transform your business? Let's discuss your specific needs and objectives.
          </p>
        </div>
      </div>
    </section>
  )
}