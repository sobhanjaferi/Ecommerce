'use client'

import type { ReactElement } from 'react'
import ProductItem from './ProductItem'
import { ProductItemType } from '@/types/productItem'
import { CartStore } from '@/stores/cartStore'

export default function ProductItemContainer({
  product,
}: {
  product: ProductItemType
}): ReactElement {
  const handleIncrease = CartStore((state) => state.handleIncrease)

  return <ProductItem product={product} handleIncrease={handleIncrease} />
}
