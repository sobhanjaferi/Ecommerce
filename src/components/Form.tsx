import FormField from '@/components/FormField'
import PasswordField from '@/components/PasswordField'
import Link from 'next/link'
import type { ComponentProps, ReactElement } from 'react'
import Button from './Button'
import { ROUTES } from '@/constants/routes.constant'

type Props = ComponentProps<'form'> & {
  IspasswordExists: boolean
  isRegisterForm: boolean
}

export default function Form({
  IspasswordExists,
  isRegisterForm,
  children,
  ...props
}: Props): ReactElement {
  return (
    <div className='w-10/12 bg-gray-100 shadow-lg shadow-gray-400 border border-gray-400 rounded-lg p-2 flex flex-col gap-5'>
      <div className='flex flex-col justify-between items-center gap-2 w-full'>
        <h1 className='text-3xl font-bold'>
          {isRegisterForm ? 'Register page' : 'Login page'}
        </h1>
        <p className='text-gray-600 text-sm'>
          {isRegisterForm
            ? 'Wellcome to Ecommerce'
            : 'Wellcome back to Ecommerce'}
        </p>
      </div>

      <form
        className='h-full w-full bg-gray-300 rounded-md border border-gray-400 p-4 flex flex-col gap-7'
        {...props}
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

          {IspasswordExists && <PasswordField name='password' />}

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
              {isRegisterForm ? 'you had account' : 'you had not account'}?{' '}
              <Link
                href={`${isRegisterForm ? ROUTES.LOGIN : ROUTES.REGISTER}`}
                className='active:opacity-30 transition-all duration-200 text-blue-600 border-b'
              >
                {isRegisterForm ? 'login' : 'register'}
              </Link>
            </span>
          </li>

          {children}
        </ul>

        <Button color='gray' className='w-full' type='submit'>
          Login
        </Button>
      </form>
    </div>
  )
}
