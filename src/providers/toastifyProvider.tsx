'use client'

import type { ReactElement, ReactNode } from 'react'
import { Bounce, ToastContainer } from 'react-toastify'

export default function ToastifyProvider({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />

      {children}
    </div>
  )
}
