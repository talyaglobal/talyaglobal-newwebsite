import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import { NewsPage } from './NewsPage'

export default function News() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <NewsPage />
      <Footer />
    </main>
  )
}