'use client'

import IconButton from '@/components/IconButton'
import { Eye, EyeClosed } from 'lucide-react'
import { useState, type ReactElement } from 'react'
import FormField from './FormField'
import Button from '@/components/Button'

export default function LoginForm(): ReactElement {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const handleClickShowPassword = (): void => {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <form
      method='GET'
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

        <FormField
          label='Password'
          type={isShowPassword ? 'text' : 'password'}
          name='password'
          id='password'
          placeholder='Password'
          required
          className='relative'
        >
          <IconButton
            onClick={handleClickShowPassword}
            className='absolute right-2 top-9 text-gray-600'
          >
            {isShowPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
          </IconButton>
        </FormField>

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
  )
}
