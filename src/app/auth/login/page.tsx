import LoginContainer from '@/features/auth/login/LoginContainer'
import type { ReactElement } from 'react'

export default function LoginPage(): ReactElement {
  return (
    <div className='flex justify-center items-center'>
      <LoginContainer />
    </div>
  )
}
