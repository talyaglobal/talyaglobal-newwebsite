import { Navigation } from '@/components/Navigation'

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                Last updated: December 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-600 mb-4">
                  By accessing and using TalyaGlobal's services, you accept and agree to be bound by 
                  the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">2. Investment Services</h2>
                <p className="text-slate-600 mb-4">
                  TalyaGlobal provides investment advisory and management services to qualified investors. 
                  All investments carry risk and past performance does not guarantee future results.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">3. Eligibility</h2>
                <p className="text-slate-600 mb-4">
                  Our services are available only to accredited investors as defined by applicable 
                  securities regulations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
                <p className="text-slate-600 mb-4">
                  TalyaGlobal shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages arising from your use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">5. Contact Information</h2>
                <p className="text-slate-600">
                  For questions regarding these terms, please contact:
                  <br />
                  Email: legal@talyaglobal.com
                  <br />
                  Phone: +1 (555) 123-4567
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}