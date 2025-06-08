import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                Last updated: December 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                <p className="text-slate-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  request information about our services, or communicate with us.
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Professional information (company, job title, investment experience)</li>
                  <li>Financial information (investment capacity, accreditation status)</li>
                  <li>Communication preferences and interaction history</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-slate-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Provide and improve our investment services</li>
                  <li>Communicate with you about investment opportunities</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Protect against fraud and unauthorized access</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">3. Information Sharing</h2>
                <p className="text-slate-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">4. Data Security</h2>
                <p className="text-slate-600 mb-4">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">5. Contact Us</h2>
                <p className="text-slate-600">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@talyaglobal.com
                  <br />
                  Phone: +1 (555) 123-4567
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}