import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/component/Sidebar'
import TopBar from '@/component/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SEBI Cybersecurity Dashboard',
  description: 'Comprehensive overview of cybersecurity compliance and operations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-surface-bg">
          <Sidebar />

          <div className="flex-1 overflow-y-auto ml-64 tablet:ml-0 tablet:pt-14 transition-[margin] duration-base ease-ui">
            <TopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
