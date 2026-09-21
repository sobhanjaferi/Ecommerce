import { LoaderCircle } from 'lucide-react'
import type { ReactElement } from 'react'

export default function Loading(): ReactElement {
  return (
    <div className='flex justify-center items-center gap-2 bg-gray-200 text-2xl z-50 absolute top-0 bottom-0 right-0 left-0'>
      <LoaderCircle className='loading' />

      <h1>Loading ...</h1>
    </div>
  )
}
