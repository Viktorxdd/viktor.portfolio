import { getAllExperience } from '../../data/experience'
import type { Experience } from '../../types/content'
import { useLanguage } from '../i18n/useLanguage'

export type LocalizedExperience = Omit<Experience, 'title' | 'description'> & {
  title: string
  description: string[]
}

export function useExperience(): LocalizedExperience[] {
  const { lang } = useLanguage()

  return getAllExperience().map((entry) => ({
    ...entry,
    title: entry.title[lang],
    description: entry.description[lang],
  }))
}
