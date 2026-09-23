import Button from '@/components/Button'
import { ProductItemType } from '@/types/productItem'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactElement } from 'react'

type Props = Omit<ProductItemType, 'gallery' | 'content'>

export default function ProductItem({
  id,
  title,
  mainImage,
  price,
}: Props): ReactElement {
  return (
    <div className='flex flex-col gap-2 p-2 rounded-lg h-75 w-full bg-gray-100 shadow shadow-gray-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg'>
      <Link href={`/product/${id}`} className='h-8/12'>
        <Image
          src={mainImage}
          alt={title}
          width={1080}
          height={1080}
          className='w-full h-full rounded-md'
        />
      </Link>

      <div className='w-full h-4/12 flex flex-col justify-between gap-1'>
        <div className='flex justify-between items-center'>
          <h3 className='text-sm max-w-30 overflow-auto'>{title}</h3>

          <h4>
            price :{' '}
            <strong className='text-green-700 border-b'>{price}$</strong>
          </h4>
        </div>

        <Button className='text-sm font-bold z-50'>Add to cart</Button>
      </div>
    </div>
  )
}
