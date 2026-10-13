import { useDocumentTitle } from '../../../logic/hooks/useDocumentTitle'
import { useExperience } from '../../../logic/hooks/useExperience'
import { useTranslations } from '../../../logic/i18n/useTranslations'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import Navbar from '../../components/Navbar/Navbar'
import styles from './ExperiencePage.module.css'

function ExperiencePage() {
  const experience = useExperience()
  const t = useTranslations()
  useDocumentTitle(t.pageTitles.experience)

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <p className={styles.prompt}>
          <span className={styles.accent}>guest</span>@viktor-portfolio
          <span className={styles.accent}>:~/experience$</span> ls -l
        </p>

        <h1 className={styles.heading}>{t.headings.experience}</h1>

        {experience.map((entry) => (
          <section
            key={`${entry.start}-${entry.organization}`}
            className={styles.entry}
          >
            <div className={styles.entryHeader}>
              <h2 className={styles.entryTitle}>{entry.title}</h2>
              <p className={styles.entryPeriod}>
                {entry.start} – {entry.end ?? t.experience.ongoing}
              </p>
            </div>

            <p className={styles.entryOrganization}>{entry.organization}</p>
            <ul className={styles.entryPoints}>
              {[
                ...entry.description,
                ...(entry.tech
                  ? [`${t.experience.techLabel}: ${entry.tech.join(', ')}.`]
                  : []),
              ].map((point, index) => (
                <li key={index} className={styles.entryPoint}>
                  {point}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <ContactFooter />
    </div>
  )
}

export default ExperiencePage
