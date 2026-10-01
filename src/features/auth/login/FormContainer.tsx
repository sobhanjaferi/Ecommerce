'use client'

import type { FormEvent, ReactElement } from 'react'
import { toast } from 'react-toastify'
import Form from './Form'

export default function FormContainer(): ReactElement {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const emailValue = formData.get('email') as string
    const passwordValue = formData.get('password') as string
    const data = { email: emailValue, password: passwordValue }

    try {
      const req = await fetch('/api/auth/login/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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

  return <Form handleSubmit={handleSubmit} />
}
