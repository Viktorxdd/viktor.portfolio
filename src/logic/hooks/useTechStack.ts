import { getAllTechItems } from '../../data/techStack'
import type { TechCategory, TechItem } from '../../types/content'
import { useProjects } from './useProjects'

// Order the groups appear in on the page.
const CATEGORY_ORDER: TechCategory[] = [
  'language',
  'framework',
  'tool',
  'database',
  'cloud',
]

export type TechItemWithProjects = TechItem & {
  projects: { slug: string; title: string }[]
}

export type TechGroup = {
  category: TechCategory
  items: TechItemWithProjects[]
}

// Tech items grouped by category (empty groups left out), each with the
// projects that list it in Project.tech.
export function useTechStack(): TechGroup[] {
  const projects = useProjects()

  const items: TechItemWithProjects[] = getAllTechItems().map((item) => ({
    ...item,
    projects: projects
      .filter((project) => project.tech.includes(item.name))
      .map((project) => ({ slug: project.slug, title: project.title })),
  }))

  return CATEGORY_ORDER.map((category) => ({
    category,
    items: items.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0)
}
