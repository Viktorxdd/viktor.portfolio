import { flushSync } from 'react-dom'
import { useNavigate } from 'react-router'

export type SlideDirection = 'forward' | 'back'

// <BrowserRouter> has no built-in view transitions, so wrap navigate() in the
// browser's View Transitions API ourselves. The direction goes on <html> as
// data-slide so transitions.css knows which way to slide.
export function useSlideNavigate() {
  const navigate = useNavigate()

  return (to: string, direction: SlideDirection) => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (!document.startViewTransition || prefersReducedMotion) {
      navigate(to)
      return
    }

    const root = document.documentElement
    root.dataset.slide = direction

    const transition = document.startViewTransition(() => {
      // flushSync makes React update the DOM before the "after" snapshot.
      // Needs <BrowserRouter useTransitions={false}> (see main.tsx).
      flushSync(() => navigate(to))
    })

    void transition.finished.finally(() => {
      delete root.dataset.slide
    })
  }
}
