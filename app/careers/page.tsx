import { Navigation } from '../components/Navigation'
import Footer from '../../src/components/Footer'
import CareersPage from './CareersPage'

export default function Careers() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CareersPage />
      <Footer />
    </main>
  )
}