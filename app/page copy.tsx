import { Navigation } from '../components/layout/Navigation'
import { Hero } from '../components/sections/Hero'
import { FeaturedInvestments } from '../components/sections/FeaturedInvestments'
import { Footer } from '../components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedInvestments />
      <Footer />
    </main>
  )
}

