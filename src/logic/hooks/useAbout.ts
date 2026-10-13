import { getAbout } from '../../data/about'
import { useLanguage } from '../i18n/useLanguage'

export type LocalizedAbout = {
  bio: string[]
  hobbies: {
    label: string
    description: string[]
  }[]
}

export function useAbout(): LocalizedAbout {
  const { lang } = useLanguage()
  const about = getAbout()

  return {
    bio: about.bio[lang],
    hobbies: about.hobbies.map((hobby) => ({
      label: hobby.label[lang],
      description: hobby.description[lang],
    })),
  }
}
