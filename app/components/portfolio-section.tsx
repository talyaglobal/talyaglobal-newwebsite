'use client'

import { ExternalLink, TrendingUp, MapPin, Calendar } from 'lucide-react'

export function PortfolioSection() {
  const portfolioCompanies = [
    {
      name: 'TechNova Solutions',
      sector: 'Technology',
      description: 'Leading provider of cloud-based enterprise software solutions serving Fortune 500 companies.',
      location: 'San Francisco, CA',
      yearAcquired: '2019',
      growth: '+145%',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      name: 'GreenEnergy Dynamics',
      sector: 'Renewable Energy',
      description: 'Innovative solar and wind energy solutions with operations across North America and Europe.',
      location: 'Austin, TX',
      yearAcquired: '2020',
      growth: '+89%',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      name: 'HealthCore Medical',
      sector: 'Healthcare',
      description: 'Advanced medical device manufacturer specializing in minimally invasive surgical instruments.',
      location: 'Boston, MA',
      yearAcquired: '2018',
      growth: '+112%',
      image: 'https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      name: 'FinanceFlow Systems',
      sector: 'Financial Technology',
      description: 'Revolutionary payment processing platform serving small to medium enterprises globally.',
      location: 'New York, NY',
      yearAcquired: '2021',
      growth: '+78%',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      name: 'Smart Manufacturing Inc.',
      sector: 'Industrial Technology',
      description: 'IoT-enabled manufacturing solutions improving efficiency and reducing operational costs.',
      location: 'Detroit, MI',
      yearAcquired: '2022',
      growth: '+95%',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
    {
      name: 'EduTech Innovations',
      sector: 'Education Technology',
      description: 'Next-generation learning platforms transforming K-12 and higher education experiences.',
      location: 'Seattle, WA',
      yearAcquired: '2023',
      growth: '+156%',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    },
  ]

  const sectors = [
    { name: 'Technology', percentage: 35, companies: 5 },
    { name: 'Healthcare', percentage: 25, companies: 4 },
    { name: 'Financial Services', percentage: 20, companies: 3 },
    { name: 'Energy', percentage: 15, companies: 2 },
    { name: 'Manufacturing', percentage: 5, companies: 1 },
  ]

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-background-secondary">
      <div className="container-wide section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Our Investment Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A carefully curated selection of high-growth companies across diverse sectors, 
            each positioned for long-term success and market leadership.
          </p>
        </div>

        {/* Sector Distribution */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary-900 text-center mb-12">Portfolio Distribution</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Sector Breakdown */}
              <div className="space-y-6">
                {sectors.map((sector) => (
                  <div key={sector.name} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-primary-900">{sector.name}</span>
                        <span className="text-gray-600">{sector.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-700"
                          style={{ width: `${sector.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="ml-4 text-sm text-gray-500">
                      {sector.companies} companies
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Metrics */}
              <div className="tsmart-card p-8">
                <h4 className="text-xl font-bold text-primary-900 mb-6">Portfolio Highlights</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Portfolio Value</span>
                    <span className="font-bold text-primary-900">$2.5B+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Company Age</span>
                    <span className="font-bold text-primary-900">8.5 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Portfolio IRR</span>
                    <span className="font-bold text-success-600">23.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Geographic Reach</span>
                    <span className="font-bold text-primary-900">12 Countries</span>
                  </div>
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
              className="tsmart-card overflow-hidden hover:scale-105 transition-all duration-300 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Company Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={company.image} 
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-primary-900">
                  {company.sector}
                </div>
                <div className="absolute bottom-4 left-4 bg-success-500 text-white rounded-full px-3 py-1 text-sm font-bold flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {company.growth}
                </div>
              </div>

              {/* Company Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-secondary-600 transition-colors duration-200">
                  {company.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {company.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {company.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Acquired {company.yearAcquired}
                  </div>
                </div>

                <button className="flex items-center text-primary-600 hover:text-secondary-600 font-medium transition-colors duration-200 group">
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="tsmart-card p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary-50 to-secondary-50">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Interested in Our Portfolio?
            </h3>
            <p className="text-gray-600 mb-6">
              Learn more about our investment strategy and how we create value across our portfolio companies.
            </p>
            <button className="tsmart-button-primary">
              Request Portfolio Details
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}