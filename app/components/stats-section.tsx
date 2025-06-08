'use client'

import { DollarSign, Building, Users, TrendingUp } from 'lucide-react'

export function StatsSection() {
  const stats = [
    {
      icon: DollarSign,
      value: '$2.5B+',
      label: 'Assets Under Management',
      description: 'Total value of managed portfolio',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Building,
      value: '15+',
      label: 'Portfolio Companies',
      description: 'Diverse range of industries',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: Users,
      value: '50,000+',
      label: 'Total Employees',
      description: 'Across all portfolio companies',
      color: 'from-success-500 to-success-600',
    },
    {
      icon: TrendingUp,
      value: '23%',
      label: 'Average Annual Return',
      description: 'Over the past 10 years',
      color: 'from-warning-500 to-warning-600',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50L50 0L100 50L50 100L0 50Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Driving Results Through Excellence
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our track record speaks for itself. These numbers represent the trust our investors place in us 
            and the value we create for all stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="tsmart-card bg-white/5 backdrop-blur-md border-white/10 p-8 hover:bg-white/10 transition-all duration-300 pulse-glow">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-secondary-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold text-secondary-300 mb-2">20 Years</div>
            <div className="text-lg">Market Experience</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-secondary-300 mb-2">12 Countries</div>
            <div className="text-lg">Global Presence</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-secondary-300 mb-2">95%</div>
            <div className="text-lg">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}