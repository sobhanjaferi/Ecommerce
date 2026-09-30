import type { Metadata } from 'next'
import { ReactElement } from 'react'
import '@/styles/globals.css'
import Header from '@/features/header/Header'
import TanstackProvider from '@/providers/tanstackProvider'
import ToastifyProvider from '@/providers/toastifyProvider'

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'my first full Ecommerce website',
}

export default function RootLayout({
  children,
}: LayoutProps<'/'>): ReactElement {
  return (
    <html lang='en'>
      <body className='min-h-full flex flex-col mx-120'>
        <Header />

        <main>
          <TanstackProvider>
            <ToastifyProvider>{children}</ToastifyProvider>
          </TanstackProvider>
        </main>
      </body>
    </html>
  )
}
