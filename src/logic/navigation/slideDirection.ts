// Where the incoming page enters from during a slide transition.
export type SlideDirection =
  | 'from-right'
  | 'from-left'
  | 'from-top'
  | 'from-bottom'

// Same order as the Navbar. Going to a later section slides in from the
// right, to an earlier one from the left.
const SECTION_ORDER = [
  '/about',
  '/projects',
  '/experience',
  '/tech-stack',
  '/contact',
]

function sectionIndex(path: string): number {
  return SECTION_ORDER.findIndex(
    (section) => path === section || path.startsWith(`${section}/`),
  )
}

function depth(path: string): number {
  return path.split('/').filter(Boolean).length
}

// The hero page ("/") sits above all other pages: leaving it slides the new
// page in from below, returning to it slides in from above.
export function getSlideDirection(from: string, to: string): SlideDirection {
  if (from === '/') return 'from-bottom'
  if (to === '/') return 'from-top'

  const fromIndex = sectionIndex(from)
  const toIndex = sectionIndex(to)

  if (fromIndex === toIndex) {
    // Within a section (e.g. /projects <-> /projects/:slug): deeper is "forward".
    return depth(to) >= depth(from) ? 'from-right' : 'from-left'
  }

  return toIndex > fromIndex ? 'from-right' : 'from-left'
}
