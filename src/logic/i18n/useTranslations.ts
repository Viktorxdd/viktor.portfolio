import { translations, type Translations } from './translations'
import { useLanguage } from './useLanguage'

export function useTranslations(): Translations {
  const { lang } = useLanguage()
  return translations[lang]
}
