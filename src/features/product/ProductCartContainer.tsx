'use client'

import Loading from '@/components/Loading'
import { useQueryFetch } from '@/hooks/QueryFetch'
import { ProductItemType } from '@/types/productItem'
import { type ReactElement } from 'react'
import ProductCart from './ProductCart'
import { CartStore } from '@/stores/cartStore'

type Props = {
  productId: string
}

export default function ProductCartContainer({
  productId,
}: Props): ReactElement {
  const handleOrderQty = CartStore((state) => state.handleOrderQty)

  const { data, error, isError, isLoading } = useQueryFetch<ProductItemType[]>({
    queryKey: ['product-item'],
    url: '/api/product-list',
  })

  if (isError) throw new Error(error?.message)
  if (isLoading) return <Loading className='min-h-100 mt-10 rounded-lg' />

  const goalProduct = data?.find((product) => product.id === productId)

  if (!goalProduct) return <p>data not found</p>

  return (
    <div>
      <ProductCart product={goalProduct} counter={handleOrderQty(productId)} />
    </div>
  )
}
