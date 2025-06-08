import { Navigation } from '../components/Navigation'
import Footer from '@/components/Footer'
import { OurJourneyPage } from './OurJourneyPage'

export default function OurJourney() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <OurJourneyPage />
      <Footer />
    </main>
  )
}