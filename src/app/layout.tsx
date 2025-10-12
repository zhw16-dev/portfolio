import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wzhai.vercel.app'),
  title: "William Zhai | Product Manager",
  description: 'From Spreadsheet Chaos to User-Centered Design - A product management case study showcasing strategic thinking, technical execution, and measurable impact.',
  keywords: 'product management, case study, tutoring platform, Next.js, Supabase, user experience, William Zhai, PM portfolio',
  authors: [{ name: 'William Zhai' }],
  creator: 'William Zhai',
  publisher: 'William Zhai',
    icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    },
  openGraph: {
    title: "William Zhai | Product Manager",
    description: 'From Spreadsheet Chaos to User-Centered Design - A product management case study',
    type: 'website',
    locale: 'en_US',
    siteName: "William Zhai's Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    title: "William Zhai | Product Manager",
    description: 'From Spreadsheet Chaos to User-Centered Design - A product management case study',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#A8C6A2" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}