import ProductCardContainer from '@/features/product/ProductCartContainer'
import type { ReactElement } from 'react'

export default async function ProductItemPage({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<ReactElement> {
  const { id } = await params

  return (
    <div>
      <ProductCardContainer productId={id} />
    </div>
  )
}
