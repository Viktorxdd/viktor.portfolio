import { useAbout } from '../../../logic/hooks/useAbout'
import { useDocumentTitle } from '../../../logic/hooks/useDocumentTitle'
import { useTranslations } from '../../../logic/i18n/useTranslations'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import Navbar from '../../components/Navbar/Navbar'
import styles from './AboutPage.module.css'

function AboutPage() {
  const { bio, hobbies } = useAbout()
  const t = useTranslations()
  useDocumentTitle(t.pageTitles.about)

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <p className={styles.prompt}>
          <span className={styles.accent}>guest</span>@viktor-portfolio
          <span className={styles.accent}>:~/about$</span> cat about.md
        </p>

        <h1 className={styles.heading}>Viktor Liljegren</h1>

        <div className={styles.profileRow}>
          <div className={styles.profilePlaceholder} aria-hidden="true">
            profile.jpg
          </div>
          <div className={styles.bioText}>
            {bio.map((paragraph, index) => (
              <p key={index} className={styles.bio}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <h2 className={styles.sectionHeading}>{t.headings.hobbies}</h2>

        {hobbies.map((hobby) => (
          <section key={hobby.label} className={styles.hobbySection}>
            {hobby.image ? (
              <img
                className={styles.hobbyImage}
                src={hobby.image.src}
                alt={hobby.image.alt}
                loading="lazy"
              />
            ) : (
              <div className={styles.hobbyImagePlaceholder} aria-hidden="true">
                image
              </div>
            )}

            <div className={styles.hobbyText}>
              <h3 className={styles.hobbyLabel}>{hobby.label}</h3>
              {hobby.description.map((paragraph, index) => (
                <p key={index} className={styles.hobbyDescription}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </main>

      <ContactFooter />
    </div>
  )
}

export default AboutPage
