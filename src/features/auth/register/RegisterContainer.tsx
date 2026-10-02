'use client'

import type { FormEvent, ReactElement } from 'react'
import Register from './Register'
import { toast } from 'react-toastify'

export default function RegisterContainer(): ReactElement {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const emailIpt = formData.get('email') as string
    const passwordIpt = formData.get('password') as string

    try {
      const req = await fetch('/api/auth/register/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailIpt, password: passwordIpt }),
      })

      const res = await req.json()

      if (!req.ok) {
        toast.error(res.message)
        return
      }

      toast.success(res.message)
    } catch {
      toast.error('Network error. Please try again.')
    }
  }

  return <Register handleSubmit={handleSubmit} />
}
