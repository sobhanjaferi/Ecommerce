'use client'

import { QueryKey, useQuery } from '@tanstack/react-query'

type Props = {
  queryKey: QueryKey
  url: string
}

type QueryItemsType<T> = {
  data: T | undefined
  isError: boolean
  error: Error | null
  isLoading: boolean
}

export function useQueryFetch<T>({ queryKey, url }: Props): QueryItemsType<T> {
  const { data, isError, error, isLoading } = useQuery<T>({
    queryKey,

    queryFn: async () => {
      const res = await fetch(url)

      if (!res.ok) throw new Error('failed to fetch!')

      const data = await res.json()
      return data
    },
  })

  return { data, isError, error, isLoading }
}
