import ContactSection from '../../src/components/ContactSection'
import { Navigation } from '../components/Navigation'
import Footer from '../../src/components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}