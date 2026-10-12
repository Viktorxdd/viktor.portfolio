export type Localized<T> = { sv: T; en: T }

export type Project = {
  slug: string
  title: Localized<string>
  summary: Localized<string>
  description: Localized<string[]> // one array element per paragraph
  role?: Localized<string>
  tech: string[]
  images: { src: string; alt: Localized<string> }[]
  repoUrl?: string
  liveUrl?: string
  isPrivate: boolean
  date: string
  featured?: boolean
}

export type Experience = {
  type: 'education' | 'work' | 'other'
  title: Localized<string>
  organization: string
  start: string // ISO, e.g. "2024-08"
  end?: string // missing = ongoing
  description: Localized<string>
}
