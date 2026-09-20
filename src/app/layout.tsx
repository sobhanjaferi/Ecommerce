import type { Metadata } from 'next'
import { ReactElement } from 'react'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'my first full Ecommerce website',
}

export default function RootLayout({
  children,
}: LayoutProps<'/'>): ReactElement {
  return (
    <html lang='en'>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  )
}
