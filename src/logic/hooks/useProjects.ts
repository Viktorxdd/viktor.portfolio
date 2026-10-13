import { getAllProjects } from '../../data/projects'
import type { Language, Project } from '../../types/content'
import { useLanguage } from '../i18n/useLanguage'

export type LocalizedProject = Omit<
  Project,
  'title' | 'summary' | 'description' | 'role' | 'images'
> & {
  title: string
  summary: string
  description: string[]
  role?: string
  images: { src: string; alt: string }[]
}

export function localizeProject(
  project: Project,
  lang: Language,
): LocalizedProject {
  return {
    ...project,
    title: project.title[lang],
    summary: project.summary[lang],
    description: project.description[lang],
    role: project.role?.[lang],
    images: project.images.map((image) => ({
      src: image.src,
      alt: image.alt[lang],
    })),
  }
}

export function useProjects(): LocalizedProject[] {
  const { lang } = useLanguage()

  return getAllProjects().map((project) => localizeProject(project, lang))
}
