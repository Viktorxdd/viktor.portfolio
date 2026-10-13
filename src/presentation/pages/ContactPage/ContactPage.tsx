import { useDocumentTitle } from '../../../logic/hooks/useDocumentTitle'
import { useProfile } from '../../../logic/hooks/useProfile'
import { useTranslations } from '../../../logic/i18n/useTranslations'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import CopyButton from '../../components/CopyButton/CopyButton'
import Navbar from '../../components/Navbar/Navbar'
import styles from './ContactPage.module.css'

function withoutProtocol(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '')
}

function ContactPage() {
  const { email, githubUrl, linkedinUrl, cvUrls } = useProfile()
  const t = useTranslations()
  useDocumentTitle(t.pageTitles.contact)

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <p className={styles.prompt}>
          <span className={styles.accent}>guest</span>@viktor-portfolio
          <span className={styles.accent}>:~/contact$</span> cat contact.md
        </p>

        <h1 className={styles.heading}>{t.headings.contact}</h1>

        <p className={styles.intro}>{t.contact.intro}</p>

        <dl className={styles.list}>
          <div className={styles.row}>
            <dt className={styles.label}>{t.contact.email}</dt>
            <dd className={styles.value}>
              <a href={`mailto:${email}`} className={styles.link}>
                {email}
              </a>
              <CopyButton text={email} label={t.contact.emailAddress} />
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
              {cvUrls ? (
                (['sv', 'en'] as const).map((lang) => (
                  <a
                    key={lang}
                    href={cvUrls[lang]}
                    className={styles.link}
                    aria-label={t.contact.cvDownload(lang)}
                    download
                  >
                    {lang}
                  </a>
                ))
              ) : (
                <span className={styles.placeholder}>
                  {t.contact.cvPlaceholder}
                </span>
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
