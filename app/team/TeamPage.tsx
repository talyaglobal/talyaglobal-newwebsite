'use client'

import { useState } from 'react'
import { 
  Users, 
  Linkedin, 
  Mail, 
  Award, 
  Building2, 
  GraduationCap,
  MapPin,
  Calendar,
  TrendingUp,
  Globe,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TeamPage() {
  const [expandedBio, setExpandedBio] = useState<number | null>(null)

  const leadership = [
    {
      name: 'Alexander Petrov',
      position: 'Chief Executive Officer & Founder',
      image: '👨‍💼',
      location: 'New York, USA',
      experience: '25+ years',
      education: 'MBA Harvard Business School, MS Stanford University',
      specialization: 'Strategic Planning, M&A, Global Investments',
      bio: 'Alexander founded TalyaGlobal with a vision to create sustainable value through strategic investments across global markets. With over 25 years of experience in private equity, investment banking, and corporate strategy, he has led over $2B in successful transactions. Prior to TalyaGlobal, Alexander was a Managing Director at Goldman Sachs and later founded two successful startups in the technology sector.',
      achievements: [
        'Led $2B+ in successful transactions',
        'Founded 2 successful tech startups',
        'Former Goldman Sachs Managing Director',
        'Board member of 12+ companies',
        'Forbes 40 Under 40 Financiers (2010)'
      ],
      languages: ['English', 'Russian', 'German', 'Mandarin'],
      linkedin: '#',
      email: 'alexander@talyaglobal.com'
    },
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Investment Officer',
      image: '👩‍💼',
      location: 'Singapore',
      experience: '20+ years',
      education: 'PhD Finance MIT, MBA Wharton',
      specialization: 'Portfolio Management, Technology Investments, Risk Analysis',
      bio: 'Dr. Chen oversees investment strategy and portfolio management across TalyaGlobal\'s diverse holdings. Her expertise spans technology, healthcare, and emerging markets with a proven track record of generating exceptional returns. She previously served as Head of Asia-Pacific Investments at Sequoia Capital and was a Principal at McKinsey & Company.',
      achievements: [
        'Generated 35%+ IRR over 15 years',
        'Led investments in 50+ companies',
        'Former Sequoia Capital Partner',
        'Published 25+ research papers',
        'CFA Charter holder'
      ],
      languages: ['English', 'Mandarin', 'Japanese', 'Korean'],
      linkedin: '#',
      email: 'sarah@talyaglobal.com'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Operating Officer',
      image: '👨‍💼',
      location: 'London, UK',
      experience: '18+ years',
      education: 'MBA London Business School, MS Engineering Cambridge',
      specialization: 'Operations Excellence, Digital Transformation, Process Optimization',
      bio: 'Michael leads operational excellence across TalyaGlobal\'s portfolio companies. He specializes in scaling operations, digital transformation, and sustainable business practices. His engineering background combined with business expertise has helped numerous companies achieve 3x+ operational efficiency improvements.',
      achievements: [
        'Scaled 15+ companies to $100M+ revenue',
        'Led digital transformation at 25+ companies',
        'Former McKinsey Principal for 8 years',
        'Operational efficiency expert',
        'Sustainability advocate'
      ],
      languages: ['English', 'Spanish', 'Portuguese', 'French'],
      linkedin: '#',
      email: 'michael@talyaglobal.com'
    },
    {
      name: 'Dr. Elena Volkov',
      position: 'Head of Research & Analytics',
      image: '👩‍🔬',
      location: 'Berlin, Germany',
      experience: '15+ years',
      education: 'PhD Economics Oxford, MS Mathematics Moscow State',
      specialization: 'Market Research, Data Analytics, Economic Modeling',
      bio: 'Dr. Volkov leads TalyaGlobal\'s research and analytics division, providing data-driven insights that inform investment decisions. Her quantitative approach and deep understanding of global markets have been instrumental in identifying high-potential opportunities across diverse sectors.',
      achievements: [
        'Developed proprietary AI valuation models',
        'Published 40+ economic research papers',
        'Former Oxford Economics Professor',
        'Expert in quantitative analysis',
        'Fluent in 6 languages'
      ],
      languages: ['English', 'Russian', 'German', 'French', 'Italian', 'Spanish'],
      linkedin: '#',
      email: 'elena@talyaglobal.com'
    }
  ]

  const advisors = [
    {
      name: 'Prof. James Wilson',
      role: 'Strategic Advisor',
      expertise: 'Former CEO Fortune 500 Tech Company',
      image: '👨‍🏫',
      description: '30+ years leading technology companies including 15 years as CEO of a Fortune 500 enterprise software company.'
    },
    {
      name: 'Dr. Lisa Parker',
      role: 'Healthcare Innovation Advisor',
      expertise: 'Medical Technology & Innovation',
      image: '👩‍⚕️',
      description: 'Pioneer in medical technology with 20+ patents and former Chief Medical Officer at leading healthcare companies.'
    },
    {
      name: 'Robert Chang',
      role: 'Global Markets Strategist',
      expertise: 'International Finance & Markets',
      image: '👨‍💼',
      description: 'Former Managing Director at JP Morgan with expertise in Asian markets and international expansion strategies.'
    },
    {
      name: 'Maria Santos',
      role: 'ESG & Sustainability Leader',
      expertise: 'Environmental & Social Governance',
      image: '👩‍💼',
      description: 'Leading expert in sustainable investing and ESG frameworks with experience at major institutional investors.'
    }
  ]

  const departments = [
    {
      name: 'Investment Team',
      count: 12,
      description: 'Experienced investment professionals across multiple sectors and geographies',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Operations Team',
      count: 8,
      description: 'Operational excellence specialists supporting portfolio companies',
      icon: Building2,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Research & Analytics',
      count: 6,
      description: 'Data scientists and market researchers providing investment insights',
      icon: Award,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Global Network',
      count: 15,
      description: 'Regional representatives and partners across 8+ countries',
      icon: Globe,
      color: 'from-amber-500 to-orange-600'
    }
  ]

  const toggleBio = (index: number) => {
    setExpandedBio(expandedBio === index ? null : index)
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Our Team</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              Meet the <span className="text-gradient">Visionaries</span>
              <br />
              Behind TalyaGlobal
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Our diverse team of investment professionals, operational experts, and strategic advisors 
              brings together decades of experience across global markets and industries.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-slate-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">200+</div>
              <div className="text-slate-600">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">15+</div>
              <div className="text-slate-600">Languages Spoken</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">8+</div>
              <div className="text-slate-600">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our experienced leadership team combines decades of investment expertise with operational excellence, 
              driving superior results for our investors and portfolio companies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <Card key={index} className="glass-card group hover:scale-[1.02] transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 text-6xl flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        {leader.image}
                      </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                          {leader.name}
                        </h3>
                        <p className="text-purple-600 font-semibold">{leader.position}</p>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-600">{leader.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-600">{leader.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2 col-span-2">
                          <GraduationCap className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-600 text-xs">{leader.education}</span>
                        </div>
                      </div>

                      {/* Specialization */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-900">Specialization</h4>
                        <p className="text-slate-600 text-sm">{leader.specialization}</p>
                      </div>

                      {/* Bio Toggle */}
                      <div className="space-y-3">
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {expandedBio === index ? leader.bio : `${leader.bio.substring(0, 150)}...`}
                        </p>
                        <button
                          onClick={() => toggleBio(index)}
                          className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors"
                        >
                          <span>{expandedBio === index ? 'Show Less' : 'Read More'}</span>
                          {expandedBio === index ? 
                            <ChevronUp className="w-4 h-4" /> : 
                            <ChevronDown className="w-4 h-4" />
                          }
                        </button>
                      </div>

                      {/* Achievements (when expanded) */}
                      {expandedBio === index && (
                        <div className="space-y-3 pt-4 border-t border-slate-200">
                          <h4 className="font-semibold text-slate-900">Key Achievements</h4>
                          <ul className="space-y-1">
                            {leader.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-sm">
                                <Star className="w-3 h-3 text-amber-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Languages */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-900 text-sm">Languages</h4>
                        <div className="flex flex-wrap gap-1">
                          {leader.languages.map((language, langIndex) => (
                            <span key={langIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="flex space-x-3 pt-2">
                        <Button size="sm" variant="outline" className="flex items-center space-x-1">
                          <Linkedin className="w-4 h-4" />
                          <span>LinkedIn</span>
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center space-x-1">
                          <Mail className="w-4 h-4" />
                          <span>Contact</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Our Departments
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized teams working together to deliver exceptional results across all aspects of investment and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon
              return (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 space-y-4">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${dept.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900">{dept.name}</h3>
                    <div className="text-3xl font-bold text-gradient">{dept.count}</div>
                    <p className="text-slate-600 text-sm leading-relaxed">{dept.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Advisory Board
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our distinguished advisory board provides strategic guidance and industry expertise 
              across all major sectors of our investment focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-500">
                <CardContent className="p-8 space-y-4">
                  <div className="text-6xl mb-4">{advisor.image}</div>
                  <h3 className="text-xl font-serif font-bold text-slate-900">{advisor.name}</h3>
                  <p className="text-purple-600 font-semibold text-sm">{advisor.role}</p>
                  <p className="text-slate-600 text-sm font-medium">{advisor.expertise}</p>
                  <p className="text-slate-600 text-xs leading-relaxed">{advisor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Join Our <span className="text-gradient-gold">World-Class</span> Team
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
            We're always looking for exceptional talent to join our growing team. 
            Explore opportunities to make a meaningful impact in the world of global investments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 hover:from-yellow-500 hover:to-amber-600 text-lg px-8 py-4 rounded-2xl font-semibold">
              <Users className="mr-2 w-5 h-5" />
              View Open Positions
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 rounded-2xl">
              <Mail className="mr-2 w-5 h-5" />
              Contact HR
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}