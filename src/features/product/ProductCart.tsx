import Button from '@/components/Button'
import Gallery from '@/components/Gallery'
import IconButton from '@/components/IconButton'
import { ProductItemType } from '@/types/productItem'
import { Minus, PlusIcon } from 'lucide-react'
import { type ReactElement } from 'react'

type Props = Omit<ProductItemType, 'id' | 'mainImage'> & {
  counter: number
  handleIncrease: () => void
  handleDecrease: () => void
}

export default function ProductCart({
  title,
  content,
  gallery,
  price,
  counter,
  handleDecrease,
  handleIncrease,
}: Props): ReactElement {
  return (
    <div className='w-full my-10 flex flex-col gap-5'>
      <Gallery gallery={gallery} />

      <div className='w-full flex justify-between items-center text-lg'>
        <h3>{title}</h3>

        <h4>
          price : <strong className='text-green-700 border-b'>{price}$</strong>
        </h4>
      </div>

      <p className='text-gray-600 text-sm'>{content}</p>

      <div className='w-full flex justify-between items-center'>
        <Button className='w-50' disabled={counter === 0}>
          Add to cart
        </Button>

        <div className='flex justify-between items-center gap-5'>
          <IconButton
            className='w-11 h-10.5 text-green-700 bg-green-100 font-bold text-2xl border-2 rounded-lg'
            onClick={handleIncrease}
          >
            <PlusIcon />
          </IconButton>

          <span className='text-xl border-b'>{counter}</span>

          <IconButton
            className='w-11 h-10.5 text-red-500 bg-red-100 font-bold text-2xl border-2 rounded-lg'
            onClick={handleDecrease}
          >
            <Minus />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
