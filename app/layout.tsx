import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ContractPro AI - Complete AI-Powered CRM for Contractors',
  description: 'Transform your contracting business with AI-powered invoicing, lead capture, automated follow-ups, and intelligent product recommendations.',
  generator: 'v0.app',
  icons: {
    icon: [
      // Use project `images/favicon.ico` as the primary favicon (user provided)
      {
        url: '/images/favicon.ico',
        type: 'image/x-icon',
      },
      // keep existing small icon fallbacks for light/dark themes if present
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Explicit favicon link for broader compatibility (use images/favicon.ico) */}
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
