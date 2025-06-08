import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { PortfolioSection } from '../components/PortfolioSection'
import { StatsSection } from '../components/StatsSection'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <PortfolioSection />
        <StatsSection />
      </div>
      <Footer />
    </main>
  )
}