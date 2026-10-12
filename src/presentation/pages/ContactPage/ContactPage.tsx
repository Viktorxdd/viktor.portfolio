import { useProfile } from '../../../logic/hooks/useProfile'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import CopyButton from '../../components/CopyButton/CopyButton'
import Navbar from '../../components/Navbar/Navbar'
import styles from './ContactPage.module.css'

// Hardcoded until LanguageProvider exists — move to translations.ts then.
const INTRO = 'Jag söker jobb som utvecklare. Hör gärna av dig!'
const CV_PLACEHOLDER = 'kommer snart'

function withoutProtocol(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '')
}

function ContactPage() {
  const { email, githubUrl, linkedinUrl, cvUrl } = useProfile()

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <p className={styles.prompt}>
          <span className={styles.accent}>guest</span>@viktor-portfolio
          <span className={styles.accent}>:~/contact$</span> cat contact.md
        </p>

        <h1 className={styles.heading}>contact</h1>

        <p className={styles.intro}>{INTRO}</p>

        <dl className={styles.list}>
          <div className={styles.row}>
            <dt className={styles.label}>email</dt>
            <dd className={styles.value}>
              <a href={`mailto:${email}`} className={styles.link}>
                {email}
              </a>
              <CopyButton text={email} label="email address" />
            </dd>
          </div>

          <div className={styles.row}>
            <dt className={styles.label}>github</dt>
            <dd className={styles.value}>
              <a
                href={githubUrl}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {withoutProtocol(githubUrl)}
              </a>
            </dd>
          </div>

          <div className={styles.row}>
            <dt className={styles.label}>linkedin</dt>
            <dd className={styles.value}>
              <a
                href={linkedinUrl}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {withoutProtocol(linkedinUrl)}
              </a>
            </dd>
          </div>

          <div className={styles.row}>
            <dt className={styles.label}>cv</dt>
            <dd className={styles.value}>
              {cvUrl ? (
                <a href={cvUrl} className={styles.link} download>
                  {cvUrl.split('/').pop()}
                </a>
              ) : (
                <span className={styles.placeholder}>{CV_PLACEHOLDER}</span>
              )}
            </dd>
          </div>
        </dl>
      </main>

      <ContactFooter />
    </div>
  )
}

export default ContactPage
