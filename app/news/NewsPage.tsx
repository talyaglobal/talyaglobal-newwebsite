'use client'

import { useState } from 'react'
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  TrendingUp,
  Globe,
  Building2,
  Zap,
  Award,
  Eye,
  Share2,
  BookOpen,
  ChevronRight,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')

  const newsArticles = [
    {
      id: 1,
      title: 'TalyaGlobal Announces $50M Investment in AI Healthcare Platform',
      excerpt: 'Strategic investment in revolutionary diagnostic technology marks expansion into healthcare sector with focus on AI-powered medical solutions.',
      content: 'TalyaGlobal has announced a significant $50 million investment in MedAI Solutions, a cutting-edge healthcare technology company developing AI-powered diagnostic platforms...',
      category: 'Investment',
      date: '2024-12-15',
      author: 'Sarah Chen',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      featured: true,
      tags: ['Healthcare', 'AI', 'Investment', 'Technology']
    },
    {
      id: 2,
      title: 'US Gourmet Distribution Achieves 400% Growth Under TalyaGlobal Partnership',
      excerpt: 'Portfolio company success story demonstrates TalyaGlobal\'s operational excellence and strategic guidance capabilities.',
      content: 'US Gourmet Distribution, a key portfolio company of TalyaGlobal, has achieved remarkable 400% growth over the past three years...',
      category: 'Portfolio Update',
      date: '2024-12-10',
      author: 'Michael Rodriguez',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      featured: false,
      tags: ['Portfolio', 'Growth', 'Food Distribution', 'Success Story']
    },
    {
      id: 3,
      title: 'TalyaGlobal Expands to Middle East with Dubai Office Opening',
      excerpt: 'New regional headquarters in Dubai strengthens presence in rapidly growing Middle Eastern markets.',
      content: 'TalyaGlobal has officially opened its new regional headquarters in Dubai, marking a significant expansion into the Middle East market...',
      category: 'Company News',
      date: '2024-12-05',
      author: 'Alexander Petrov',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      featured: false,
      tags: ['Expansion', 'Middle East', 'Dubai', 'Global Growth']
    },
    {
      id: 4,
      title: 'Sustainable Investing: TalyaGlobal\'s ESG Framework Drives Portfolio Performance',
      excerpt: 'Comprehensive ESG integration across portfolio companies delivers superior returns while creating positive impact.',
      content: 'TalyaGlobal\'s commitment to Environmental, Social, and Governance (ESG) principles has not only created positive impact but also driven superior financial performance...',
      category: 'Market Insights',
      date: '2024-11-28',
      author: 'Dr. Elena Volkov',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      featured: false,
      tags: ['ESG', 'Sustainability', 'Performance', 'Impact Investing']
    },
    {
      id: 5,
      title: 'AI-Powered Investment Analysis: The Future of Due Diligence',
      excerpt: 'TalyaGlobal pioneers advanced AI tools for investment analysis, setting new industry standards for due diligence.',
      content: 'TalyaGlobal has developed proprietary AI-powered investment analysis tools that are revolutionizing the due diligence process...',
      category: 'Technology',
      date: '2024-11-20',
      author: 'Sarah Chen',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      featured: false,
      tags: ['AI', 'Technology', 'Due Diligence', 'Innovation']
    },
    {
      id: 6,
      title: 'Global Economic Outlook: Navigating Uncertainty with Strategic Investments',
      excerpt: 'TalyaGlobal\'s leadership shares insights on global economic trends and strategic investment opportunities.',
      content: 'In an increasingly complex global economic environment, TalyaGlobal\'s investment strategy focuses on identifying resilient opportunities...',
      category: 'Market Insights',
      date: '2024-11-15',
      author: 'Alexander Petrov',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      featured: false,
      tags: ['Global Economy', 'Strategy', 'Market Analysis', 'Investment']
    }
  ]

  const categories = ['all', 'Investment', 'Portfolio Update', 'Company News', 'Market Insights', 'Technology']
  const years = ['all', '2024', '2023', '2022']

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesYear = selectedYear === 'all' || article.date.startsWith(selectedYear)
    
    return matchesSearch && matchesCategory && matchesYear
  })

  const featuredArticle = newsArticles.find(article => article.featured)
  const recentArticles = newsArticles.filter(article => !article.featured).slice(0, 5)

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'Investment': return 'text-orange-500'
      case 'Portfolio Update': return 'text-blue-500'
      case 'Company News': return 'text-green-500'
      case 'Market Insights': return 'text-purple-500'
      case 'Technology': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Investment': return TrendingUp
      case 'Portfolio Update': return Building2
      case 'Company News': return Globe
      case 'Market Insights': return Award
      case 'Technology': return Zap
      default: return BookOpen
    }
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>News & Insights</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              Latest <span className="text-gradient">News</span> &
              <br />
              Market Insights
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Stay informed with the latest developments from TalyaGlobal, our portfolio companies, 
              and insights into global investment trends and market opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Featured Story</h2>
            </div>
            
            <Card className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-sm text-slate-600">
                      <span className="flex items-center space-x-1">
                        <Tag className="w-4 h-4" />
                        <span>{featuredArticle.category}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredArticle.date)}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-600">By {featuredArticle.author}</span>
                      </div>
                      
                      <Button className="group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Articles */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-serif font-bold text-slate-900">All Articles</h2>
              
              <div className="space-y-8">
                {filteredArticles.map((article, index) => {
                  const CategoryIcon = getCategoryIcon(article.category)
                  return (
                    <Card key={article.id} className="glass-card group hover:scale-[1.02] transition-all duration-500">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="relative h-48 md:h-auto">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover rounded-l-2xl group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        
                        <CardContent className="md:col-span-2 p-6 space-y-4">
                          <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <span className="flex items-center space-x-1">
                              <CategoryIcon className="w-4 h-4" />
                              <span>{article.category}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(article.date)}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{article.readTime}</span>
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                            {article.title}
                          </h3>
                          
                          <p className="text-slate-600 leading-relaxed">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4 text-slate-500" />
                              <span className="text-sm text-slate-600">By {article.author}</span>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="outline">
                                <Share2 className="w-4 h-4" />
                              </Button>
                              <Button size="sm" className="group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                Read More
                                <ChevronRight className="ml-1 w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  )
                })}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-600 text-lg">No articles match your search criteria.</p>
                  <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Articles */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span>Recent Articles</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentArticles.map((article, index) => (
                    <div key={article.id} className="flex space-x-3 group cursor-pointer">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 space-y-1">
                        <h4 className="text-sm font-semibold text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-xs text-slate-600">{formatDate(article.date)}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Tag className="w-5 h-5 text-purple-600" />
                    <span>Categories</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.filter(cat => cat !== 'all').map((category, index) => {
                    const count = newsArticles.filter(article => article.category === category).length
                    const CategoryIcon = getCategoryIcon(category)
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          selectedCategory === category 
                            ? 'bg-purple-100 text-purple-700' 
                            : 'hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <CategoryIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">{category}</span>
                        </div>
                        <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-full">
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="glass-card bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-900">Stay Updated</h3>
                  <p className="text-sm text-slate-600">
                    Subscribe to our newsletter for the latest investment insights and company updates.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Enter your email" />
                    <Button className="w-full">
                      Subscribe
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}