import type { ReactElement } from 'react'
import IconButton from './IconButton'
import { useCounter } from '@/hooks/Counter'
import { Minus, PlusIcon } from 'lucide-react'

export default function Counter(): ReactElement {
  const { counter, handleDecrease, handleIncrease } = useCounter()

  return (
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
  )
}
