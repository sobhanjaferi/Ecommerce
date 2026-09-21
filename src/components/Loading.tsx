import { LoaderCircle } from 'lucide-react'
import type { ComponentProps, ReactElement } from 'react'

type Props = ComponentProps<'div'>

export default function Loading({
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <div
      className={`flex justify-center items-center gap-2 bg-gray-200 text-2xl w-full h-full ${className}`}
      {...otherProps}
    >
      <LoaderCircle className='loading' />

      <h1>Loading ...</h1>
    </div>
  )
}
