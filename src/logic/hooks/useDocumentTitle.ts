import { useEffect } from 'react'

const SITE_NAME = 'Viktor Liljegren'

// Sets the tab title to "<page> | Viktor Liljegren", or just the name
// when no page title is given (the hero page).
export function useDocumentTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME
  }, [pageTitle])
}
