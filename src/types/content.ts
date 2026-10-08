export type Localized<T> = { sv: T; en: T }

export type Project = {
  slug: string
  title: Localized<string>
  summary: Localized<string>
  description: Localized<string>
  role?: Localized<string>
  tech: string[]
  images: { src: string; alt: Localized<string> }[]
  repoUrl?: string
  liveUrl?: string
  isPrivate: boolean
  date: string
  featured?: boolean
}
