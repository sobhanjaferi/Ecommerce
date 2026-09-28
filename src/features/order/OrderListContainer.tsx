'use client'

import type { ReactElement } from 'react'
import OrderList from './OrderList'
import { CartStore } from '@/stores/cartStore'

export default function OrderListContainer(): ReactElement {
  const orders = CartStore((state) => state.orders)

  return (
    <div>
      <OrderList orders={orders} />
    </div>
  )
}
