'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Brain, 
  Zap, 
  Rocket, 
  Users, 
  Globe, 
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Award,
  Building2,
  DollarSign,
  Clock,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Play,
  ChevronRight,
  Sparkles,
  Code,
  Database,
  Cpu,
  Network
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function VentureAIStudioPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [currentMetric, setCurrentMetric] = useState(0)

  const metrics = [
    { label: 'AI Startups Mentored', value: '50+', icon: Rocket },
    { label: 'Investment Facilitated', value: '$25M+', icon: DollarSign },
    { label: 'Success Rate', value: '85%', icon: TrendingUp },
    { label: 'UAE Partners', value: '15+', icon: Building2 }
  ]

  const programs = [
    {
      title: 'AI Startup Accelerator',
      duration: '6 months',
      investment: '$50K - $500K',
      description: 'Comprehensive program for early-stage AI startups with proven market potential',
      features: [
        'Personalized mentoring from industry experts',
        'Access to TalyaGlobal\'s global network',
        'Technical infrastructure support',
        'Go-to-market strategy development',
        'Investor pitch preparation',
        'Legal and regulatory guidance'
      ],
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'AI Innovation Lab',
      duration: '3 months',
      investment: '$10K - $100K',
      description: 'Intensive program for AI researchers and technical founders',
      features: [
        'Advanced AI research collaboration',
        'Access to cutting-edge computing resources',
        'Patent and IP development support',
        'Technical validation and testing',
        'Research publication opportunities',
        'Industry partnership facilitation'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Scale-Up Program',
      duration: '12 months',
      investment: '$500K - $5M',
      description: 'Growth-stage program for AI companies ready for international expansion',
      features: [
        'International market entry strategy',
        'Strategic partnership development',
        'Advanced funding round preparation',
        'Operational scaling guidance',
        'Global talent acquisition support',
        'Exit strategy planning'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const successStories = [
    {
      company: 'NeuralVision AI',
      sector: 'Computer Vision',
      funding: '$2.5M Series A',
      growth: '+400%',
      description: 'Revolutionary AI-powered medical imaging platform now deployed in 50+ hospitals across the UAE',
      logo: '🔬'
    },
    {
      company: 'SmartLogistics Pro',
      sector: 'Supply Chain AI',
      funding: '$1.8M Seed',
      growth: '+350%',
      description: 'AI-driven logistics optimization platform serving major retailers in the Middle East',
      logo: '📦'
    },
    {
      company: 'FinTech AI Solutions',
      sector: 'Financial AI',
      funding: '$3.2M Series A',
      growth: '+280%',
      description: 'Advanced fraud detection and risk assessment AI for Islamic banking institutions',
      logo: '💰'
    }
  ]

  const mentors = [
    {
      name: 'Dr. Ahmed Al-Rashid',
      title: 'AI Research Director',
      expertise: 'Machine Learning, Computer Vision',
      experience: '15+ years',
      companies: ['Google AI', 'Microsoft Research', 'ADNOC'],
      image: '👨‍💼'
    },
    {
      name: 'Sarah Chen',
      title: 'Venture Partner',
      expertise: 'AI Startups, Product Strategy',
      experience: '12+ years',
      companies: ['Sequoia Capital', 'Andreessen Horowitz', 'Y Combinator'],
      image: '👩‍💼'
    },
    {
      name: 'Prof. Mohammad Hassan',
      title: 'Technical Advisor',
      expertise: 'Deep Learning, NLP',
      experience: '20+ years',
      companies: ['MIT', 'Stanford', 'KAUST'],
      image: '👨‍🏫'
    }
  ]

  const uaePartners = [
    {
      name: 'Abu Dhabi Investment Office',
      type: 'Government Partner',
      description: 'Strategic partnership for startup funding and regulatory support',
      logo: '🏛️'
    },
    {
      name: 'Dubai Future Foundation',
      type: 'Innovation Partner',
      description: 'Collaboration on future technology initiatives and AI research',
      logo: '🚀'
    },
    {
      name: 'ADNOC Technology',
      type: 'Industry Partner',
      description: 'AI applications in energy sector and industrial automation',
      logo: '⚡'
    },
    {
      name: 'Emirates NBD Innovation',
      type: 'Financial Partner',
      description: 'FinTech AI development and banking sector applications',
      logo: '🏦'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
        {/* Floating AI Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full floating-element flex items-center justify-center">
            <Brain className="w-10 h-10 text-purple-500" />
          </div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-full floating-element flex items-center justify-center" style={{animationDelay: '2s'}}>
            <Cpu className="w-8 h-8 text-blue-500" />
          </div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-violet-500/20 rounded-full floating-element flex items-center justify-center" style={{animationDelay: '4s'}}>
            <Network className="w-12 h-12 text-violet-500" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4" />
                <span>UAE AI Innovation Hub</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                <span className="text-gradient">Venture AI</span>
                <br />
                Studio
                <br />
                <span className="text-gradient">UAE</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Empowering the next generation of AI startups in the UAE through world-class mentoring, 
                strategic investments, and access to TalyaGlobal's global network of innovation partners.
              </p>

              {/* Animated Metrics */}
              <div className="flex items-center space-x-8">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon
                  return (
                    <div 
                      key={index}
                      className={`transition-all duration-500 ${
                        currentMetric === index ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon className="w-6 h-6 text-purple-600" />
                        <div>
                          <div className="text-2xl font-bold text-gradient">{metric.value}</div>
                          <div className="text-sm text-slate-600">{metric.label}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#programs" className="btn-primary text-lg px-8 py-4 rounded-2xl inline-flex items-center justify-center">
                  <Rocket className="mr-2 w-5 h-5" />
                  Apply for Program
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="#mentors" className="btn-secondary text-lg px-8 py-4 rounded-2xl inline-flex items-center justify-center">
                  <Users className="mr-2 w-5 h-5" />
                  Become a Mentor
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gradient">50+</div>
                    <div className="text-sm text-slate-600">AI Startups</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">$25M+</div>
                    <div className="text-sm text-slate-600">Invested</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">85%</div>
                    <div className="text-sm text-slate-600">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">15+</div>
                    <div className="text-sm text-slate-600">UAE Partners</div>
                  </div>
                </div>
              </div>
            </div>

            {/* UAE AI Ecosystem Card */}
            <div className="relative">
              <Card className="glass-card p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif font-bold">UAE AI Ecosystem</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <p className="text-slate-600">Leading the Middle East's AI revolution</p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Government Support</span>
                    <span className="text-sm font-semibold text-green-600">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Funding Availability</span>
                    <span className="text-sm font-semibold text-green-600">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Talent Pool</span>
                    <span className="text-sm font-semibold text-blue-600">Growing</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Market Access</span>
                    <span className="text-sm font-semibold text-green-600">Global</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Key Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">FinTech AI</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">HealthTech</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Smart Cities</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Energy AI</span>
                  </div>
                </div>

                <Button className="w-full btn-secondary rounded-xl">
                  <Calendar className="mr-2 w-4 h-4" />
                  Schedule Consultation
                </Button>
              </Card>

              {/* Floating Innovation Indicator */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl border border-white/20">
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-semibold">Innovation Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>Acceleration Programs</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="text-gradient">Accelerate</span> Your
              <br />
              AI Startup Journey
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Choose from our comprehensive programs designed to support AI startups at every stage of growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="glass-card group hover:scale-105 transition-all duration-500">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {program.duration}
                    </span>
                    <div className="text-lg font-bold text-purple-600">{program.investment}</div>
                  </div>
                  <CardTitle className="text-2xl font-serif">{program.title}</CardTitle>
                  <p className="text-slate-600">{program.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className={`h-2 bg-gradient-to-r ${program.color} rounded-full`}></div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Program Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="text-gradient">Success</span> Stories
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Meet the AI startups that have transformed their vision into reality through our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="glass-card group hover:scale-105 transition-all duration-500">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{story.logo}</div>
                    <div className="text-2xl font-bold text-green-600">{story.growth}</div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">{story.company}</h3>
                    <p className="text-sm text-slate-600 mb-2">{story.sector}</p>
                    <p className="text-lg font-semibold text-purple-600 mb-4">{story.funding}</p>
                    <p className="text-slate-600">{story.description}</p>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    Read Case Study
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors & Advisors */}
      <section id="mentors" className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              World-Class <span className="text-gradient">Mentors</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Learn from industry leaders who have built and scaled successful AI companies globally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-500">
                <CardContent className="p-8 space-y-6">
                  <div className="text-6xl mb-4">{mentor.image}</div>
                  
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">{mentor.name}</h3>
                    <p className="text-purple-600 font-semibold mb-2">{mentor.title}</p>
                    <p className="text-sm text-slate-600 mb-4">{mentor.expertise}</p>
                    <p className="text-sm font-medium">{mentor.experience} experience</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Previous Companies:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {mentor.companies.map((company, companyIndex) => (
                        <span key={companyIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    Connect
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Partners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="text-gradient">UAE</span> Strategic Partners
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Collaborating with leading UAE institutions to build a thriving AI ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uaePartners.map((partner, index) => (
              <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-500">
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="font-serif font-bold">{partner.name}</h3>
                  <p className="text-sm text-purple-600 font-semibold">{partner.type}</p>
                  <p className="text-xs text-slate-600">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Ready to Build the
            <br />
            Future of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join Venture AI Studio UAE and transform your AI innovation into a successful, 
            globally competitive startup with our comprehensive support ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-2xl font-semibold">
              <Rocket className="mr-2 w-5 h-5" />
              Apply for Program
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 rounded-2xl">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Mail className="w-8 h-8 mx-auto text-blue-300" />
              <p className="text-sm">Email</p>
              <p className="text-blue-300">ventures@talyaglobal.com</p>
            </div>
            <div className="space-y-2">
              <Phone className="w-8 h-8 mx-auto text-blue-300" />
              <p className="text-sm">Phone</p>
              <p className="text-blue-300">+971 4 XXX XXXX</p>
            </div>
            <div className="space-y-2">
              <MapPin className="w-8 h-8 mx-auto text-blue-300" />
              <p className="text-sm">Location</p>
              <p className="text-blue-300">Dubai, UAE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}