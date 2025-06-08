import { Navigation } from '@/components/Navigation'
import Hero from '../src/components/Hero'
import FeaturedInvestments from '../src/components/FeaturedInvestments'
import AboutSection from '../src/components/AboutSection'
import PortfolioSection from '../src/components/PortfolioSection'
import ServicesSection from '../src/components/ServicesSection'
import StatsSection from '../src/components/StatsSection'
import ContactSection from '../src/components/ContactSection'
import Footer from '../src/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedInvestments />
      <AboutSection />
      <StatsSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}