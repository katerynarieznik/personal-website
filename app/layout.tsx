import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
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
          'min-h-screen bg-gray-20 font-sans text-gray-120 antialiased',
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          {/* Block to make sure main content bottom is not hidden behind sticky footer  */}
          <div className="h-24" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
