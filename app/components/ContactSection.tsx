'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Calendar } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investmentSize: '',
    message: '',
    inquiryType: 'investment'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const offices = [
    {
      city: 'New York',
      country: 'United States',
      address: '450 Park Avenue, Suite 2500',
      address2: 'New York, NY 10022',
      phone: '+1 (555) 123-4567',
      email: 'ny@talyaglobal.com',
      timezone: 'EST'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '25 Canada Square, Level 30',
      address2: 'Canary Wharf, London E14 5LQ',
      phone: '+44 20 7555 0100',
      email: 'london@talyaglobal.com',
      timezone: 'GMT'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '1 Raffles Quay, Level 35',
      address2: 'Singapore 048583',
      phone: '+65 6555 0100',
      email: 'asia@talyaglobal.com',
      timezone: 'SGT'
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      address: 'Shibuya Sky Building, 28F',
      address2: 'Tokyo 150-0002',
      phone: '+81 3 5555 0100',
      email: 'tokyo@talyaglobal.com',
      timezone: 'JST'
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      description: 'Speak directly with our investment team',
      value: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us a detailed inquiry',
      value: 'info@talyaglobal.com',
      action: 'Send Email'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      value: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation call',
      value: 'Available slots',
      action: 'Book Now'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to explore investment opportunities with TalyaGlobal? Our team is here to discuss 
            how we can help you achieve your investment and business objectives.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={method.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-purple-200 text-center group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <method.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{method.title}</h3>
              <p className="text-slate-600 text-sm mb-3">{method.description}</p>
              <p className="font-semibold text-purple-600 mb-4">{method.value}</p>
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h4>
                <p className="text-slate-600">
                  Your message has been received. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      value={formData.inquiryType}
                      onChange={handleChange}
                    >
                      <option value="investment">Investment Opportunity</option>
                      <option value="services">Business Services</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="investmentSize" className="block text-sm font-medium text-slate-700 mb-2">
                    Investment Size Range (Optional)
                  </label>
                  <select
                    id="investmentSize"
                    name="investmentSize"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                    value={formData.investmentSize}
                    onChange={handleChange}
                  >
                    <option value="">Select investment range</option>
                    <option value="1-5M">$1M - $5M</option>
                    <option value="5-10M">$5M - $10M</option>
                    <option value="10-25M">$10M - $25M</option>
                    <option value="25-50M">$25M - $50M</option>
                    <option value="50M+">$50M+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your investment objectives and how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & Offices */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <div className="text-slate-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <div className="text-slate-600">info@talyaglobal.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Business Hours</div>
                    <div className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 2:00 PM EST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Offices */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Global Offices</h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.city} className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                      <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                      {office.city}, {office.country}
                    </h4>
                    <div className="text-slate-600 space-y-1 text-sm">
                      <div>{office.address}</div>
                      <div>{office.address2}</div>
                      <div className="pt-2">
                        <div>Phone: {office.phone}</div>
                        <div>Email: {office.email}</div>
                        <div>Timezone: {office.timezone}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
            <p className="text-xl mb-8 text-purple-100">
              Join leading institutional investors who trust TalyaGlobal to deliver exceptional returns 
              through disciplined investment strategies and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}