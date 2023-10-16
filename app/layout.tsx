import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: 'Sitecore Clippy',
  description: 'Your AI assistant for Sitecore',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}