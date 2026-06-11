import type { Metadata } from 'next'
import { Playfair_Display, Merriweather } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--app-font-serif',
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--app-font-body-serif',
  display: 'swap',
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: 'Siddhant Varma — Product Manager',
    template: '%s | Siddhant Varma',
  },
  description:
    'PM portfolio showcasing product strategy, execution, and impact across B2B SaaS and data infrastructure.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
