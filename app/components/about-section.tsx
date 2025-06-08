'use client'

import { Building2, Users, Globe, Award, TrendingUp, Shield } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Building2,
      title: 'Strategic Acquisitions',
      description: 'We identify and acquire high-potential companies across diverse industries, leveraging our expertise to unlock value and drive growth.',
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Optimization',
      description: 'Our experienced team works closely with portfolio companies to implement strategic initiatives and operational improvements.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'With a presence across multiple continents, we provide access to international markets and cross-border opportunities.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'We employ sophisticated risk assessment frameworks to protect and preserve capital while maximizing returns.',
    },
    {
      icon: Users,
      title: 'Expert Leadership',
      description: 'Our leadership team brings decades of combined experience in investment management, operations, and strategic planning.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Two decades of successful investments and exits demonstrate our ability to create sustainable value for all stakeholders.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background-secondary to-white">
      <div className="container-wide section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            About TalyaGlobal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, TalyaGlobal has been at the forefront of strategic investment and 
            portfolio management, creating value through disciplined capital allocation and operational excellence.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <div className="tsmart-card p-8 md:p-12 text-center max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-secondary-50">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To build a diversified portfolio of exceptional companies while providing strategic guidance, 
              operational support, and capital resources that enable sustainable growth and market leadership.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full">Innovation</span>
              <span className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full">Excellence</span>
              <span className="bg-success-100 text-success-800 px-4 py-2 rounded-full">Integrity</span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full">Growth</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="tsmart-card p-8 text-center hover:scale-105 transition-all duration-300 float"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Company Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-primary-900 mb-12">Our Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  { year: '2004', title: 'Foundation', description: 'TalyaGlobal established with initial focus on technology investments' },
                  { year: '2010', title: 'Expansion', description: 'Diversified portfolio across multiple sectors and geographic regions' },
                  { year: '2015', title: 'Growth', description: 'Reached $1B in assets under management with 10 portfolio companies' },
                  { year: '2020', title: 'Innovation', description: 'Launched digital transformation initiative and ESG investment framework' },
                  { year: '2024', title: 'Leadership', description: 'Achieved $2.5B AUM with 15+ companies in diverse industries' },
                ].map((item, index) => (
                  <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="tsmart-card p-6">
                        <div className="text-2xl font-bold text-secondary-600 mb-2">{item.year}</div>
                        <h4 className="text-xl font-bold text-primary-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-center w-8 h-8 bg-white border-4 border-primary-500 rounded-full z-10">
                      <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}