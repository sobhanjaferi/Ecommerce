'use client'

import type { ReactElement } from 'react'
import OrderItem from './OrderItem'
import { CartItemType } from '@/types/cartStore'
import { CartStore } from '@/stores/cartStore'

export default function OrderItemContainer({
  orderItem,
}: {
  orderItem: CartItemType
}): ReactElement {
  const handleDeleteOrder = CartStore((state) => state.handleDeleteOrder)

  return <OrderItem orderItem={orderItem} handleDelete={handleDeleteOrder} />
}
