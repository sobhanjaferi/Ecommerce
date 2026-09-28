'use client'

import type { ReactElement } from 'react'
import ProductList from './ProductList'
import { useQueryFetch } from '@/hooks/QueryFetch'
import { ProductItemType } from '@/types/productItem'

export default function ProductContainer(): ReactElement {
  const { data, isLoading, isError, error } = useQueryFetch<ProductItemType[]>({
    queryKey: ['product-list'],
    url: '/api/product-list',
  })

  if (isError) {
    if (error) throw new Error(error.message)
  }

  return (
    <div>
      <ProductList products={data ?? []} isLoading={isLoading} />
    </div>
  )
}
