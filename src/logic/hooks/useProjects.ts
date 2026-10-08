import { getAllProjects } from '../../data/projects'
import type { Project } from '../../types/content'

// Hardcoded until LanguageProvider exists — swap for useLanguage()'s lang
// once it does, nothing else here needs to change.
const CURRENT_LANG = 'sv'

export type LocalizedProject = Omit<
  Project,
  'title' | 'summary' | 'description' | 'role'
> & {
  title: string
  summary: string
  description: string
  role?: string
}

function localizeProject(project: Project): LocalizedProject {
  return {
    ...project,
    title: project.title[CURRENT_LANG],
    summary: project.summary[CURRENT_LANG],
    description: project.description[CURRENT_LANG],
    role: project.role?.[CURRENT_LANG],
  }
}

export function useProjects(): LocalizedProject[] {
  return getAllProjects().map(localizeProject)
}
