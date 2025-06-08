'use client'

import { useState } from 'react'
import { 
  Download, 
  FileText, 
  Video, 
  BookOpen, 
  Calculator,
  Brain,
  BarChart3,
  Users,
  Globe,
  Search,
  Filter,
  Star,
  Eye,
  Calendar,
  ArrowRight,
  Play,
  Lock,
  Crown,
  Target,
  Lightbulb,
  Award,
  Zap
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'

export function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const resourceCategories = [
    { id: 'all', name: 'All Resources', count: 45, icon: BookOpen },
    { id: 'tools', name: 'Tools & Calculators', count: 8, icon: Calculator },
    { id: 'guides', name: 'Investment Guides', count: 12, icon: FileText },
    { id: 'videos', name: 'Video Content', count: 15, icon: Video },
    { id: 'reports', name: 'Market Reports', count: 6, icon: BarChart3 },
    { id: 'templates', name: 'Templates', count: 4, icon: Target }
  ]

  const featuredResources = [
    {
      id: 1,
      title: 'AI Business Assessment Tool',
      description: 'Discover your company\'s hidden value with our AI-powered assessment platform',
      type: 'tool',
      category: 'tools',
      access: 'free',
      rating: 4.9,
      users: 2500,
      image: '🤖',
      link: '/ai-assessment',
      featured: true
    },
    {
      id: 2,
      title: 'ROI Investment Calculator',
      description: 'Calculate potential returns on investment with our advanced modeling tool',
      type: 'tool',
      category: 'tools',
      access: 'free',
      rating: 4.8,
      users: 1800,
      image: '📊',
      link: '/roi-calculator',
      featured: true
    },
    {
      id: 3,
      title: 'Complete Guide to UAE Investment',
      description: 'Comprehensive 50-page guide covering all aspects of investing in the UAE market',
      type: 'guide',
      category: 'guides',
      access: 'vip',
      rating: 4.9,
      downloads: 850,
      image: '📖',
      link: '/resources/uae-investment-guide',
      featured: true
    }
  ]

  const resources = [
    {
      id: 4,
      title: 'Investment Due Diligence Checklist',
      description: 'Comprehensive checklist for evaluating investment opportunities',
      type: 'template',
      category: 'templates',
      access: 'free',
      downloads: 1200,
      fileSize: '2.5 MB',
      format: 'PDF'
    },
    {
      id: 5,
      title: 'Global Market Trends 2024 Report',
      description: 'Annual report analyzing global investment trends and opportunities',
      type: 'report',
      category: 'reports',
      access: 'vip',
      downloads: 650,
      fileSize: '15.8 MB',
      format: 'PDF'
    },
    {
      id: 6,
      title: 'Portfolio Diversification Strategies',
      description: 'Video series on building resilient investment portfolios',
      type: 'video',
      category: 'videos',
      access: 'free',
      duration: '45 min',
      views: 3200
    },
    {
      id: 7,
      title: 'Startup Valuation Methods',
      description: 'Detailed guide on various approaches to startup valuation',
      type: 'guide',
      category: 'guides',
      access: 'free',
      downloads: 980,
      fileSize: '8.2 MB',
      format: 'PDF'
    },
    {
      id: 8,
      title: 'ESG Investment Framework',
      description: 'Template for evaluating environmental, social, and governance factors',
      type: 'template',
      category: 'templates',
      access: 'vip',
      downloads: 420,
      fileSize: '3.1 MB',
      format: 'Excel'
    },
    {
      id: 9,
      title: 'AI in Investment Management',
      description: 'Webinar series on artificial intelligence applications in finance',
      type: 'video',
      category: 'videos',
      access: 'vip',
      duration: '2 hours',
      views: 1500
    }
  ]

  const tools = [
    {
      name: 'AI Business Assessment',
      description: 'Comprehensive business valuation using AI',
      icon: Brain,
      link: '/ai-assessment',
      color: 'from-purple-500 to-blue-500'
    },
    {
      name: 'ROI Calculator',
      description: 'Calculate investment returns and projections',
      icon: Calculator,
      link: '/roi-calculator',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Portfolio Analyzer',
      description: 'Analyze and optimize your investment portfolio',
      icon: BarChart3,
      link: '/portfolio-analyzer',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Market Screener',
      description: 'Screen and filter investment opportunities',
      icon: Target,
      link: '/market-screener',
      color: 'from-amber-500 to-orange-500'
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getAccessBadge = (access: string) => {
    if (access === 'vip') {
      return (
        <span className="inline-flex items-center px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
          <Crown className="w-3 h-3 mr-1" />
          VIP Only
        </span>
      )
    }
    return (
      <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
        Free
      </span>
    )
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'tool': return Calculator
      case 'guide': return BookOpen
      case 'video': return Video
      case 'report': return BarChart3
      case 'template': return FileText
      default: return FileText
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Investment Resources</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              Investment <span className="text-gradient">Resources</span>
              <br />
              & Tools
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Access our comprehensive library of investment tools, guides, templates, and educational content 
              designed to help you make informed investment decisions and grow your portfolio.
            </p>
          </div>

          {/* Resource Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">45+</div>
              <div className="text-slate-600">Resources Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">15K+</div>
              <div className="text-slate-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">8</div>
              <div className="text-slate-600">Interactive Tools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">4.8/5</div>
              <div className="text-slate-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Interactive Tools
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powerful tools to help you analyze investments, calculate returns, and make data-driven decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 space-y-4">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900">{tool.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{tool.description}</p>
                    <Button className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      Launch Tool
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Featured Resources
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our most popular and highly-rated resources for investors and entrepreneurs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={resource.id} className="glass-card group hover:scale-[1.02] transition-all duration-500">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{resource.image}</div>
                    <div className="flex items-center space-x-2">
                      {getAccessBadge(resource.access)}
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500" />
                        <span>{resource.rating}</span>
                      </div>
                      {resource.users && (
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{resource.users} users</span>
                        </div>
                      )}
                      {resource.downloads && (
                        <div className="flex items-center space-x-1">
                          <Download className="w-4 h-4" />
                          <span>{resource.downloads}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    {resource.type === 'tool' ? 'Launch Tool' : 'Access Resource'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900">All Resources</h2>
          </div>

          {/* Search and Filters */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-2">
                {resourceCategories.map(category => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-white text-slate-600 hover:bg-purple-50 hover:text-purple-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Resources List */}
          <div className="space-y-4">
            {filteredResources.map((resource, index) => {
              const TypeIcon = getTypeIcon(resource.type)
              return (
                <Card key={resource.id} className="glass-card group hover:scale-[1.01] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-5 gap-6 items-center">
                      <div className="md:col-span-3 space-y-3">
                        <div className="flex items-center space-x-3">
                          <TypeIcon className="w-5 h-5 text-purple-600" />
                          <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                            {resource.title}
                          </h3>
                          {getAccessBadge(resource.access)}
                        </div>
                        
                        <p className="text-slate-600">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          {resource.downloads && (
                            <div className="flex items-center space-x-1">
                              <Download className="w-4 h-4" />
                              <span>{resource.downloads} downloads</span>
                            </div>
                          )}
                          {resource.views && (
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{resource.views} views</span>
                            </div>
                          )}
                          {resource.fileSize && (
                            <span>{resource.fileSize}</span>
                          )}
                          {resource.format && (
                            <span>{resource.format}</span>
                          )}
                          {resource.duration && (
                            <span>{resource.duration}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 flex flex-col space-y-2">
                        <Button className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          {resource.access === 'vip' ? (
                            <>
                              <Lock className="mr-2 w-4 h-4" />
                              VIP Access
                            </>
                          ) : resource.type === 'video' ? (
                            <>
                              <Play className="mr-2 w-4 h-4" />
                              Watch Now
                            </>
                          ) : (
                            <>
                              <Download className="mr-2 w-4 h-4" />
                              Download
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No resources match your search criteria.</p>
              <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* VIP Access CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Unlock <span className="text-gradient-gold">Premium</span>
            <br />
            Resources
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
            Get exclusive access to advanced tools, detailed market reports, and premium content 
            with TalyaGlobal VIP membership.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center">
                <Crown className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold">VIP Resources</h3>
              <p className="text-purple-200">Access to premium guides, reports, and templates</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold">Advanced Tools</h3>
              <p className="text-purple-200">Enhanced calculators and analysis platforms</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold">Expert Support</h3>
              <p className="text-purple-200">Direct access to our investment professionals</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 hover:from-yellow-500 hover:to-amber-600 text-lg px-8 py-4 rounded-2xl font-semibold">
              <Crown className="mr-2 w-5 h-5" />
              Upgrade to VIP
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 rounded-2xl">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}