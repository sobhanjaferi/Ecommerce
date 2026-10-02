'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type UserStoreType = {
  ISUSEREXISTS: boolean
  handleSetTrue: () => void
  handleSetFalse: () => void
}

export const UserStore = create<UserStoreType>()(
  persist(
    (set) => ({
      ISUSEREXISTS: false,

      handleSetTrue: (): void => {
        set({ ISUSEREXISTS: true })
      },

      handleSetFalse: (): void => {
        set({ ISUSEREXISTS: false })
      },
    }),
    { name: 'USEREXISTS', partialize: (state) => state.ISUSEREXISTS },
  ),
)
