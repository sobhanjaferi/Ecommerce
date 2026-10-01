import { FormEvent, type ReactElement } from 'react'
import FormField from './FormField'
import Button from '@/components/Button'
import PasswordField from './PasswordField'
import Link from 'next/link'

export default function Form({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}): ReactElement {
  return (
    <form
      onSubmit={handleSubmit}
      className='h-full w-full bg-gray-300 rounded-md border border-gray-400 p-4 flex flex-col gap-7'
    >
      <ul className='w-full flex flex-col justify-between gap-7'>
        <FormField
          label='Email'
          type='email'
          name='email'
          id='email'
          placeholder='example@gmail.com'
          required
        />

        <PasswordField name='password' />

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

          <span>
            you had not account ?{' '}
            <Link
              href={'/auth/register'}
              className='active:opacity-30 transition-all duration-200 text-blue-600 border-b'
            >
              register
            </Link>
          </span>
        </li>
      </ul>

      <Button color='gray' className='w-full' type='submit'>
        Login
      </Button>
    </form>
  )
}
