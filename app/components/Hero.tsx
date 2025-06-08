'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Globe, Award, Star, ChevronRight, Sparkles, Target, Zap, Play, Brain, BarChart3 } from 'lucide-react'

export function Hero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [animatedStats, setAnimatedStats] = useState(false)

  const stats = [
    { label: 'Years of Experience', value: '2+', icon: Award },
    { label: 'Countries', value: '8+', icon: Globe },
    { label: 'Portfolio Companies', value: '15+', icon: Users },
    { label: 'Total Portfolio Value', value: '$175M+', icon: TrendingUp },
  ]

  const portfolioHighlights = [
    {
      name: 'US Gourmet Distribution',
      status: 'Active',
      industry: 'Food & Beverage',
      growth: '+400%',
      valuation: '$45M',
      description: 'Grown from $3M to $45M turnover',
      color: 'bg-purple-500',
    },
    {
      name: 'Talya Smart Energy',
      status: 'Active',
      industry: 'Clean Technology',
      growth: '+92%',
      valuation: '$38M',
      description: 'AI-powered energy platform',
      color: 'bg-blue-500',
    },
    {
      name: 'Orbit Battery Systems',
      status: 'Growth',
      industry: 'Energy Storage',
      growth: '+78%',
      valuation: '$52M',
      description: 'Next-gen battery technology',
      color: 'bg-green-500',
    },
    {
      name: 'TG Gourmet Global',
      status: 'Mature',
      industry: 'Franchising',
      growth: '+65%',
      valuation: '$40M',
      description: 'International franchise network',
      color: 'bg-amber-500',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Solutions',
      role: 'CEO',
      content: 'TalyaGlobal\'s AI assessment revealed $2.3M in hidden value we never knew existed. Their strategic guidance transformed our business model.',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      company: 'GreenTech Innovations',
      role: 'Founder',
      content: 'The investment and consultancy support from TalyaGlobal helped us scale from $500K to $5M revenue in just 18 months.',
      rating: 5,
    },
    {
      name: 'Elena Petrov',
      company: 'DataDrive Analytics',
      role: 'Co-Founder',
      content: 'Their AI-powered insights and global network opened doors we couldn\'t have imagined. Truly transformational partnership.',
      rating: 5,
    }
  ]

  useEffect(() => {
    setAnimatedStats(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span>UAE-Based Global Investment Excellence</span>
              <Star className="h-4 w-4 text-amber-400" />
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block">Transforming</span>
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Investments
                </span>
                <span className="block">Worldwide</span>
              </h1>
              
              <p className="text-xl leading-8 text-white/90 max-w-2xl">
                Founded in <span className="text-purple-400 font-bold">2023 in the UAE</span>, we deliver exceptional returns through 
                strategic investments and cutting-edge AI-powered business solutions across{' '}
                <span className="text-purple-400 font-bold">8+ countries</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/ai-assessment"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <Brain className="mr-2 h-5 w-5" />
                Free AI Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/roi-calculator"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl font-semibold transition-all duration-300 group"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                ROI Calculator
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={stat.label}
                    className={`transform transition-all duration-1000 ${
                      animatedStats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-white/70">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">Portfolio Performance</h2>
              <p className="text-white/80 text-lg">
                Real-time insights from our active portfolio companies
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {portfolioHighlights.map((company, index) => (
                <div 
                  key={company.name} 
                  className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white transform ${
                    animatedStats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{company.name}</h3>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        company.status === 'Active' 
                          ? 'bg-green-500/20 text-green-300' 
                          : company.status === 'Growth'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {company.status}
                      </span>
                    </div>
                    <p className="text-sm text-white/70">{company.industry}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white/70">Growth</span>
                        <span className="font-semibold text-green-300">{company.growth}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white/70">Revenue</span>
                        <span className="font-semibold text-purple-300">{company.valuation}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-white/80 pt-2 border-t border-white/10">
                      {company.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24 pt-16 border-t border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join successful entrepreneurs who have unlocked millions in hidden value with our AI-powered insights
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-xl leading-relaxed mb-6">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-lg font-semibold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-white/70">
                    {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join successful entrepreneurs who have unlocked millions in hidden value with our AI-powered assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-assessment"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl font-semibold transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}