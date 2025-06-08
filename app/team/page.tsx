import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import { TeamPage } from './TeamPage'

export default function Team() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TeamPage />
      <Footer />
    </main>
  )
}