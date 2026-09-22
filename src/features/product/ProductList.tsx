import type { ReactElement } from 'react'
import ProductItem from './ProductItem'
import { ProductItemType } from '@/types/productItem'
import Loading from '@/components/Loading'

type Props = {
  products: ProductItemType[]
  isLoading: boolean
}

export default function ProductList({
  products,
  isLoading,
}: Props): ReactElement {
  if (isLoading) return <Loading className='min-h-50 rounded-lg mb-20' />

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-2xl font-bold bg-linear-to-r from-gray-700 via-gray-300 to-gray-100 bg-clip-text text-transparent'>
        All Products
      </h2>

      <div className='grid grid-cols-2 gap-4'>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
