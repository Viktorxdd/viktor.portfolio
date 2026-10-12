import { useTechStack } from '../../../logic/hooks/useTechStack'
import type { TechCategory } from '../../../types/content'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import Navbar from '../../components/Navbar/Navbar'
import styles from './TechStackPage.module.css'

// Hardcoded until LanguageProvider exists — move to translations.ts then.
const CATEGORY_LABELS: Record<TechCategory, string> = {
  language: 'languages',
  framework: 'frameworks',
  tool: 'tools',
  database: 'databases',
  cloud: 'cloud',
}

function TechStackPage() {
  const groups = useTechStack()

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <p className={styles.prompt}>
          <span className={styles.accent}>guest</span>@viktor-portfolio
          <span className={styles.accent}>:~/tech-stack$</span> ls
        </p>

        <h1 className={styles.heading}>tech stack</h1>

        {groups.map((group) => (
          <section key={group.category} className={styles.group}>
            <h2 className={styles.groupHeading}>
              {CATEGORY_LABELS[group.category]}
            </h2>

            <ul className={styles.grid}>
              {group.items.map((item) => (
                <li key={item.name} className={styles.item}>
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt=""
                      className={styles.icon}
                      loading="lazy"
                    />
                  )}
                  <span className={styles.name}>{item.name}</span>
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

export default TechStackPage
