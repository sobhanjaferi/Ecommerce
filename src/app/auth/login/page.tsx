import FormContainer from '@/features/auth/login/FormContainer'
import type { ReactElement } from 'react'

export default function LoginPage(): ReactElement {
  return (
    <div className='flex justify-center items-center'>
      <FormContainer />
    </div>
  )
}
