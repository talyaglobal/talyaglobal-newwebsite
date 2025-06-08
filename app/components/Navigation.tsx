'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Sparkles, Crown, Brain, BarChart3, Building2, Target } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'About', href: '/about' },
    { name: 'Our Journey', href: '/our-journey' },
    { name: 'Mission', href: '/mission' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Team', href: '/team' },
    { name: 'Services', href: '/services' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-r from-purple-100/95 via-blue-100/95 to-purple-100/95 backdrop-blur-xl shadow-2xl border-b border-purple-200/30' 
        : 'bg-gradient-to-r from-purple-100/90 via-blue-100/90 to-purple-100/90 backdrop-blur-sm'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Now clickable to home */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
                TalyaGlobal
              </span>
              <span className="text-xs text-slate-500 -mt-1 font-medium">Investment & Consultancy</span>
            </div>
          </Link>

          {/* Desktop Navigation - Updated order with Mission */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link group"
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Removed AI Assessment and ROI Calculator */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/venture-ai-studio" className="btn-ghost group flex items-center">
              <Building2 className="mr-2 w-4 h-4 text-green-500" />
              <span>Venture AI Studio</span>
            </Link>
            <Link href="/vip-zone" className="btn-ghost group flex items-center">
              <Crown className="mr-2 w-4 h-4 text-amber-500" />
              <span>VIP Zone</span>
            </Link>
            <Link href="/vip-login" className="btn-ghost group flex items-center">
              <span>Login</span>
            </Link>
            <Link href="/contact" className="btn-primary group">
              <span>Get Started</span>
              <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-2xl text-slate-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-2 glass-card rounded-3xl mt-4 mb-4 shadow-2xl">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-4 text-slate-700 hover:text-purple-600 hover:bg-purple-50 rounded-2xl mx-4 transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6 px-4 space-y-3">
              <Link href="/venture-ai-studio" className="block w-full text-center btn-ghost">
                <Building2 className="mr-2 w-4 h-4 text-green-500 inline" />
                Venture AI Studio
              </Link>
              <Link href="/vip-zone" className="block w-full text-center btn-ghost">
                <Crown className="mr-2 w-4 h-4 text-amber-500 inline" />
                VIP Zone
              </Link>
              <Link href="/vip-login" className="block w-full text-center btn-ghost">
                Login
              </Link>
              <Link href="/contact" className="block w-full text-center btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}