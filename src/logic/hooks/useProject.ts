import { getProjectBySlug } from '../../data/projects'
import { useLanguage } from '../i18n/useLanguage'
import { localizeProject, type LocalizedProject } from './useProjects'

export function useProject(slug: string | undefined): LocalizedProject | undefined {
  const { lang } = useLanguage()

  if (!slug) return undefined

  const project = getProjectBySlug(slug)
  return project ? localizeProject(project, lang) : undefined
}
