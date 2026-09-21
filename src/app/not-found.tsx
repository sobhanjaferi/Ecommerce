import { ROUTES } from '@/constants/routes.constant'
import Link from 'next/link'
import type { ReactElement } from 'react'

export default function Custom404(): ReactElement {
  return (
    <div className='flex flex-col justify-center items-center pt-40 gap-2'>
      <h1 className='text-3xl text-red-600 font-bold'>404 | Not Found</h1>

      <div className='flex gap-2 text-xl'>
        <p>Could not find page return to</p>

        <Link
          href={ROUTES.HOME}
          className='font-bold text-blue-600 border-b border-blue-600'
        >
          Home
        </Link>
      </div>
    </div>
  )
}
