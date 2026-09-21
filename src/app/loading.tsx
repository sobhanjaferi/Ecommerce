import Loading from '@/components/Loading'
import type { ReactElement } from 'react'

export default function LoadingPage(): ReactElement {
  return (
    <div>
      <Loading className='absolute top-0 bottom-0 right-0 left-0' />
    </div>
  )
}
