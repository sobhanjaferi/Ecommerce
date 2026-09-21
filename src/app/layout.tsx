import type { Metadata } from 'next'
import { ReactElement } from 'react'
import '@/styles/globals.css'
import Header from '@/features/header/header'

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'my first full Ecommerce website',
}

export default function RootLayout({
  children,
}: LayoutProps<'/'>): ReactElement {
  return (
    <html lang='en'>
      <body className='min-h-full flex flex-col mx-100'>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  )
}
