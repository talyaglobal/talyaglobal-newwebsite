import { Navigation } from '@/app/components/Navigation'
import { ROICalculatorPage } from './ROICalculatorPage'

export default function ROICalculator() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ROICalculatorPage />
    </main>
  )
}