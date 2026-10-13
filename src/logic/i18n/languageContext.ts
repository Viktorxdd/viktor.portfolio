import { createContext } from 'react'
import type { Language } from '../../types/content'

export type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
