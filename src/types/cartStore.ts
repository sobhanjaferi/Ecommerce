import { ProductItemType } from './productItem'

export type CartItemType = ProductItemType & { qty: number }
export type CartStoreType = {
  orders: CartItemType[]

  handleIncrease: (order: ProductItemType) => void
  handleDecrease: (id: string) => void
  handleDeleteOrder: (id: string) => void
  handleOrderQty: (id: string) => number
  handleTotalQty: () => number
}
