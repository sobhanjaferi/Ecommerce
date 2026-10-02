'use client'

import { type FormEvent, type ReactElement } from 'react'
import { toast } from 'react-toastify'
import FormLogin from './Form'
import { UserStore } from '@/stores/userStore'

export default function FormContainer(): ReactElement {
  const handleSetTrue = UserStore((state) => state.handleSetTrue)
  const handleSetFalse = UserStore((state) => state.handleSetFalse)

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
        handleSetFalse()
        return
      }

      toast.success(res.message)
      handleSetTrue()
    } catch {
      toast.error('Network error. Please try again.')
    }
  }

  return <FormLogin handleSubmit={handleSubmit} />
}
