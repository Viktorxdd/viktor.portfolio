import { useExperience } from '../../../logic/hooks/useExperience'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import Navbar from '../../components/Navbar/Navbar'
import styles from './ExperiencePage.module.css'

// Hardcoded until LanguageProvider exists — move to translations.ts then.
const ONGOING_LABEL = 'pågående'

function ExperiencePage() {
  const experience = useExperience()

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <p className={styles.prompt}>
          <span className={styles.accent}>guest</span>@viktor-portfolio
          <span className={styles.accent}>:~/experience$</span> ls -l
        </p>

        <h1 className={styles.heading}>experience</h1>

        {experience.map((entry) => (
          <section
            key={`${entry.start}-${entry.organization}`}
            className={styles.entry}
          >
            <div className={styles.entryHeader}>
              <h2 className={styles.entryTitle}>{entry.title}</h2>
              <p className={styles.entryPeriod}>
                {entry.start} – {entry.end ?? ONGOING_LABEL}
              </p>
            </div>

            <p className={styles.entryOrganization}>{entry.organization}</p>
            <ul className={styles.entryPoints}>
              {entry.description.map((point, index) => (
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
