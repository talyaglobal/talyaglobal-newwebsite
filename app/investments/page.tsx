import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { FeaturedInvestments } from '../components/FeaturedInvestments'

export default function InvestmentsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Investment Opportunities</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-center mb-8">
              Explore Our <span className="text-gradient">Investment Portfolio</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our carefully curated investment opportunities across multiple sectors, 
              each backed by our 25+ years of experience and rigorous due diligence process.
            </p>
          </div>
          
          {/* Featured Investments Component */}
          <FeaturedInvestments />
          
          {/* Additional Investment Information */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Investment Process</h3>
              <p className="text-slate-600 mb-4">
                Our rigorous investment process ensures each opportunity meets our high standards for growth potential and risk management.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Due diligence and market analysis</li>
                <li>• Financial performance evaluation</li>
                <li>• Strategic growth planning</li>
                <li>• Ongoing portfolio management</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Investment Criteria</h3>
              <p className="text-slate-600 mb-4">
                We focus on companies with strong fundamentals, experienced management teams, and clear growth trajectories.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Proven business models</li>
                <li>• Scalable operations</li>
                <li>• Market leadership potential</li>
                <li>• Strong financial metrics</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Investor Benefits</h3>
              <p className="text-slate-600 mb-4">
                Join our network of sophisticated investors and gain access to exclusive opportunities and insights.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Diversified portfolio exposure</li>
                <li>• Professional management</li>
                <li>• Regular performance updates</li>
                <li>• Exit strategy planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}