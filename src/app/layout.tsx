import './globals.css'
import type { Metadata } from 'next'
// // import { Inter } from 'next/font/google'
// import { Gotham } from '../font'
// // const inter = inter({ subsets: ['latin'] })  
// const gotham = Gotham({ subsets: ['latin'] })
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
