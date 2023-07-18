import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'iBUYPOWER',
  description: 'PCs and PC Builder ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
