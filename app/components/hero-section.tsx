'use client'

import { ArrowRight, Play, BarChart3, Target, Shield } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 container-wide section-padding text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Building Tomorrow's
            <span className="block text-gradient bg-gradient-to-r from-secondary-300 to-secondary-100 bg-clip-text text-transparent">
              Investment Portfolio
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            TalyaGlobal is a premier investment holding company specializing in strategic acquisitions, 
            portfolio optimization, and sustainable growth across diverse market sectors.
          </p>

          {/* Key Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <BarChart3 className="h-5 w-5 text-secondary-300" />
              <span className="text-sm font-medium">$2.5B+ AUM</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <Target className="h-5 w-5 text-secondary-300" />
              <span className="text-sm font-medium">15+ Portfolio Companies</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <Shield className="h-5 w-5 text-secondary-300" />
              <span className="text-sm font-medium">20 Years Experience</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Link 
              href="#opportunities" 
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary-500 text-white rounded-lg font-semibold hover:bg-secondary-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 hover:scale-105 border border-white/20 group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              Watch Our Story
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '4s'}}></div>
    </section>
  )
}