'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ArrowLeft, ArrowRight, Award, Users, TrendingUp, Globe } from 'lucide-react'

export function TrustCredibility() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Chen',
      position: 'CEO, TechVenture Solutions',
      company: 'Portfolio Company',
      content: 'TalyaGlobal transformed our operations completely. Their AI digitalization expertise helped us automate our entire workflow, resulting in 40% cost reduction and 60% efficiency improvement.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      position: 'Founder, GreenEnergy Innovations',
      company: 'Investment Partner',
      content: 'The strategic guidance and capital from TalyaGlobal enabled us to scale from a local startup to an international player. Their global network opened doors we never thought possible.',
      rating: 5,
    },
    {
      name: 'Dr. Elena Volkov',
      position: 'Director, European Food Distribution',
      company: 'Consultancy Client',
      content: 'Working with TalyaGlobal on our exit strategy was exceptional. They managed every detail of the process and achieved a valuation 25% higher than our initial expectations.',
      rating: 5,
    }
  ]

  const achievements = [
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: '25+ years of consistent growth and successful investments',
      stats: '4x Average Growth'
    },
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Operations across 8+ countries with deep local expertise',
      stats: '8+ Countries'
    },
    {
      icon: Users,
      title: 'Portfolio Success',
      description: '15+ portfolio companies with 12+ successful exits',
      stats: '80% Success Rate'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Certified partners and regulatory compliance across markets',
      stats: 'AAA Rated'
    }
  ]

  const mediaLogos = [
    { name: 'Forbes' },
    { name: 'Bloomberg' },
    { name: 'Financial Times' },
    { name: 'TechCrunch' },
    { name: 'Wall Street Journal' },
    { name: 'Reuters' }
  ]

  const companyStats = [
    { label: 'Portfolio Value', value: '$500M+' },
    { label: 'Portfolio Companies', value: '15+' },
    { label: 'Successful Exits', value: '12+' },
    { label: 'Countries', value: '8+' },
    { label: 'Years Experience', value: '25+' },
    { label: 'Client Satisfaction', value: '98%' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our commitment to excellence and proven results have earned the trust of 
            investors, entrepreneurs, and industry leaders worldwide.
          </p>
        </div>

        {/* Company Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {companyStats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={achievement.title}
                className="text-center"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-slate-600 mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="text-2xl font-bold text-amber-600">
                  {achievement.stats}
                </div>
              </div>
            )
          })}
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">
            What Our Clients Say
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <Quote className="w-12 h-12 text-blue-600 mb-6" />
              <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-slate-600">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-slate-600">
                      {testimonials[currentTestimonial].position}
                    </div>
                    <div className="text-sm text-blue-600">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 p-0 border border-slate-300 hover:bg-slate-50 transition-colors duration-200 flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 p-0 border border-slate-300 hover:bg-slate-50 transition-colors duration-200 flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Media Coverage */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">
            Featured In
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {mediaLogos.map((media, index) => (
              <div
                key={media.name}
                className="flex items-center justify-center hover:opacity-100 transition-opacity duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-24 h-8 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-600">{media.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}