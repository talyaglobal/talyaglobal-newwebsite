'use client'

import { ExternalLink, TrendingUp, MapPin, Calendar, Building2, Award } from 'lucide-react'

export function PortfolioSection() {
  const portfolioCompanies = [
    {
      name: 'US Gourmet Distribution',
      sector: 'Food & Beverage',
      description: 'Leading specialty food distributor serving premium restaurants and retailers across North America with sustainable supply chain solutions.',
      location: 'United States',
      yearAcquired: '2019',
      growth: '+85%',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      status: 'Active',
      employees: '250+',
      revenue: '$45M'
    },
    {
      name: 'Talya Smart Energy',
      sector: 'Clean Technology',
      description: 'AI-powered energy management platform revolutionizing smart grid technology and renewable energy optimization across European markets.',
      location: 'Germany',
      yearAcquired: '2020',
      growth: '+92%',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      status: 'Expanding',
      employees: '180+',
      revenue: '$38M'
    },
    {
      name: 'Orbit Battery Systems',
      sector: 'Energy Storage',
      description: 'Next-generation battery technology for electric vehicles and renewable energy storage solutions with global manufacturing capabilities.',
      location: 'South Korea',
      yearAcquired: '2021',
      growth: '+78%',
      image: 'https://images.pexels.com/photos/9875437/pexels-photo-9875437.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      status: 'Growth',
      employees: '320+',
      revenue: '$52M'
    },
    {
      name: 'TG Gourmet Global',
      sector: 'Franchising',
      description: 'International franchise network specializing in premium food concepts with AI-driven operational optimization and market expansion.',
      location: 'Multiple',
      yearAcquired: '2018',
      growth: '+65%',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      status: 'Mature',
      employees: '450+',
      revenue: '$40M'
    },
    {
      name: 'Digital Commerce Solutions',
      sector: 'E-commerce Technology',
      description: 'Advanced e-commerce platform providing AI-powered analytics and automation tools for mid-market retailers worldwide.',
      location: 'Canada',
      yearAcquired: '2022',
      growth: '+156%',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      status: 'High Growth',
      employees: '95+',
      revenue: '$22M'
    },
    {
      name: 'Smart Manufacturing Inc.',
      sector: 'Industrial Technology',
      description: 'IoT-enabled manufacturing solutions improving efficiency and reducing operational costs through predictive analytics and automation.',
      location: 'Japan',
      yearAcquired: '2023',
      growth: '+43%',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      status: 'Early Stage',
      employees: '75+',
      revenue: '$15M'
    },
  ]

  const sectors = [
    { name: 'Food & Beverage', percentage: 28, companies: 2, color: 'bg-green-500' },
    { name: 'Clean Technology', percentage: 25, companies: 2, color: 'bg-blue-500' },
    { name: 'Technology', percentage: 22, companies: 2, color: 'bg-purple-500' },
    { name: 'Franchising', percentage: 15, companies: 1, color: 'bg-amber-500' },
    { name: 'Manufacturing', percentage: 10, companies: 1, color: 'bg-indigo-500' },
  ]

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Investment <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A carefully curated selection of high-growth companies across diverse sectors, 
            each positioned for long-term success and market leadership.
          </p>
        </div>

        {/* Portfolio Overview */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Sector Distribution */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Portfolio Distribution</h3>
              {sectors.map((sector) => (
                <div key={sector.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-900">{sector.name}</span>
                    <div className="text-right">
                      <span className="text-slate-600">{sector.percentage}%</span>
                      <span className="text-slate-500 text-sm ml-2">({sector.companies} companies)</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className={`${sector.color} h-3 rounded-full transition-all duration-700`}
                      style={{ width: `${sector.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Metrics */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-100">
              <h4 className="text-2xl font-bold text-slate-900 mb-8">Portfolio Highlights</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Portfolio Value</span>
                  <span className="font-bold text-2xl text-green-600">$175M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Average Company Age</span>
                  <span className="font-bold text-xl text-slate-900">4.2 years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Portfolio IRR</span>
                  <span className="font-bold text-xl text-purple-600">127%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Geographic Reach</span>
                  <span className="font-bold text-xl text-slate-900">8+ Countries</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Employees</span>
                  <span className="font-bold text-xl text-blue-600">1,370+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Combined Revenue</span>
                  <span className="font-bold text-xl text-amber-600">$212M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCompanies.map((company, index) => (
            <div 
              key={company.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-purple-200 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Company Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={company.image} 
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-slate-700">
                  {company.sector}
                </div>
                <div className={`absolute top-4 left-4 rounded-full px-3 py-1 text-sm font-bold ${
                  company.status === 'Active' ? 'bg-green-500 text-white' :
                  company.status === 'Expanding' ? 'bg-blue-500 text-white' :
                  company.status === 'Growth' ? 'bg-purple-500 text-white' :
                  company.status === 'High Growth' ? 'bg-amber-500 text-white' :
                  company.status === 'Mature' ? 'bg-indigo-500 text-white' :
                  'bg-slate-500 text-white'
                }`}>
                  {company.status}
                </div>
                <div className="absolute bottom-4 right-4 bg-green-500 text-white rounded-full px-3 py-1 text-sm font-bold flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {company.growth}
                </div>
              </div>

              {/* Company Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  {company.name}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {company.description}
                </p>
                
                <div className="space-y-3 text-sm text-slate-500 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {company.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {company.yearAcquired}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{company.employees} employees</span>
                    <span className="font-semibold text-green-600">{company.revenue} revenue</span>
                  </div>
                </div>

                <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200 group w-full justify-center bg-purple-50 hover:bg-purple-100 py-2 rounded-lg">
                  <span>Learn More</span>
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Interested in Our Portfolio Success?
            </h3>
            <p className="text-purple-100 mb-8 text-lg">
              Learn more about our investment strategy and how we create sustainable value 
              across our diverse portfolio of companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors duration-300">
                Request Portfolio Details
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300">
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}