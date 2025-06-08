import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { SupportPage } from './SupportPage'

export default function Support() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SupportPage />
      <Footer />
    </main>
  )
}