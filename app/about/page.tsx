import { Navigation } from '../components/Navigation'
import Footer from '../../src/components/Footer'
import AboutSection from '../../src/components/AboutSection'
import TrustCredibility from '../../src/components/TrustCredibility'
import StatsSection from '../../src/components/StatsSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
        <StatsSection />
        <TrustCredibility />
      </div>
      <Footer />
    </main>
  )
}