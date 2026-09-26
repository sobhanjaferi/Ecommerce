import type { ReactElement } from 'react'
import IconButton from './IconButton'

import { Minus, PlusIcon } from 'lucide-react'
import { CartStore } from '@/stores/cartStore'
import { ProductItemType } from '@/types/productItem'

export default function Counter({
  product,
}: {
  product: ProductItemType
}): ReactElement {
  const { handleIncrease, handleDecrease, handleOrderQty } = CartStore()

  return (
    <div className='flex justify-between items-center gap-5'>
      <IconButton
        className='w-11 h-10.5 text-green-700 bg-green-100 font-bold text-2xl border-2 rounded-lg'
        onClick={() => handleIncrease(product)}
      >
        <PlusIcon />
      </IconButton>

      <span className='text-xl border-b'>{handleOrderQty(product.id)}</span>

      <IconButton
        className='w-11 h-10.5 text-red-500 bg-red-100 font-bold text-2xl border-2 rounded-lg'
        onClick={() => handleDecrease(product.id)}
      >
        <Minus />
      </IconButton>
    </div>
  )
}
