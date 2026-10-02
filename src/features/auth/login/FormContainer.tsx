'use client'

import { useEffect, useState, type FormEvent, type ReactElement } from 'react'
import { toast } from 'react-toastify'
import FormLogin from './Form'

export default function FormContainer(): ReactElement {
  const [isLogin, setIsLogin] = useState<boolean>(false)

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
        setIsLogin(false)
        return
      }

      toast.success(res.message)
      setIsLogin(true)
    } catch {
      toast.error('Network error. Please try again.')
    }
  }

  useEffect(() => {
    localStorage.setItem('USEREXISTS', JSON.stringify(isLogin))
  }, [isLogin])

  return <FormLogin handleSubmit={handleSubmit} />
}
