import './globals.css'
import type { Metadata } from 'next'
import ThemeProvider from '@/components/ThemeProvider'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'تحلیل سیاسی | تجربه سینمایی',
  description: 'ترکیب زیبایی، عمق و دسترسی برای تحلیل‌های جهانی به فارسی',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--bg)]">
        <ThemeProvider>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
