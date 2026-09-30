import type { ReactElement } from 'react'
import LoginForm from './Form'

export default function Login(): ReactElement {
  return (
    <div className='w-10/12 bg-gray-100 shadow-lg shadow-gray-400 border border-gray-400 rounded-lg p-2 flex flex-col gap-5'>
      <div className='flex flex-col justify-between items-center gap-2 w-full'>
        <h1 className='text-3xl font-bold'>Login page</h1>
        <p className='text-gray-600 text-sm'>Wellcome back to Ecommerce</p>
      </div>

      <LoginForm />
    </div>
  )
}
