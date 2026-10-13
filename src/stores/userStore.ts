'use client'

import { create } from 'zustand'

export type UserStoreType = {
  ISUSEREXISTS: boolean
  handleSetTrue: () => void
  handleSetFalse: () => void
}

export const UserStore = create<UserStoreType>()((set) => ({
  ISUSEREXISTS: false,

  handleSetTrue: (): void => {
    set({ ISUSEREXISTS: true })
  },

  handleSetFalse: (): void => {
    set({ ISUSEREXISTS: false })
  },
}))
