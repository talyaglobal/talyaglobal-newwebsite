'use client'

import { useState } from 'react'
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock,
  Search,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Send,
  Book,
  Video,
  FileText,
  Users,
  Zap,
  Shield,
  Globe,
  ArrowRight
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'

export function SupportPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  })

  const supportChannels = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Always',
      responseTime: '< 4 hours',
      action: 'Send Email',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Business Hours',
      responseTime: 'Immediate',
      action: 'Call Now',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'VIP Support',
      description: 'Priority support for VIP members',
      availability: '24/7',
      responseTime: '< 1 hour',
      action: 'VIP Access',
      color: 'from-amber-500 to-orange-500'
    }
  ]

  const faqCategories = [
    {
      title: 'Getting Started',
      questions: [
        {
          question: 'How do I create an account with TalyaGlobal?',
          answer: 'You can create an account by visiting our registration page and providing your basic information. For investment opportunities, you may need to complete additional verification steps.'
        },
        {
          question: 'What is the minimum investment amount?',
          answer: 'Minimum investment amounts vary by opportunity. Most of our investment opportunities start from $50,000, while some exclusive deals may require higher minimums.'
        },
        {
          question: 'How do I access the AI Assessment tool?',
          answer: 'The AI Assessment tool is available for free on our website. Simply navigate to the AI Assessment page and follow the step-by-step process to evaluate your business.'
        }
      ]
    },
    {
      title: 'Investment Process',
      questions: [
        {
          question: 'How long does the investment process take?',
          answer: 'The investment process typically takes 2-4 weeks from initial application to funding, depending on the complexity of the opportunity and due diligence requirements.'
        },
        {
          question: 'What documents do I need to provide?',
          answer: 'Required documents include financial statements, business plan, legal documentation, and proof of accredited investor status. Our team will provide a complete checklist.'
        },
        {
          question: 'How are investment opportunities evaluated?',
          answer: 'We use a comprehensive evaluation process including financial analysis, market assessment, management team evaluation, and our proprietary AI-powered scoring system.'
        }
      ]
    },
    {
      title: 'VIP Membership',
      questions: [
        {
          question: 'What are the benefits of VIP membership?',
          answer: 'VIP members get priority access to investment opportunities, dedicated relationship managers, exclusive market insights, and advanced portfolio analytics.'
        },
        {
          question: 'How much does VIP membership cost?',
          answer: 'We offer three VIP tiers: Silver ($10,000/year), Gold ($25,000/year), and Platinum ($50,000/year). Each tier offers different levels of access and benefits.'
        },
        {
          question: 'Can I upgrade my membership later?',
          answer: 'Yes, you can upgrade your membership at any time. The price difference will be prorated based on your remaining membership period.'
        }
      ]
    },
    {
      title: 'Technical Support',
      questions: [
        {
          question: 'I\'m having trouble accessing my account',
          answer: 'Try resetting your password first. If the issue persists, contact our technical support team with your account details and we\'ll resolve it quickly.'
        },
        {
          question: 'The AI Assessment tool isn\'t working',
          answer: 'Ensure you\'re using a supported browser (Chrome, Firefox, Safari, Edge) and have JavaScript enabled. Clear your browser cache and try again.'
        },
        {
          question: 'How do I download my investment reports?',
          answer: 'Investment reports are available in your dashboard under the "Reports" section. Click the download icon next to any report to save it as a PDF.'
        }
      ]
    }
  ]

  const helpResources = [
    {
      icon: Book,
      title: 'Knowledge Base',
      description: 'Comprehensive guides and documentation',
      count: '150+ articles',
      link: '/resources'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      count: '25+ videos',
      link: '/resources?type=videos'
    },
    {
      icon: FileText,
      title: 'User Guides',
      description: 'Detailed platform documentation',
      count: '12 guides',
      link: '/resources?type=guides'
    }
  ]

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', contactForm)
    // Reset form or show success message
  }

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>Support Center</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              How Can We
              <br />
              <span className="text-gradient">Help You?</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Get the support you need with our comprehensive help center, live chat, 
              and dedicated support team available 24/7.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search for help articles, guides, or FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-4 text-lg rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Get Support Your Way
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the support channel that works best for you. Our team is ready to help 
              through multiple channels with fast response times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 space-y-4">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${channel.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900">{channel.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{channel.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Availability:</span>
                        <span className="font-medium">{channel.availability}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Response:</span>
                        <span className="font-medium text-green-600">{channel.responseTime}</span>
                      </div>
                    </div>

                    <Button className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      {channel.action}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Self-Service Resources
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find answers quickly with our comprehensive library of help resources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {helpResources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 text-center space-y-4">
                    <Icon className="w-12 h-12 mx-auto text-purple-600" />
                    <h3 className="text-xl font-serif font-bold text-slate-900">{resource.title}</h3>
                    <p className="text-slate-600">{resource.description}</p>
                    <p className="text-sm font-medium text-purple-600">{resource.count}</p>
                    <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      Browse {resource.title}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our platform and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex
                    const isExpanded = expandedFAQ === globalIndex
                    
                    return (
                      <Card key={faqIndex} className="glass-card">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-50 transition-colors rounded-2xl"
                          >
                            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                            )}
                          </button>
                          {isExpanded && (
                            <div className="px-6 pb-6">
                              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}

            {filteredFAQs.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">No FAQs match your search.</p>
                <p className="text-slate-500 mt-2">Try different keywords or contact our support team.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-slate-600">
                Can't find what you're looking for? Send us a message and we'll get back to you quickly.
              </p>
            </div>

            <Card className="glass-card">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        required
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        placeholder="Brief description of your issue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Priority
                      </label>
                      <select
                        value={contactForm.priority}
                        onChange={(e) => setContactForm({...contactForm, priority: e.target.value})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Please provide detailed information about your question or issue..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-primary">
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-purple-100">
              Multiple ways to reach our support team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold">Email Support</h3>
              <p className="text-purple-200">support@talyaglobal.com</p>
              <p className="text-sm text-purple-300">Response within 4 hours</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold">Phone Support</h3>
              <p className="text-purple-200">+971 4 XXX XXXX</p>
              <p className="text-sm text-purple-300">Business hours: 9 AM - 6 PM GST</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold">Live Chat</h3>
              <p className="text-purple-200">Available 24/7</p>
              <p className="text-sm text-purple-300">Instant response</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}