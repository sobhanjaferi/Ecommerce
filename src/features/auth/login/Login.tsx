import Button from '@/components/Button'
import type { ReactElement } from 'react'

export default function Login(): ReactElement {
  return (
    <div className='w-10/12 bg-gray-100 shadow-lg shadow-gray-400 border border-gray-400 rounded-lg p-2 flex flex-col gap-5'>
      <div className='flex flex-col justify-between items-center gap-2 w-full'>
        <h1 className='text-3xl font-bold'>Login page</h1>
        <p className='text-gray-600 text-sm'>Wellcome back to Ecommerce</p>
      </div>

      <form
        method='GET'
        className='h-full w-full bg-gray-300 rounded-md border border-gray-400 p-4 flex flex-col gap-7'
      >
        <ul className='w-full flex flex-col justify-between gap-7'>
          <li className='flex flex-col justify-between gap-1'>
            <label htmlFor='email'>Email</label>

            <input
              type='email'
              name='email'
              id='email'
              placeholder='example@gmail.com'
              required
              className='p-2 rounded-lg bg-gray-100 border border-gray-400 outline-gray-600'
            />
          </li>

          <li className='flex flex-col justify-between gap-1'>
            <label htmlFor='password'>Password</label>

            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              required
              className='p-2 rounded-lg bg-gray-100 border border-gray-400 outline-gray-600'
            />
          </li>

          <li className='w-full flex justify-between items-center'>
            <div className='flex justify-between items-center gap-1'>
              <label htmlFor='remember'>remember me :</label>

              <input
                type='checkbox'
                id='remember'
                name='remember'
                className='outline-0'
              />
            </div>

            <span className='active:opacity-30 transition-all duration-200 cursor-pointer'>
              Forget Your Password?
            </span>
          </li>
        </ul>

        <Button type='submit' color='gray' className='w-full'>
          Login
        </Button>
      </form>
    </div>
  )
}
