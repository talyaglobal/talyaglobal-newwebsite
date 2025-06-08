import { Navigation } from '@/components/Navigation'
import Footer from '../../src/components/Footer'
import PortfolioSection from '../../src/components/PortfolioSection'
import StatsSection from '../../src/components/StatsSection'

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