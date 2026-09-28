'use client'

import { useState } from 'react'

type ReturnType = {
  counter: number
  handleIncrease: () => void
  handleDecrease: () => void
}

export const useCounter = (): ReturnType => {
  const [counter, setCounter] = useState<number>(0)

  const handleIncrease = (): void => {
    setCounter((old) => old + 1)
  }

  const handleDecrease = (): void => {
    setCounter((old) => (old > 0 ? old - 1 : old))
  }

  return { counter, handleIncrease, handleDecrease }
}
