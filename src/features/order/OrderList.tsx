import type { ReactElement } from 'react'
import { CartItemType } from '@/types/cartStore'
import OrderItemContainer from './OrderItemContainer'

type Props = {
  orders: CartItemType[]
}

export default function OrderList({ orders }: Props): ReactElement {
  return (
    <div className='flex flex-col justify-start items-center gap-5 mb-10'>
      {orders.map((item) => (
        <OrderItemContainer key={item.id} orderItem={item} />
      ))}
    </div>
  )
}
