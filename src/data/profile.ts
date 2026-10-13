export const EMAIL = 'viktor.liljegren99@gmail.com'
export const GITHUB_URL = 'https://github.com/Viktorxdd'
export const LINKEDIN_URL =
  'https://www.linkedin.com/in/viktor-liljegren-b5801018a'

// Address of the live site once it is deployed, e.g. 'https://example.com'.
// Shown on the CV and used as the portfolio project's live link.
export const SITE_URL: string | undefined = 'https://viktorliljegren.dev'

// The public CVs (without a phone number), one per language. The files live
// in public/ and are exported from the /cv page. Set to undefined to show a
// placeholder on the contact page instead.
export const CV_URLS: { sv: string; en: string } | undefined = {
  sv: '/viktor-liljegren-cv-sv.pdf',
  en: '/viktor-liljegren-cv-en.pdf',
}
