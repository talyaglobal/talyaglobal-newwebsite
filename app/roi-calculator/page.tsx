import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ROICalculatorPage } from './ROICalculatorPage'

export default function ROICalculator() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ROICalculatorPage />
      <Footer />
    </main>
  )
}