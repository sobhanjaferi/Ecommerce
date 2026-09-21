'use client'

import type { ReactElement } from 'react'
import ProductList from './ProductList'
import { useQuery } from '@tanstack/react-query'
import { ProductItemType } from '@/types/productItem'

export default function ProductContainer(): ReactElement {
  const { data, isLoading, isError, error } = useQuery<ProductItemType[]>({
    queryKey: ['product-list'],
    queryFn: async () => {
      const res = await fetch('/api/product-list')

      if (!res.ok) {
        throw new Error('failed to fetch')
      }

      const data = await res.json()
      return data
    },
  })

  if (isError) throw new Error(error.message)

  return (
    <div>
      <ProductList products={data ?? []} isLoading={isLoading} />
    </div>
  )
}
