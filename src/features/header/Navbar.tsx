'use client'

import { NAVLIST } from '@/constants/navList.constant'
import { ROUTES } from '@/constants/routes.constant'
import { CartStore } from '@/stores/cartStore'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactElement } from 'react'

export default function Navbar(): ReactElement {
  const pathname = usePathname()
  const totalQty = CartStore((state) => state.handleTotalQty)

  return (
    <nav className='w-full p-4 rounded-b-xl flex justify-between gap-15 items-center bg-gray-100 mx-auto shadow-lg shadow-gray-400 border border-gray-300'>
      <ul className='flex justify-between items-center gap-5'>
        {NAVLIST.map((item) => (
          <li
            key={item.route}
            className={`flex gap-1 justify-between items-end`}
          >
            <Link
              href={item.route}
              className={`cursor-pointer active:opacity-30 ${item.route === pathname ? 'border-b' : 'text-gray-600'}`}
            >
              {item.title}
            </Link>

            {item.title === 'Cart' && (
              <h4 className='w-6 h-6 text-sm flex justify-center items-center rounded-full bg-green-600 text-white font-bold'>
                {totalQty()}
              </h4>
            )}
          </li>
        ))}
      </ul>

      <Link href={ROUTES.HOME}>
        <Image
          src='/images/logo.svg'
          alt='logo'
          width={1080}
          height={1080}
          className='w-8'
        />
      </Link>
    </nav>
  )
}
