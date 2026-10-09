import type { ComponentProps, MouseEvent } from 'react'
import { Link } from 'react-router'
import {
  useSlideNavigate,
  type SlideDirection,
} from '../../../logic/hooks/useSlideNavigate'

type SlideLinkProps = Omit<ComponentProps<typeof Link>, 'to'> & {
  to: string
  direction: SlideDirection
}

function SlideLink({ to, direction, onClick, ...rest }: SlideLinkProps) {
  const slideNavigate = useSlideNavigate()

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)

    // Leave new-tab clicks (ctrl/cmd/shift/alt, middle button) to the browser.
    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    if (event.defaultPrevented || event.button !== 0 || isModifiedClick) return

    event.preventDefault()
    slideNavigate(to, direction)
  }

  return <Link to={to} onClick={handleClick} {...rest} />
}

export default SlideLink
