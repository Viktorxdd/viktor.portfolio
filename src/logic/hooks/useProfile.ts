import {
  CV_URLS,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_URL,
} from '../../data/profile'

export function useProfile() {
  return {
    email: EMAIL,
    githubUrl: GITHUB_URL,
    linkedinUrl: LINKEDIN_URL,
    cvUrls: CV_URLS,
    siteUrl: SITE_URL,
  }
}
