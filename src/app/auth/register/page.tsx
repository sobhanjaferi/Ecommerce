import RegisterContainer from '@/features/auth/register/RegisterContainer'
import type { ReactElement } from 'react'

export default function RegisterPage(): ReactElement {
  return (
    <div className='flex justify-center items-center'>
      <RegisterContainer />
    </div>
  )
}
