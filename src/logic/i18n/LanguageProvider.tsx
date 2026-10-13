import { useEffect, useState, type ReactNode } from 'react'
import type { Language } from '../../types/content'
import { LanguageContext } from './languageContext'

const STORAGE_KEY = 'lang'

function isLanguage(value: unknown): value is Language {
  return value === 'sv' || value === 'en'
}

// ?lang= in the URL first (so a link can be shared in a given language),
// then the saved choice, then Swedish for Swedish browsers, English for
// everyone else.
function getInitialLanguage(): Language {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLanguage(fromUrl)) {
    return fromUrl
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLanguage(saved)) {
      return saved
    }
  } catch {
    // localStorage can be blocked, fall through to the browser language.
  }

  return navigator.language.toLowerCase().startsWith('sv') ? 'sv' : 'en'
}

function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Not being able to save the choice should not break the page.
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
