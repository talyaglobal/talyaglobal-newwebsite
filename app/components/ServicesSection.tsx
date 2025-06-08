'use client'

import { Briefcase, Brain, TrendingUp, Network, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: 'Corporate Management',
      description: 'Comprehensive corporate governance and strategic management services to optimize business operations and drive sustainable growth.',
      features: ['Strategic Planning', 'Operational Excellence', 'Performance Optimization', 'Risk Management'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'AI Digitalization',
      description: 'Cutting-edge AI and digital transformation solutions to modernize business processes and enhance competitive advantage.',
      features: ['AI Implementation', 'Process Automation', 'Digital Strategy', 'Technology Integration'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Exit Planning',
      description: 'Strategic exit planning and execution services to maximize value realization and ensure successful transitions.',
      features: ['Valuation Optimization', 'Market Positioning', 'Due Diligence', 'Transaction Management'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Value Increase',
      description: 'Targeted value creation initiatives designed to accelerate growth and enhance market position through strategic improvements.',
      features: ['Growth Strategy', 'Market Expansion', 'Operational Efficiency', 'Revenue Optimization'],
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Network,
      title: 'Global Networking',
      description: 'Access to our extensive global network of partners, investors, and industry experts across multiple markets and sectors.',
      features: ['Strategic Partnerships', 'Market Access', 'Investor Relations', 'Industry Connections'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and mitigation strategies to protect investments and ensure sustainable business operations.',
      features: ['Risk Analysis', 'Compliance Management', 'Security Assessment', 'Contingency Planning'],
      color: 'from-red-500 to-red-600'
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of current business state and identification of opportunities for improvement.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Development of customized strategic plans tailored to specific business objectives and market conditions.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execution of strategic initiatives with hands-on support and continuous monitoring of progress.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Ongoing refinement and optimization to ensure sustained growth and maximum value creation.'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Comprehensive <span className="text-gradient">Business Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From strategic planning to digital transformation, we provide end-to-end solutions 
            that drive growth, optimize operations, and maximize value creation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-purple-200 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-full bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-purple-100">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={process.step} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-purple-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-slate-600 mb-8">
              Let our experienced team help you unlock your company's full potential 
              through strategic guidance and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                <span>Schedule Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary">
                <span>View Case Studies</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}