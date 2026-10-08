import { useEffect, useState } from 'react'

type UseTypewriterOptions = {
  words: string[]
  typingSpeedMs?: number
  deletingSpeedMs?: number
  pauseMs?: number
}

export function useTypewriter({
  words,
  typingSpeedMs = 90,
  deletingSpeedMs = 50,
  pauseMs = 1400,
}: UseTypewriterOptions) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const isWordComplete = display === currentWord
    const isWordEmpty = display === ''

    if (!isDeleting && isWordComplete) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseMs)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && isWordEmpty) {
      const timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((previous) => (previous + 1) % words.length)
      }, 400)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(
      () => {
        const nextLength = display.length + (isDeleting ? -1 : 1)
        setDisplay(currentWord.slice(0, nextLength))
      },
      isDeleting ? deletingSpeedMs : typingSpeedMs,
    )
    return () => clearTimeout(timeout)
  }, [
    display,
    isDeleting,
    wordIndex,
    words,
    typingSpeedMs,
    deletingSpeedMs,
    pauseMs,
  ])

  return display
}
