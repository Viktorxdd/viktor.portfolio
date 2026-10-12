import { getAllExperience } from '../../data/experience'
import type { Experience } from '../../types/content'

// Hardcoded until LanguageProvider exists, same as in useProjects.
const CURRENT_LANG = 'sv'

export type LocalizedExperience = Omit<Experience, 'title' | 'description'> & {
  title: string
  description: string[]
}

export function useExperience(): LocalizedExperience[] {
  return getAllExperience().map((entry) => ({
    ...entry,
    title: entry.title[CURRENT_LANG],
    description: entry.description[CURRENT_LANG],
  }))
}
