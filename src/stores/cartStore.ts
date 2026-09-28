'use client'

import { CartStoreType } from '@/types/cartStore'
import { ProductItemType } from '@/types/productItem'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const CartStore = create<CartStoreType>()(
  persist(
    (set, get) => ({
      orders: [],

      handleIncrease: (order: ProductItemType): void => {
        set((state) => {
          const orderIsExist = state.orders.some((item) => item.id === order.id)

          if (!orderIsExist) {
            return {
              orders: [...state.orders, { ...order, qty: 1 }],
            }
          }

          return {
            orders: state.orders.map((item) =>
              item.id === order.id ? { ...item, qty: item.qty + 1 } : item,
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

      handleOrderQty: (id: string): number => {
        const goalOrder = get().orders.find((item) => item.id === id)

        if (!goalOrder) return 0

        return goalOrder.qty
      },

      handleTotalQty: (): number => {
        if (get().orders.length === 0) return 0

        const qty = get().orders.reduce((sum, item) => sum + item.qty, 0)
        return qty
      },
    }),
    { name: 'cart-storage' },
  ),
)
