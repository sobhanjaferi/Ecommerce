import Button from '@/components/Button'
import Counter from '@/components/Counter'
import Gallery from '@/components/Gallery'
import { ProductItemType } from '@/types/productItem'
import { type ReactElement } from 'react'

type Props = {
  product: ProductItemType
  counter: number
}

export default function ProductCart({ product, counter }: Props): ReactElement {
  return (
    <div className='w-full mb-10 flex flex-col gap-5'>
      <Gallery gallery={product.gallery} />

      <div className='w-full flex justify-between items-center text-lg'>
        <h3>{product.title}</h3>

        <h4>
          price :{' '}
          <strong className='text-green-700 border-b'>{product.price}$</strong>
        </h4>
      </div>

      <p className='text-gray-600 text-sm'>{product.content}</p>

      <div className='w-full flex justify-between items-center'>
        <Button className='w-50' disabled={counter === 0}>
          Add to cart
        </Button>

        <Counter product={product} />
      </div>
    </div>
  )
}
