import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { FeaturedInvestments } from '@/components/FeaturedInvestments'
import { AboutSection } from '@/components/AboutSection'
import { PortfolioSection } from '@/components/PortfolioSection'
import { ServicesSection } from '@/components/ServicesSection'
import { StatsSection } from '@/components/StatsSection'
import { ContactSection } from '@/components/ContactSection'
import Footer from '@/components/Footer'

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