import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { AboutSection } from '../components/AboutSection'
import { TrustCredibility } from '../components/TrustCredibility'
import { StatsSection } from '../components/StatsSection'

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