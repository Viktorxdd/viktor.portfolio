import { useEffect, useState } from 'react'

type UseRevealCountOptions = {
  total: number
  speedMs?: number
}

export function useRevealCount({ total, speedMs = 40 }: UseRevealCountOptions) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= total) {
      return
    }
    const timeout = setTimeout(() => setCount(count + 1), speedMs)
    return () => clearTimeout(timeout)
  }, [count, total, speedMs])

  return { count, done: count >= total }
}
