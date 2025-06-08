'use client'

import { ArrowRight, CheckCircle, DollarSign, Calendar, Users, Target } from 'lucide-react'

export function InvestmentOpportunities() {
  const opportunities = [
    {
      title: 'Growth Capital Fund III',
      category: 'Private Equity',
      minInvestment: '$5M',
      targetReturn: '15-20%',
      timeline: '5-7 years',
      description: 'Focused on mid-market companies with proven business models and expansion opportunities.',
      highlights: [
        'Technology and healthcare focus',
        'Experienced management teams',
        'Clear value creation strategy',
        'ESG compliance framework'
      ],
      status: 'Fundraising',
      raised: 75,
      target: 250,
    },
    {
      title: 'Emerging Markets Venture',
      category: 'Venture Capital',
      minInvestment: '$1M',
      targetReturn: '25-35%',
      timeline: '7-10 years',
      description: 'Early-stage investments in high-growth potential companies across emerging markets.',
      highlights: [
        'Fintech and digital infrastructure',
        'Local market expertise',
        'Strong exit pipeline',
        'Government incentives'
      ],
      status: 'Open',
      raised: 45,
      target: 100,
    },
    {
      title: 'Sustainable Infrastructure',
      category: 'Infrastructure',
      minInvestment: '$10M',
      targetReturn: '12-18%',
      timeline: '10-15 years',
      description: 'Long-term investments in renewable energy and sustainable infrastructure projects.',
      highlights: [
        'Carbon-neutral focus',
        'Government partnerships',
        'Stable cash flows',
        'Social impact measurement'
      ],
      status: 'Closing Soon',
      raised: 180,
      target: 200,
    },
  ]

  const investorBenefits = [
    {
      icon: Target,
      title: 'Diversified Exposure',
      description: 'Access to multiple asset classes and geographic markets through a single investment platform.',
    },
    {
      icon: Users,
      title: 'Expert Management',
      description: 'Benefit from our team\'s 20+ years of investment experience and proven track record.',
    },
    {
      icon: DollarSign,
      title: 'Competitive Returns',
      description: 'Consistently outperform market benchmarks with our disciplined investment approach.',
    },
    {
      icon: CheckCircle,
      title: 'Transparent Reporting',
      description: 'Regular updates, detailed performance reports, and direct access to our investment team.',
    },
  ]

  return (
    <section id="opportunities" className="py-24 bg-white">
      <div className="container-wide section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Investment Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exclusive investment opportunities across our diversified fund portfolio, 
            designed for sophisticated investors seeking superior risk-adjusted returns.
          </p>
        </div>

        {/* Current Opportunities */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {opportunities.map((opportunity, index) => (
            <div 
              key={opportunity.title}
              className="tsmart-card p-8 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Status Badge */}
              <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold ${
                opportunity.status === 'Fundraising' ? 'bg-warning-100 text-warning-800' :
                opportunity.status === 'Open' ? 'bg-success-100 text-success-800' :
                'bg-danger-100 text-danger-800'
              }`}>
                {opportunity.status}
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary-900 mb-2 group-hover:text-secondary-600 transition-colors duration-200">
                  {opportunity.title}
                </h3>
                <div className="text-secondary-600 font-semibold mb-4">{opportunity.category}</div>
                <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-primary-900">{opportunity.minInvestment}</div>
                  <div className="text-sm text-gray-600">Min Investment</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-success-600">{opportunity.targetReturn}</div>
                  <div className="text-sm text-gray-600">Target IRR</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Fundraising Progress</span>
                  <span className="text-sm text-gray-600">${opportunity.raised}M / ${opportunity.target}M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${(opportunity.raised / opportunity.target) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="font-semibold text-primary-900 mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {opportunity.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <button className="w-full tsmart-button-outline group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        {/* Investor Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary-900 mb-12">Why Invest With Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investorBenefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Process */}
        <div className="tsmart-card p-8 md:p-12 bg-gradient-to-r from-primary-50 to-secondary-50">
          <h3 className="text-3xl font-bold text-center text-primary-900 mb-12">Investment Process</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { step: '01', title: 'Initial Consultation', description: 'Discuss your investment goals and risk tolerance' },
              { step: '02', title: 'Due Diligence', description: 'Review fund documents and investment strategy' },
              { step: '03', title: 'Investment Decision', description: 'Make informed decision with our guidance' },
              { step: '04', title: 'Ongoing Management', description: 'Regular reporting and portfolio monitoring' },
            ].map((process, index) => (
              <div key={process.step} className="relative">
                <div className="text-4xl font-bold text-secondary-500 mb-4">{process.step}</div>
                <h4 className="text-lg font-bold text-primary-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-secondary-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Ready to Explore Investment Opportunities?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our investment team to discuss how TalyaGlobal 
            can help you achieve your financial objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="tsmart-button-primary">
              Schedule Consultation
            </button>
            <button className="tsmart-button-outline">
              Download Investment Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}