'use client'

import { useState } from 'react'
import { 
  Target, 
  Zap, 
  Rocket, 
  Heart, 
  Shield,
  Users,
  Globe,
  TrendingUp,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Compass,
  Flag,
  Crown,
  Building2,
  Network,
  Handshake,
  Eye,
  Mountain
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function MissionPage() {
  const [activePillar, setActivePillar] = useState(0)

  const missionPillars = [
    {
      id: 'proactive',
      title: 'Proactive',
      subtitle: 'Anticipating Tomorrow\'s Opportunities',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      description: 'We don\'t wait for opportunities to come to us. We actively seek, create, and shape the future of business through forward-thinking strategies and innovative solutions.',
      principles: [
        'Anticipate market trends before they emerge',
        'Create opportunities rather than wait for them',
        'Implement preventive solutions to avoid problems',
        'Stay ahead of industry developments',
        'Lead change instead of reacting to it'
      ],
      examples: [
        'AI-powered business assessment launched before market demand',
        'UAE expansion positioned ahead of regional growth',
        'Portfolio diversification across emerging sectors',
        'Early adoption of digital transformation tools'
      ],
      quote: 'The future belongs to those who prepare for it today.',
      image: '⚡'
    },
    {
      id: 'pioneer',
      title: 'Pioneer',
      subtitle: 'Blazing New Trails in Investment',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      description: 'We are trailblazers who venture into uncharted territories, establishing new standards and opening pathways for others to follow in the investment landscape.',
      principles: [
        'Explore untapped markets and opportunities',
        'Develop innovative investment strategies',
        'Set new industry standards and best practices',
        'Challenge conventional wisdom',
        'Create new business models and approaches'
      ],
      examples: [
        'First to establish comprehensive UAE-based global investment platform',
        'Pioneered AI-driven business valuation methodology',
        'Created unique 3PL mission framework',
        'Developed cross-cultural investment bridge between East and West'
      ],
      quote: 'Innovation distinguishes between a leader and a follower.',
      image: '🚀'
    },
    {
      id: 'passionate',
      title: 'Passionate',
      subtitle: 'Driven by Purpose and Excellence',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      description: 'Our passion fuels everything we do. We are deeply committed to our clients\' success, our team\'s growth, and creating meaningful impact in the global business community.',
      principles: [
        'Pursue excellence in every endeavor',
        'Maintain enthusiasm for continuous learning',
        'Demonstrate genuine care for client success',
        'Inspire others through our dedication',
        'Find purpose in creating value for all stakeholders'
      ],
      examples: [
        'Mentoring 50+ entrepreneurs since 2023 founding',
        'Achieving $500M+ portfolio value through dedicated effort',
        'Building lasting relationships across 8+ countries',
        'Continuous innovation in service delivery'
      ],
      quote: 'Passion is the fuel that drives extraordinary achievements.',
      image: '❤️'
    },
    {
      id: 'loyal',
      title: 'Loyal',
      subtitle: 'Committed to Long-term Partnerships',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      description: 'We build relationships for decades, not transactions. Our loyalty to clients, partners, and team members creates the foundation for sustainable success and mutual growth.',
      principles: [
        'Honor commitments and maintain trust',
        'Support partners through challenges and successes',
        'Maintain long-term perspective in all relationships',
        'Demonstrate reliability and consistency',
        'Protect and advocate for stakeholder interests'
      ],
      examples: [
        'Long-term strategic partnerships with UAE government entities',
        'Continued support for portfolio companies post-investment',
        'Dedicated relationship managers for VIP clients',
        'Consistent values-based decision making since 2023'
      ],
      quote: 'Loyalty is the foundation upon which all great partnerships are built.',
      image: '🛡️'
    }
  ]

  const missionImpact = [
    {
      metric: '$500M+',
      label: 'Portfolio Value',
      description: 'Created through proactive investment strategies',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      metric: '50+',
      label: 'Entrepreneurs Mentored',
      description: 'Passionate guidance for next generation leaders',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      metric: '8+',
      label: 'Countries',
      description: 'Pioneer presence across global markets',
      icon: Globe,
      color: 'text-purple-600'
    },
    {
      metric: '98%',
      label: 'Client Satisfaction',
      description: 'Loyal partnerships built on trust and results',
      icon: Award,
      color: 'text-amber-600'
    }
  ]

  const visionElements = [
    {
      title: 'Global Bridge',
      description: 'Connecting East and West through strategic investments and partnerships',
      icon: Network,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Innovation Hub',
      description: 'Fostering technological advancement and business innovation',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Value Creation',
      description: 'Generating sustainable value for all stakeholders',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Legacy Building',
      description: 'Creating lasting impact for future generations',
      icon: Mountain,
      color: 'from-amber-500 to-orange-500'
    }
  ]

  const currentPillar = missionPillars[activePillar]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Mission Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500/20 rounded-full floating-element flex items-center justify-center">
          <Zap className="w-8 h-8 text-blue-400" />
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-purple-500/20 rounded-full floating-element flex items-center justify-center" style={{animationDelay: '2s'}}>
          <Rocket className="w-10 h-10 text-purple-400" />
        </div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-red-500/20 rounded-full floating-element flex items-center justify-center" style={{animationDelay: '4s'}}>
          <Heart className="w-6 h-6 text-red-400" />
        </div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-green-500/20 rounded-full floating-element flex items-center justify-center" style={{animationDelay: '6s'}}>
          <Shield className="w-7 h-7 text-green-400" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>Our Mission</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6">
              <span className="text-gradient-gold">3PL</span> Mission
              <br />
              Framework
            </h1>
            
            <div className="text-3xl lg:text-4xl font-serif font-bold mb-8 space-y-2">
              <div className="flex flex-wrap justify-center gap-4">
                <span className="text-blue-300">Proactive</span>
                <span className="text-purple-300">Pioneer</span>
                <span className="text-red-300">Passionate</span>
                <span className="text-green-300">Loyal</span>
              </div>
            </div>
            
            <p className="text-xl text-purple-100 leading-relaxed mb-12">
              Our 3PL mission framework defines who we are and how we operate. These four pillars 
              guide every decision, every partnership, and every investment we make as we build 
              bridges between global markets from our UAE foundation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 hover:from-yellow-500 hover:to-amber-600 text-lg px-8 py-4 rounded-2xl font-semibold">
                <Eye className="mr-2 w-5 h-5" />
                Explore Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 rounded-2xl">
                <Handshake className="mr-2 w-5 h-5" />
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              The Four Pillars of <span className="text-gradient">3PL</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Each pillar represents a core aspect of our identity and approach to business, 
              creating a comprehensive framework for sustainable success.
            </p>
          </div>

          {/* Pillar Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {missionPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                    activePillar === index
                      ? `bg-gradient-to-r ${pillar.color} text-white shadow-xl scale-105`
                      : 'bg-white text-slate-600 hover:bg-purple-50 hover:text-purple-600 shadow-lg'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{pillar.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Pillar Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${currentPillar.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <currentPillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-serif font-bold text-slate-900">{currentPillar.title}</h3>
                    <p className="text-xl text-purple-600 font-semibold">{currentPillar.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {currentPillar.description}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Core Principles</h4>
                  <ul className="space-y-3">
                    {currentPillar.principles.map((principle, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Real-World Examples</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {currentPillar.examples.map((example, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl">
                        <Star className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="glass-card p-8 space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-6">{currentPillar.image}</div>
                  <h4 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                    {currentPillar.title} in Action
                  </h4>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">"</span>
                    </div>
                    <div>
                      <p className="text-slate-700 italic text-lg leading-relaxed">
                        {currentPillar.quote}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-slate-900">Impact Metrics</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="text-2xl font-bold text-gradient">2+</div>
                      <div className="text-sm text-slate-600">Years UAE</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="text-2xl font-bold text-gradient">8+</div>
                      <div className="text-sm text-slate-600">Countries</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="text-2xl font-bold text-gradient">50+</div>
                      <div className="text-sm text-slate-600">Mentored</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="text-2xl font-bold text-gradient">$500M+</div>
                      <div className="text-sm text-slate-600">Portfolio</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Mission in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our 3PL mission framework drives measurable results and creates lasting impact 
              across our global network of partners and portfolio companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionImpact.map((impact, index) => {
              const Icon = impact.icon
              return (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 space-y-4">
                    <Icon className={`w-12 h-12 mx-auto ${impact.color}`} />
                    <div className="text-4xl font-bold text-gradient">{impact.metric}</div>
                    <h3 className="text-xl font-serif font-bold text-slate-900">{impact.label}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{impact.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision & Future */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building on our 3PL foundation, we envision a future where TalyaGlobal serves 
              as the premier bridge between global markets, fostering innovation and creating 
              sustainable value for generations to come.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {visionElements.map((element, index) => {
              const Icon = element.icon
              return (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-12 h-12 mx-auto bg-gradient-to-r ${element.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif font-bold text-slate-900">{element.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{element.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Future Goals */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-serif font-bold mb-6">2025-2030 Strategic Goals</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-yellow-400">$1B+</div>
                <div className="text-purple-100">Portfolio Value Target</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-purple-100">Countries Presence</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-purple-100">Entrepreneurs Mentored</div>
              </div>
            </div>
            <p className="text-xl text-purple-100 mb-8">
              Guided by our 3PL mission, we will continue to be Proactive in identifying opportunities, 
              Pioneer new investment frontiers, remain Passionate about our purpose, and stay Loyal 
              to our partners as we build the future of global investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-purple-50">
                Join Our Mission
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}