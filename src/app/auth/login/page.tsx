import LoginForm from '@/features/auth/login/LoginForm'
import type { ReactElement } from 'react'

export default function LoginPage(): ReactElement {
  return (
    <div className='flex justify-center items-center'>
      <LoginForm />
    </div>
  )
}
