import { CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from '../../data/profile'

export function useProfile() {
  return {
    email: EMAIL,
    githubUrl: GITHUB_URL,
    linkedinUrl: LINKEDIN_URL,
    cvUrl: CV_URL,
  }
}
