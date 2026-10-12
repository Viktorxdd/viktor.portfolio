import { getAllTechItems } from '../../data/techStack'
import type { TechCategory, TechItem } from '../../types/content'

// Order the groups appear in on the page.
const CATEGORY_ORDER: TechCategory[] = [
  'language',
  'framework',
  'tool',
  'database',
  'cloud',
]

export type TechGroup = {
  category: TechCategory
  items: TechItem[]
}

// Tech items grouped by category, empty groups left out.
export function useTechStack(): TechGroup[] {
  const items = getAllTechItems()

  return CATEGORY_ORDER.map((category) => ({
    category,
    items: items.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0)
}
