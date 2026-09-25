export type CartStoreType = {
  orders: { id: string; qty: number }[]

  handleIncrease: (id: string) => void
  handleDecrease: (id: string) => void
  handleDeleteOrder: (id: string) => void
  handleOrderQty: () => number
}
