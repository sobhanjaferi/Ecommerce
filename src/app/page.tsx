import Slider from '@/components/Slider'
import ProductContainer from '@/features/product/ProductListContainer'
import type { ReactElement } from 'react'

export default function HomePage(): ReactElement {
  return (
    <div className='flex flex-col gap-10 w-full'>
      <Slider />

      <ProductContainer />
    </div>
  )
}
