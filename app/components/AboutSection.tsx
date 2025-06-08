'use client'

import { Building2, Users, Globe, Award, TrendingUp, Shield, Target, Lightbulb } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Building2,
      title: 'Strategic Acquisitions',
      description: 'We identify and acquire high-potential companies across diverse industries, leveraging our expertise to unlock value and drive sustainable growth.',
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Optimization',
      description: 'Our experienced team works closely with portfolio companies to implement strategic initiatives and operational improvements.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'With operations across 8+ countries from our UAE base, we provide access to international markets and cross-border opportunities.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'We employ sophisticated risk assessment frameworks to protect investments and ensure sustainable business operations.',
    },
    {
      icon: Users,
      title: 'Expert Leadership',
      description: 'Our leadership team brings decades of combined experience in investment management, operations, and strategic planning.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Since our founding in 2023, we have rapidly established ourselves as a trusted partner in the UAE and global markets.',
    },
  ]

  const timeline = [
    { year: '2023', title: 'Foundation in UAE', description: 'TalyaGlobal established in the UAE with focus on bridging global investment opportunities' },
    { year: '2023', title: 'Strategic Partnerships', description: 'Formed key partnerships with UAE government entities and international investors' },
    { year: '2024', title: 'Portfolio Expansion', description: 'Launched comprehensive investment platform and AI-powered business solutions' },
    { year: '2024', title: 'International Growth', description: 'Extended operations to multiple countries with strategic market entry' },
    { year: '2024', title: 'Market Leadership', description: 'Achieved significant portfolio milestones and established thought leadership in the region' },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            <span>About TalyaGlobal</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Building Tomorrow's <span className="text-gradient">Investment Landscape</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2023 in the UAE, TalyaGlobal has rapidly emerged as a leading strategic investment and 
            portfolio management firm, creating exceptional value through disciplined capital allocation and operational excellence.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-purple-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our 3PL Mission</h3>
            <div className="text-2xl font-serif font-bold mb-6 space-y-2">
              <div className="flex flex-wrap justify-center gap-4">
                <span className="text-blue-600">Proactive</span>
                <span className="text-purple-600">Pioneer</span>
                <span className="text-red-600">Passionate</span>
                <span className="text-green-600">Loyal</span>
              </div>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              To build a diversified portfolio of exceptional companies while providing strategic guidance, 
              operational support, and capital resources that enable sustainable growth and market leadership 
              across global markets, with a strong foundation in the UAE's dynamic business ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Innovation</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Excellence</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Integrity</span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full">Growth</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-purple-200 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Company Timeline */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-left`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-purple-200 transition-all duration-300">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8 bg-white border-4 border-purple-500 rounded-full z-10 my-4 md:my-0">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}