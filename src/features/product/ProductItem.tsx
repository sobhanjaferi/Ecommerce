import Button from '@/components/Button'
import { ProductItemType } from '@/types/productItem'
import Image from 'next/image'
import type { ReactElement } from 'react'

type Props = Omit<ProductItemType, 'id' | 'gallery' | 'content'>

export default function ProductItem({
  title,
  mainImage,
  price,
}: Props): ReactElement {
  return (
    <div className='flex flex-col gap-2 p-2 rounded-lg h-67 w-full bg-gray-100 shadow shadow-gray-400 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg'>
      <Image
        src={mainImage}
        alt={title}
        width={1080}
        height={1080}
        className='w-full h-8/12 bg-amber-300 rounded-md'
      />

      <div className='w-full h-4/12 flex flex-col justify-between gap-1'>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg'>title</h3>

          <h4>
            price : <strong>{price}$</strong>
          </h4>
        </div>

        <Button className='text-sm font-bold'>Add to cart</Button>
      </div>
    </div>
  )
}
