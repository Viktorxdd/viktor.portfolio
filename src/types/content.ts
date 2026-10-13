export type Language = 'sv' | 'en'

export type Localized<T> = Record<Language, T>

export type Project = {
  slug: string
  title: Localized<string>
  summary: Localized<string>
  description: Localized<string[]> // one array element per paragraph
  role?: Localized<string>
  tech: string[]
  images: { src: string; alt: Localized<string> }[]
  thumbnail?: string // cropped version of the first image for the project list
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
  description: Localized<string[]> // one array element per bullet point
  tech?: string[] // shown as its own "Tech: ..." line, not as a bullet
  project?: string // slug of the project that covers this work, so the CV can skip repeating its tech
}

export type Hobby = {
  label: Localized<string>
  description: Localized<string[]> // one array element per paragraph, may contain [text](https://…) links
}

export type About = {
  bio: Localized<string[]> // one array element per paragraph
  hobbies: Hobby[]
}

export type TechCategory =
  | 'language'
  | 'framework'
  | 'tool'
  | 'database'
  | 'cloud'

export type TechItem = {
  name: string // must match the names used in Project.tech
  category: TechCategory
  icon?: string // path under public/, e.g. "/icons/typescript.svg"; text only if missing
}
