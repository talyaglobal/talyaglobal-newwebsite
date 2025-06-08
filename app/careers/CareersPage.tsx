'use client'

import { useState } from 'react'
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  TrendingUp,
  Award,
  Globe,
  Heart,
  Coffee,
  Zap,
  Target,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Calendar,
  Mail,
  Phone
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  const openPositions = [
    {
      title: 'Senior Investment Analyst',
      department: 'Investment',
      location: 'New York, USA',
      type: 'Full-time',
      experience: '5-7 years',
      salary: '$150K - $200K',
      description: 'Lead investment analysis and due diligence for potential portfolio companies across technology and healthcare sectors.',
      requirements: [
        'MBA or advanced degree in Finance/Economics',
        '5+ years investment banking or private equity experience',
        'Strong financial modeling and valuation skills',
        'Experience with M&A transactions'
      ],
      benefits: ['Equity participation', 'Health insurance', 'Flexible work', '401k matching'],
      urgent: true
    },
    {
      title: 'Portfolio Operations Manager',
      department: 'Operations',
      location: 'London, UK',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '£80K - £120K',
      description: 'Support portfolio companies with operational improvements, strategic planning, and performance optimization.',
      requirements: [
        'Bachelor\'s degree in Business or Engineering',
        '3+ years consulting or operations experience',
        'Strong analytical and problem-solving skills',
        'Experience with process improvement'
      ],
      benefits: ['Performance bonus', 'Health insurance', 'Remote work', 'Professional development'],
      urgent: false
    },
    {
      title: 'Data Scientist - Investment Research',
      department: 'Research',
      location: 'Singapore',
      type: 'Full-time',
      experience: '4-6 years',
      salary: 'S$120K - S$180K',
      description: 'Develop AI-powered investment models and market analysis tools to support investment decision-making.',
      requirements: [
        'PhD or Master\'s in Data Science/Statistics',
        '4+ years experience in financial modeling',
        'Proficiency in Python, R, and SQL',
        'Experience with machine learning algorithms'
      ],
      benefits: ['Stock options', 'Health insurance', 'Flexible hours', 'Learning budget'],
      urgent: false
    },
    {
      title: 'Regional Director - Middle East',
      department: 'Business Development',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '8-12 years',
      salary: 'AED 400K - AED 600K',
      description: 'Lead business development and investment activities across the Middle East region.',
      requirements: [
        'MBA from top-tier business school',
        '8+ years senior management experience',
        'Strong network in Middle East markets',
        'Fluency in Arabic and English'
      ],
      benefits: ['Equity participation', 'Relocation package', 'Car allowance', 'International travel'],
      urgent: true
    },
    {
      title: 'ESG & Sustainability Analyst',
      department: 'Research',
      location: 'Berlin, Germany',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '€70K - €100K',
      description: 'Develop and implement ESG frameworks for portfolio companies and investment decisions.',
      requirements: [
        'Master\'s degree in Environmental Science or related field',
        '2+ years ESG or sustainability experience',
        'Knowledge of ESG reporting standards',
        'Strong communication skills'
      ],
      benefits: ['Performance bonus', 'Health insurance', 'Flexible work', 'Sustainability projects'],
      urgent: false
    },
    {
      title: 'Technology Integration Specialist',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '$130K - $170K',
      description: 'Lead technology integration and digital transformation initiatives across portfolio companies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or Engineering',
        '5+ years enterprise technology experience',
        'Experience with cloud platforms and AI/ML',
        'Strong project management skills'
      ],
      benefits: ['Remote work', 'Stock options', 'Tech allowance', 'Conference attendance'],
      urgent: false
    }
  ]

  const departments = ['all', 'Investment', 'Operations', 'Research', 'Business Development', 'Technology']
  const locations = ['all', 'New York, USA', 'London, UK', 'Singapore', 'Dubai, UAE', 'Berlin, Germany', 'Remote']

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries with performance bonuses and equity participation opportunities',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and generous vacation policies',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths, mentorship programs, and continuous learning opportunities',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'International assignments, cross-cultural experiences, and global networking',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Coffee,
      title: 'Amazing Culture',
      description: 'Collaborative environment, team events, and a culture of innovation and excellence',
      color: 'from-indigo-500 to-blue-600'
    }
  ]

  const companyValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, setting high standards and delivering exceptional results.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and foster a collaborative environment where everyone can contribute.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace innovation and encourage creative thinking to solve complex challenges and drive growth.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and maintain transparency in all our dealings.'
    }
  ]

  const filteredPositions = openPositions.filter(position => {
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         position.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment
    const matchesLocation = selectedLocation === 'all' || position.location === selectedLocation
    
    return matchesSearch && matchesDepartment && matchesLocation
  })

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Join Our Team</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              Build Your Career with
              <br />
              <span className="text-gradient">TalyaGlobal</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Join a world-class team of investment professionals and make a meaningful impact 
              in the global investment landscape. We offer exceptional opportunities for growth, 
              learning, and career advancement.
            </p>
          </div>

          {/* Career Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-slate-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">8+</div>
              <div className="text-slate-600">Global Offices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">95%</div>
              <div className="text-slate-600">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">4.8/5</div>
              <div className="text-slate-600">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Why Work at TalyaGlobal?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer more than just a job – we provide a platform for professional growth, 
              personal development, and meaningful impact in the investment world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore current opportunities to join our growing team across various departments and locations.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    placeholder="Search positions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>
                      {location === 'all' ? 'All Locations' : location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredPositions.map((position, index) => (
              <Card key={index} className="glass-card group hover:scale-[1.02] transition-all duration-500">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                              {position.title}
                            </h3>
                            {position.urgent && (
                              <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">
                                Urgent
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <span className="flex items-center space-x-1">
                              <Briefcase className="w-4 h-4" />
                              <span>{position.department}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{position.location}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{position.type}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed">{position.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.slice(0, 2).map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="font-semibold text-slate-900">Salary</span>
                        </div>
                        <p className="text-green-600 font-bold">{position.salary}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold text-slate-900">Experience</span>
                        </div>
                        <p className="text-slate-600">{position.experience}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-900 text-sm">Benefits:</h4>
                        <div className="flex flex-wrap gap-1">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <span key={benefitIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-3">
                      <Button className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No positions match your search criteria.</p>
              <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Ready to Join Our
            <br />
            <span className="text-gradient-gold">Exceptional</span> Team?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
            Don't see the perfect role? We're always interested in connecting with talented individuals 
            who share our passion for excellence and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 hover:from-yellow-500 hover:to-amber-600 text-lg px-8 py-4 rounded-2xl font-semibold">
              <Briefcase className="mr-2 w-5 h-5" />
              View All Positions
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 rounded-2xl">
              <Mail className="mr-2 w-5 h-5" />
              Send Your Resume
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Mail className="w-8 h-8 mx-auto text-yellow-400" />
              <p className="text-sm">Careers Email</p>
              <p className="text-yellow-400">careers@talyaglobal.com</p>
            </div>
            <div className="space-y-2">
              <Phone className="w-8 h-8 mx-auto text-yellow-400" />
              <p className="text-sm">HR Hotline</p>
              <p className="text-yellow-400">+1 (555) CAREERS</p>
            </div>
            <div className="space-y-2">
              <Users className="w-8 h-8 mx-auto text-yellow-400" />
              <p className="text-sm">LinkedIn</p>
              <p className="text-yellow-400">Follow @TalyaGlobal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}