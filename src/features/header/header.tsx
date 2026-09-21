'use client'

import { NAVLIST } from '@/constants/navList'
import { ROUTES } from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactElement } from 'react'

export default function Header(): ReactElement {
  const pathname = usePathname()

  return (
    <header className='w-full p-4 mb-2 rounded-b-xl flex justify-between gap-20 items-center bg-gray-100 mx-auto shadow-lg shadow-gray-400'>
      <nav>
        <ul className='flex justify-between items-center gap-5'>
          {NAVLIST.map((item) => (
            <li
              key={item.route}
              className={item.route === pathname ? 'border-b' : 'text-gray-600'}
            >
              <Link
                href={item.route}
                className='cursor-pointer active:opacity-30'
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href={ROUTES.HOME}>
        <Image
          src='/images/logo.svg'
          alt='logo'
          width={1080}
          height={1080}
          className='w-8'
        />
      </Link>
    </header>
  )
}
