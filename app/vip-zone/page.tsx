import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { VIPZonePage } from './VIPZonePage'

export default function VIPZone() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <VIPZonePage />
      <Footer />
    </main>
  )
}