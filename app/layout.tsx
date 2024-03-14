import { fontSans, fontSerif } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kateryna Rieznik  |  Front-end Developer',
  description: 'Kateryna Rieznik  |  Front-end Developer | Personal website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
