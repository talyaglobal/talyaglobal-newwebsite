'use client'

import Link from 'next/link'
import { TrendingUp, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Team', href: '#leadership' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'News & Insights', href: '/news' },
        { label: 'Careers', href: '/careers' },
      ]
    },
    {
      title: 'Investors',
      links: [
        { label: 'Investment Opportunities', href: '#opportunities' },
        { label: 'Fund Performance', href: '/performance' },
        { label: 'Investor Portal', href: '/portal' },
        { label: 'ESG Framework', href: '/esg' },
        { label: 'Risk Management', href: '/risk' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Investment Guide', href: '/guide' },
        { label: 'Market Research', href: '/research' },
        { label: 'White Papers', href: '/papers' },
        { label: 'Regulatory Filings', href: '/filings' },
        { label: 'FAQ', href: '/faq' },
      ]
    }
  ]

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-wide section-padding py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-r from-secondary-500 to-secondary-400 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">TalyaGlobal</span>
            </Link>
            
            <p className="text-primary-100 mb-6 leading-relaxed">
              A premier investment holding company focused on strategic acquisitions and portfolio management. 
              Building tomorrow's investment portfolio through disciplined capital allocation and operational excellence.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-primary-100">
                <MapPin className="h-5 w-5 mr-3 text-secondary-400" />
                450 Park Avenue, Suite 2500, New York, NY 10022
              </div>
              <div className="flex items-center text-primary-100">
                <Phone className="h-5 w-5 mr-3 text-secondary-400" />
                +1 (212) 555-0100
              </div>
              <div className="flex items-center text-primary-100">
                <Mail className="h-5 w-5 mr-3 text-secondary-400" />
                investors@talyaglobal.com
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <button className="p-3 bg-primary-800 hover:bg-primary-700 rounded-lg transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="p-3 bg-primary-800 hover:bg-primary-700 rounded-lg transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="p-3 bg-primary-800 hover:bg-primary-700 rounded-lg transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-primary-200 hover:text-secondary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-700 mt-12 pt-12">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1 lg:mr-8">
              <h3 className="text-xl font-bold text-white mb-2">Stay Informed</h3>
              <p className="text-primary-200">
                Get the latest investment insights and market updates delivered to your inbox.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-primary-800 border border-primary-600 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                />
                <button className="bg-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-200 text-sm">
            <div className="mb-4 md:mb-0">
              © {currentYear} TalyaGlobal Investment Holdings. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="hover:text-secondary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-secondary-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/compliance" className="hover:text-secondary-400 transition-colors duration-200">
                Compliance
              </Link>
              <Link href="/disclosures" className="hover:text-secondary-400 transition-colors duration-200">
                Important Disclosures
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-primary-800 rounded-lg">
          <p className="text-xs text-primary-300 leading-relaxed">
            <strong>Important Disclaimer:</strong> This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. 
            Past performance is not indicative of future results. All investments involve risk and may result in partial or total loss. 
            Please consult with qualified financial advisors before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}