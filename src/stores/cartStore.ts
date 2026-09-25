'use client'

import { CartStoreType } from '@/types/cartStore'
import { create } from 'zustand'

export const CartStore = create<CartStoreType>()((set, get) => ({
  orders: [],

  handleIncrease: (id: string): void => {
    set((state) => {
      const orderIsExist = state.orders.some((order) => order.id === id)

      if (!orderIsExist) {
        return {
          orders: [...state.orders, { id, qty: 1 }],
        }
      }

      return {
        orders: state.orders.map((order) =>
          order.id === id ? { ...order, qty: order.qty + 1 } : order,
        ),
      }
    })
  },

  handleDecrease: (id: string): void => {
    set((state) => ({
      orders: state.orders
        .map((order) =>
          order.id === id ? { ...order, qty: order.qty - 1 } : order,
        )
        .filter((order) => order.qty > 0),
    }))
  },

  handleDeleteOrder: (id: string): void => {
    set((state) => ({
      orders: state.orders.filter((order) => order.id !== id),
    }))
  },

  handleOrderQty: (): number => {
    const totalQty = get().orders.reduce((sum, order) => sum + order.qty, 0)

    return totalQty
  },
}))
