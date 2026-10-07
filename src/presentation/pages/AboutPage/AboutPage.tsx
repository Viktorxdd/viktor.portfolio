import ContactFooter from '../../components/ContactFooter/ContactFooter'
import Navbar from '../../components/Navbar/Navbar'
import styles from './AboutPage.module.css'

const PLACEHOLDER_BIO =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const HOBBIES = [
  {
    label: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    label: 'Consectetur adipiscing elit',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    label: 'Sed do eiusmod tempor incididunt',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

function AboutPage() {
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
          <p className={styles.bio}>{PLACEHOLDER_BIO}</p>
        </div>

        <h2 className={styles.sectionHeading}>hobbies</h2>

        {HOBBIES.map((hobby) => (
          <section key={hobby.label} className={styles.hobbySection}>
            <div className={styles.hobbyImagePlaceholder} aria-hidden="true">
              image
            </div>

            <div className={styles.hobbyText}>
              <h3 className={styles.hobbyLabel}>{hobby.label}</h3>
              <p className={styles.hobbyDescription}>{hobby.description}</p>
            </div>
          </section>
        ))}
      </main>

      <ContactFooter />
    </div>
  )
}

export default AboutPage
