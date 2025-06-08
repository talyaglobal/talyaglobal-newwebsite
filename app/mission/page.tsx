import { Navigation } from '../components/Navigation'
import Footer from '@/components/Footer'
import { MissionPage } from './MissionPage'

export default function Mission() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <MissionPage />
      <Footer />
    </main>
  )
}