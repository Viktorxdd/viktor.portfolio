import { getProjectBySlug } from '../../data/projects'
import { localizeProject, type LocalizedProject } from './useProjects'

export function useProject(slug: string | undefined): LocalizedProject | undefined {
  if (!slug) return undefined

  const project = getProjectBySlug(slug)
  return project ? localizeProject(project) : undefined
}
