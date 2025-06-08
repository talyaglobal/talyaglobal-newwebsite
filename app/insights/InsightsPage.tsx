'use client'

import { useState } from 'react'
import { 
  TrendingUp, 
  BarChart3, 
  Globe, 
  DollarSign, 
  Users,
  Calendar,
  Download,
  Share2,
  Eye,
  ArrowRight,
  Filter,
  Search,
  BookOpen,
  Lightbulb,
  Target,
  Award,
  Building2,
  Zap
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const insightCategories = [
    { id: 'all', name: 'All Insights', count: 24 },
    { id: 'market-trends', name: 'Market Trends', count: 8 },
    { id: 'investment-strategy', name: 'Investment Strategy', count: 6 },
    { id: 'uae-business', name: 'UAE Business', count: 5 },
    { id: 'technology', name: 'Technology', count: 3 },
    { id: 'global-markets', name: 'Global Markets', count: 2 }
  ]

  const featuredInsights = [
    {
      id: 1,
      title: 'UAE Investment Landscape 2024: Opportunities and Challenges',
      excerpt: 'Comprehensive analysis of the UAE\'s evolving investment ecosystem and emerging opportunities for global investors.',
      category: 'uae-business',
      readTime: '8 min read',
      publishDate: '2024-12-15',
      author: 'TalyaGlobal Research Team',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      featured: true,
      tags: ['UAE', 'Investment', 'Market Analysis', '2024 Trends']
    },
    {
      id: 2,
      title: 'AI-Powered Business Valuation: The Future of Due Diligence',
      excerpt: 'How artificial intelligence is revolutionizing business assessment and creating more accurate valuation models.',
      category: 'technology',
      readTime: '6 min read',
      publishDate: '2024-12-10',
      author: 'Dr. Sarah Chen',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      featured: true,
      tags: ['AI', 'Technology', 'Valuation', 'Innovation']
    },
    {
      id: 3,
      title: 'Global Market Outlook: Navigating Uncertainty in 2025',
      excerpt: 'Strategic insights for investors looking to capitalize on emerging opportunities while managing global market volatility.',
      category: 'global-markets',
      readTime: '10 min read',
      publishDate: '2024-12-05',
      author: 'Alexander Petrov',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      featured: true,
      tags: ['Global Markets', 'Strategy', '2025 Outlook', 'Risk Management']
    }
  ]

  const insights = [
    {
      id: 4,
      title: 'The Rise of Sustainable Investing in the Middle East',
      excerpt: 'ESG principles are reshaping investment strategies across the region.',
      category: 'investment-strategy',
      readTime: '5 min read',
      publishDate: '2024-11-28',
      author: 'Elena Volkov',
      views: 1250,
      tags: ['ESG', 'Sustainability', 'Middle East']
    },
    {
      id: 5,
      title: 'Digital Transformation ROI: Measuring Success in 2024',
      excerpt: 'Key metrics and benchmarks for evaluating digital transformation investments.',
      category: 'technology',
      readTime: '7 min read',
      publishDate: '2024-11-20',
      author: 'Michael Rodriguez',
      views: 980,
      tags: ['Digital Transformation', 'ROI', 'Metrics']
    },
    {
      id: 6,
      title: 'Cross-Border M&A: Opportunities in Emerging Markets',
      excerpt: 'Strategic considerations for international mergers and acquisitions.',
      category: 'market-trends',
      readTime: '9 min read',
      publishDate: '2024-11-15',
      author: 'TalyaGlobal Research Team',
      views: 1450,
      tags: ['M&A', 'Emerging Markets', 'Strategy']
    },
    {
      id: 7,
      title: 'UAE Startup Ecosystem: A Gateway to Global Markets',
      excerpt: 'How the UAE is becoming a launchpad for international expansion.',
      category: 'uae-business',
      readTime: '6 min read',
      publishDate: '2024-11-10',
      author: 'Sarah Chen',
      views: 2100,
      tags: ['UAE', 'Startups', 'Global Expansion']
    },
    {
      id: 8,
      title: 'Portfolio Diversification in Volatile Markets',
      excerpt: 'Risk management strategies for uncertain economic conditions.',
      category: 'investment-strategy',
      readTime: '8 min read',
      publishDate: '2024-11-05',
      author: 'Alexander Petrov',
      views: 1680,
      tags: ['Portfolio Management', 'Risk', 'Diversification']
    }
  ]

  const marketData = [
    { metric: 'UAE GDP Growth', value: '+3.4%', trend: 'up', description: 'Q3 2024 vs Q3 2023' },
    { metric: 'Global VC Funding', value: '$285B', trend: 'down', description: 'YTD 2024' },
    { metric: 'MENA Startup Exits', value: '47', trend: 'up', description: '2024 Total' },
    { metric: 'AI Investment Growth', value: '+156%', trend: 'up', description: 'Year over Year' }
  ]

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = activeCategory === 'all' || insight.category === activeCategory
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4" />
              <span>Market Insights</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              Investment <span className="text-gradient">Insights</span>
              <br />
              & Market Intelligence
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Stay ahead of market trends with our expert analysis, research reports, and strategic insights 
              from TalyaGlobal's investment professionals and global network.
            </p>
          </div>

          {/* Market Data Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {marketData.map((data, index) => (
              <Card key={index} className="glass-card text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className={`w-5 h-5 ${data.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{data.value}</div>
                  <div className="text-sm font-medium text-slate-700 mb-1">{data.metric}</div>
                  <div className="text-xs text-slate-500">{data.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Featured Insights</h2>
            <p className="text-slate-600">Our latest research and analysis on key market developments</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredInsights.map((insight, index) => (
              <Card key={insight.id} className="glass-card group hover:scale-[1.02] transition-all duration-500">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-xs text-slate-600">
                    <span>{insight.category.replace('-', ' ')}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                    <span>•</span>
                    <span>{new Date(insight.publishDate).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {insight.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {insight.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-slate-600">By {insight.author}</span>
                    <Button size="sm" className="group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Insights */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900">All Insights</h2>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Report</span>
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-2">
                {insightCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-slate-600 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Insights List */}
          <div className="space-y-6">
            {filteredInsights.map((insight, index) => (
              <Card key={insight.id} className="glass-card group hover:scale-[1.01] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-3 space-y-3">
                      <div className="flex items-center space-x-4 text-xs text-slate-600">
                        <span className="capitalize">{insight.category.replace('-', ' ')}</span>
                        <span>•</span>
                        <span>{insight.readTime}</span>
                        <span>•</span>
                        <span>{new Date(insight.publishDate).toLocaleDateString()}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{insight.views} views</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                        {insight.title}
                      </h3>
                      
                      <p className="text-slate-600">
                        {insight.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {insight.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-slate-600">By {insight.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <Button className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        Read Article
                      </Button>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredInsights.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No insights match your search criteria.</p>
              <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Stay Ahead of
            <br />
            <span className="text-gradient-gold">Market Trends</span>
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
            Subscribe to our weekly insights newsletter and get exclusive access to market analysis, 
            investment opportunities, and strategic insights from our global network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-12">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder-white/60"
            />
            <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 hover:from-yellow-500 hover:to-amber-600">
              Subscribe
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <BookOpen className="w-8 h-8 mx-auto text-yellow-400" />
              <p className="text-sm">Weekly Insights</p>
              <p className="text-yellow-400">Market Analysis & Trends</p>
            </div>
            <div className="space-y-2">
              <Target className="w-8 h-8 mx-auto text-yellow-400" />
              <p className="text-sm">Exclusive Access</p>
              <p className="text-yellow-400">Investment Opportunities</p>
            </div>
            <div className="space-y-2">
              <Award className="w-8 h-8 mx-auto text-yellow-400" />
              <p className="text-sm">Expert Analysis</p>
              <p className="text-yellow-400">From Global Professionals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}