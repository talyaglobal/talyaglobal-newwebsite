import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { VentureAIStudioPage } from './VentureAIStudioPage'

export default function VentureAIStudio() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <VentureAIStudioPage />
      <Footer />
    </main>
  )
}