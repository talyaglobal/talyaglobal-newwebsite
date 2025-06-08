import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TalyaGlobal - Investment & Consultancy Group',
  description: 'Global investment and consultancy group founded in 2023 in the UAE. Operating across 8+ countries with our 3PL mission: Proactive, Pioneer, Passionate, Loyal.',
  keywords: 'investment, consultancy, global, portfolio, ROI, M&A, business solutions, UAE, Dubai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}