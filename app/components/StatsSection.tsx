'use client'

import { DollarSign, Building, Users, TrendingUp, Globe, Award } from 'lucide-react'

export function StatsSection() {
  const stats = [
    {
      icon: DollarSign,
      value: '$175M+',
      label: 'Portfolio Value',
      description: 'Total value across all investments',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Building,
      value: '15+',
      label: 'Portfolio Companies',
      description: 'Diverse range of industries',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Globe,
      value: '8+',
      label: 'Countries',
      description: 'Global market presence',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      value: '127%',
      label: 'Average ROI',
      description: 'Exceptional returns delivered',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Users,
      value: '12+',
      label: 'Successful Exits',
      description: 'Proven exit strategies',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Award,
      value: '2+',
      label: 'Years in UAE',
      description: 'Established excellence since 2023',
      color: 'from-rose-500 to-pink-600',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50L50 0L100 50L50 100L0 50Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Driving Results Through <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Our track record speaks for itself. Since founding in the UAE in 2023, these numbers represent 
            the trust our investors place in us and the exceptional value we create for all stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-purple-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-purple-100 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold text-purple-300 mb-2">99%</div>
            <div className="text-lg text-purple-100">Client Satisfaction</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
            <div className="text-lg text-purple-100">Global Support</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-purple-300 mb-2">50+</div>
            <div className="text-lg text-purple-100">Investment Professionals</div>
          </div>
        </div>
      </div>
    </section>
  )
}