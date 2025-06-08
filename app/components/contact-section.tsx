'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investmentSize: '',
    message: '',
    investorType: 'individual'
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
      address: '450 Park Avenue, Suite 2500',
      address2: 'New York, NY 10022',
      phone: '+1 (212) 555-0100',
      email: 'ny@talyaglobal.com'
    },
    {
      city: 'London',
      address: '25 Canada Square, Level 30',
      address2: 'Canary Wharf, London E14 5LQ',
      phone: '+44 20 7555 0100',
      email: 'london@talyaglobal.com'
    },
    {
      city: 'Singapore',
      address: '1 Raffles Quay, Level 35',
      address2: 'Singapore 048583',
      phone: '+65 6555 0100',
      email: 'asia@talyaglobal.com'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-primary-900">
      <div className="container-wide section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore investment opportunities with TalyaGlobal? Our team is here to discuss 
            how we can help you achieve your investment objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div className="tsmart-card p-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-success-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-primary-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">
                  Your message has been received. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="tsmart-input w-full"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="tsmart-input w-full"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="tsmart-input w-full"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="investorType" className="block text-sm font-medium text-gray-700 mb-2">
                      Investor Type
                    </label>
                    <select
                      id="investorType"
                      name="investorType"
                      className="tsmart-input w-full"
                      value={formData.investorType}
                      onChange={handleChange}
                    >
                      <option value="individual">Individual Investor</option>
                      <option value="institutional">Institutional Investor</option>
                      <option value="family-office">Family Office</option>
                      <option value="pension-fund">Pension Fund</option>
                      <option value="insurance">Insurance Company</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="investmentSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Size Range
                  </label>
                  <select
                    id="investmentSize"
                    name="investmentSize"
                    className="tsmart-input w-full"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="tsmart-input w-full resize-none"
                    placeholder="Tell us about your investment objectives and how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="w-full tsmart-button-primary">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-secondary-500 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-primary-900">Phone</div>
                    <div className="text-gray-600">+1 (212) 555-0100</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-secondary-500 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-primary-900">Email</div>
                    <div className="text-gray-600">investors@talyaglobal.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-secondary-500 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-primary-900">Business Hours</div>
                    <div className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 2:00 PM EST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Global Offices</h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.city} className="tsmart-card p-6">
                    <h4 className="font-bold text-primary-900 mb-3 flex items-center">
                      <MapPin className="h-5 w-5 text-secondary-500 mr-2" />
                      {office.city}
                    </h4>
                    <div className="text-gray-600 space-y-1">
                      <div>{office.address}</div>
                      <div>{office.address2}</div>
                      <div className="pt-2">
                        <div>Phone: {office.phone}</div>
                        <div>Email: {office.email}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="tsmart-card p-6 bg-gradient-to-r from-primary-50 to-secondary-50">
              <h4 className="font-bold text-primary-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 border">
                  📊 Request Investment Presentation
                </button>
                <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 border">
                  📋 Download Fund Factsheets
                </button>
                <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 border">
                  📅 Schedule a Meeting
                </button>
                <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 border">
                  🔒 Access Investor Portal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="tsmart-card p-8 md:p-12 bg-gradient-to-r from-primary-600 to-primary-800 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
            <p className="text-xl mb-8 text-primary-100">
              Join leading institutional investors who trust TalyaGlobal to deliver exceptional returns 
              through disciplined investment strategies and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-200">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors duration-200">
                Investor Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}