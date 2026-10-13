import { getAbout } from '../../data/about'

// Hardcoded until LanguageProvider exists, same as in useExperience.
const CURRENT_LANG = 'sv'

export type LocalizedAbout = {
  bio: string[]
  hobbies: {
    label: string
    description: string[]
    image?: { src: string; alt: string }
  }[]
}

export function useAbout(): LocalizedAbout {
  const about = getAbout()

  return {
    bio: about.bio[CURRENT_LANG],
    hobbies: about.hobbies.map((hobby) => ({
      label: hobby.label[CURRENT_LANG],
      description: hobby.description[CURRENT_LANG],
      image: hobby.image && {
        src: hobby.image.src,
        alt: hobby.image.alt[CURRENT_LANG],
      },
    })),
  }
}
