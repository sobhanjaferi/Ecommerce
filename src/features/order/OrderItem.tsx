'use client'

import Button from '@/components/Button'
import Counter from '@/components/Counter'
import { CartItemType } from '@/types/cartStore'
import Image from 'next/image'
import type { ReactElement } from 'react'

type Props = {
  orderItem: CartItemType
  handleDelete: (id: string) => void
}

export default function OrderItem({
  orderItem,
  handleDelete,
}: Props): ReactElement {
  return (
    <div className='w-full h-50 p-3 bg-gray-100 border border-gray-600 rounded flex justify-between items-center gap-4'>
      <Image
        src={orderItem.mainImage}
        alt={orderItem.title}
        width={1080}
        height={1080}
        className='h-full w-2/5 rounded'
      />

      <div className='h-full w-3/5 flex flex-col justify-between py-1'>
        <div className='flex justify-between items-center gap-4'>
          <span className='w-3/5  text-sm'>{orderItem.title}</span>

          <span>
            price :{' '}
            <strong className='text-green-700 border-b'>
              {orderItem.price}$
            </strong>
          </span>
        </div>

        <div className='flex justify-between items-center'>
          <Button color='red' onClick={() => handleDelete(orderItem.id)}>
            Delete Item
          </Button>

          <Counter product={orderItem} />
        </div>
      </div>
    </div>
  )
}
