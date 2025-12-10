import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello World - builderio-test3',
  description: 'A simple landing page with Hello World content',
  keywords: ['hello world', 'landing page', 'next.js', 'builder.io'],
  authors: [{ name: 'builderio-test3' }],
  openGraph: {
    title: 'Hello World - builderio-test3',
    description: 'A simple landing page with Hello World content',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hello World - builderio-test3',
    description: 'A simple landing page with Hello World content',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}