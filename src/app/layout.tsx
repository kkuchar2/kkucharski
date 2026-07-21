import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import type { ReactNode } from 'react'

import { isProduction, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../config/site'

import '../styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: isProduction,
    follow: isProduction,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/seo/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/images/seo/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/images/favicon/icon_48.png', sizes: '48x48', type: 'image/png' },
      { url: '/images/favicon/icon_192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/images/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  themeColor: '#3a3d39',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} antialiased`}>
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  )
}
