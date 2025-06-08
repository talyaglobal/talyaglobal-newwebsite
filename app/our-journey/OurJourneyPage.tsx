'use client'

import { useState } from 'react'
import { 
  GraduationCap, 
  Building2, 
  Rocket, 
  TrendingUp, 
  Users, 
  Globe,
  Award,
  Heart,
  Target,
  Lightbulb,
  Star,
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase,
  Network,
  Handshake,
  BookOpen,
  Zap,
  Crown
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function OurJourneyPage() {
  const [activeChapter, setActiveChapter] = useState(0)

  const journeyChapters = [
    {
      id: 'origins',
      title: 'Humble Beginnings',
      subtitle: 'Son of Two Teachers in Ankara',
      period: '1970s - 1990s',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      description: 'Growing up in an educator family in Turkey\'s capital, where the values of learning, discipline, and service to others were instilled from an early age.',
      keyPoints: [
        'Born into a family of educators in Ankara, Turkey',
        'Learned the importance of education and continuous learning',
        'Developed strong work ethic and analytical thinking',
        'Witnessed firsthand the impact of knowledge on communities',
        'Cultivated respect for different perspectives and cultures'
      ],
      image: '🎓',
      quote: 'Education is the foundation of all success - a lesson learned at the family dinner table.'
    },
    {
      id: 'corporate',
      title: 'Corporate Foundation',
      subtitle: 'Building Professional Excellence',
      period: '1990s - 2000s',
      icon: Building2,
      color: 'from-purple-500 to-blue-500',
      description: 'Transitioning from academic roots to the corporate world, mastering the fundamentals of business, finance, and strategic thinking.',
      keyPoints: [
        'Started career in multinational corporations',
        'Gained expertise in finance and strategic planning',
        'Learned international business practices',
        'Built network across different industries',
        'Developed leadership and team management skills'
      ],
      image: '🏢',
      quote: 'Corporate experience taught me that success comes from understanding both numbers and people.'
    },
    {
      id: 'entrepreneurship',
      title: 'Entrepreneurial Awakening',
      subtitle: 'First Steps into Startups',
      period: '2000s - 2010s',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      description: 'Taking the leap from corporate security to entrepreneurial uncertainty, founding and scaling multiple ventures across different sectors.',
      keyPoints: [
        'Founded first technology startup',
        'Learned the art of building from zero',
        'Experienced both failures and successes',
        'Developed product-market fit expertise',
        'Built first investment portfolio'
      ],
      image: '🚀',
      quote: 'Entrepreneurship is not about avoiding failure, but learning to fail fast and recover faster.'
    },
    {
      id: 'scaling',
      title: 'Scaling Success',
      subtitle: 'Multiple Ventures & Exits',
      period: '2010s - 2020s',
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-500',
      description: 'Successfully scaling multiple companies, achieving significant exits, and establishing a track record of value creation across industries.',
      keyPoints: [
        'Achieved multiple successful exits',
        'Scaled companies to international markets',
        'Developed expertise in M&A transactions',
        'Built reputation as a value creator',
        'Prepared for next chapter in the UAE'
      ],
      image: '📈',
      quote: 'True success is measured not just by personal gains, but by the value created for all stakeholders.'
    },
    {
      id: 'uae-chapter',
      title: 'UAE Foundation',
      subtitle: 'TalyaGlobal Establishment',
      period: '2023 - Present',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      description: 'Establishing TalyaGlobal in the UAE, leveraging decades of experience to create a global investment platform while mentoring the next generation.',
      keyPoints: [
        'Founded TalyaGlobal in the UAE in 2023',
        'Established strategic partnerships with UAE entities',
        'Built international investment network from Dubai base',
        'Launched AI-powered business assessment platform',
        'Created mentoring programs for global entrepreneurs'
      ],
      image: '🏛️',
      quote: 'The UAE provides the perfect bridge between East and West, tradition and innovation.'
    }
  ]

  const milestones = [
    { year: '2023', event: 'Founded TalyaGlobal in UAE', description: 'Established headquarters in Dubai with vision to bridge global markets' },
    { year: '2023', event: 'Strategic UAE Partnerships', description: 'Formed key partnerships with government entities and local investors' },
    { year: '2024', event: 'AI Platform Launch', description: 'Launched AI-powered business assessment and investment tools' },
    { year: '2024', event: 'International Expansion', description: 'Extended operations to 8+ countries from UAE base' },
    { year: '2024', event: 'Portfolio Milestone', description: 'Achieved $175M+ portfolio value and 15+ companies' }
  ]

  const coreValues = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in all business dealings, a value learned from educator parents.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly seeking new solutions and approaches, driven by curiosity and continuous learning.'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Building bridges between cultures, industries, and generations through meaningful partnerships.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest quality in every endeavor, from small details to major strategic decisions.'
    }
  ]

  const networkingPhilosophy = [
    {
      principle: 'Give First',
      description: 'Always look for ways to help others before seeking help yourself',
      icon: '🤲'
    },
    {
      principle: 'Long-term Thinking',
      description: 'Build relationships for decades, not just for immediate transactions',
      icon: '🌱'
    },
    {
      principle: 'Cultural Bridge',
      description: 'Connect people across different cultures and business environments',
      icon: '🌍'
    },
    {
      principle: 'Knowledge Sharing',
      description: 'Share experiences and insights to help others avoid common pitfalls',
      icon: '📚'
    }
  ]

  const currentChapter = journeyChapters[activeChapter]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Our Journey</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              From <span className="text-gradient">Ankara</span> to
              <br />
              UAE Leadership
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              A journey that began in the classrooms of Turkey and evolved into establishing TalyaGlobal 
              in the UAE in 2023, creating a global network of entrepreneurs, investors, and innovators.
            </p>
          </div>

          {/* Journey Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">2+</div>
              <div className="text-slate-600">Years in UAE</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">8+</div>
              <div className="text-slate-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-slate-600">Entrepreneurs Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">$175M+</div>
              <div className="text-slate-600">Portfolio Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Chapters */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              The Journey Unfolds
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Five distinct chapters that shaped our approach to business, investment, and mentoring, 
              culminating in the establishment of TalyaGlobal in the UAE.
            </p>
          </div>

          {/* Chapter Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {journeyChapters.map((chapter, index) => {
              const Icon = chapter.icon
              return (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapter(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                    activeChapter === index
                      ? `bg-gradient-to-r ${chapter.color} text-white shadow-xl scale-105`
                      : 'bg-white text-slate-600 hover:bg-purple-50 hover:text-purple-600 shadow-lg'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:block">{chapter.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Chapter Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${currentChapter.color} rounded-2xl flex items-center justify-center`}>
                    <currentChapter.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">{currentChapter.title}</h3>
                    <p className="text-purple-600 font-semibold">{currentChapter.subtitle}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-6">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-600 font-medium">{currentChapter.period}</span>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {currentChapter.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-slate-900">Key Highlights</h4>
                <ul className="space-y-3">
                  {currentChapter.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{currentChapter.image}</div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Key Learning</h5>
                    <p className="text-slate-700 italic">"{currentChapter.quote}"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="relative">
              <div className="space-y-8">
                {journeyChapters.map((chapter, index) => {
                  const Icon = chapter.icon
                  const isActive = index === activeChapter
                  return (
                    <div
                      key={chapter.id}
                      className={`flex items-center space-x-4 transition-all duration-300 ${
                        isActive ? 'scale-110' : 'opacity-60'
                      }`}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${chapter.color} rounded-2xl flex items-center justify-center shadow-lg ${
                        isActive ? 'shadow-2xl' : ''
                      }`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{chapter.title}</h4>
                        <p className="text-sm text-slate-600">{chapter.period}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              UAE Chapter Milestones
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key achievements since establishing TalyaGlobal in the UAE in 2023.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-left`}>
                    <Card className="glass-card hover:scale-105 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{milestone.event}</h4>
                        <p className="text-slate-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8 bg-white border-4 border-purple-500 rounded-full z-10 my-4 md:my-0">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Values That Guide Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Principles learned from educator parents and refined through decades of business experience, 
              now applied in the dynamic UAE business environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Networking Philosophy */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Networking Philosophy
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building meaningful relationships that create value for all parties involved, 
              leveraging the UAE's position as a global business hub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkingPhilosophy.map((principle, index) => (
              <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-500">
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h3 className="text-lg font-serif font-bold text-slate-900">{principle.principle}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            The UAE Chapter
            <br />
            <span className="text-gradient-gold">Continues</span>
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
            From our UAE base established in 2023, we continue to build bridges between cultures, 
            mentor the next generation of entrepreneurs, and create value through strategic investments 
            and meaningful partnerships across global markets.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center">
                <Network className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold">UAE-Based Global Network</h3>
              <p className="text-purple-200">Connecting entrepreneurs across 8+ countries from Dubai</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold">Rapid Growth</h3>
              <p className="text-purple-200">50+ entrepreneurs mentored since 2023 founding</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold">Portfolio Success</h3>
              <p className="text-purple-200">$175M+ portfolio value achieved in 2 years</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 hover:from-yellow-500 hover:to-amber-600 text-lg px-8 py-4 rounded-2xl font-semibold">
              <Handshake className="mr-2 w-5 h-5" />
              Connect With Us
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 rounded-2xl">
              <BookOpen className="mr-2 w-5 h-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}