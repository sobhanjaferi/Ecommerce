'use client'

import { useState, type ReactElement } from 'react'
import FormField from './FormField'
import IconButton from '@/components/IconButton'
import { Eye, EyeClosed } from 'lucide-react'

export default function PasswordField({
  name,
}: {
  name: string
}): ReactElement {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const handleClickShowPassword = (): void => {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <FormField
      label='Password'
      type={isShowPassword ? 'text' : 'password'}
      name={name}
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
  )
}
