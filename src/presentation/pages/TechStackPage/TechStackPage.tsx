import { useLocation } from 'react-router'
import { useTechStack } from '../../../logic/hooks/useTechStack'
import { getSlideDirection } from '../../../logic/navigation/slideDirection'
import type { TechCategory } from '../../../types/content'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import Navbar from '../../components/Navbar/Navbar'
import SlideLink from '../../components/SlideLink/SlideLink'
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
  const { pathname } = useLocation()

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

                  {item.projects.length > 0 && (
                    <ul className={styles.projects}>
                      {item.projects.map((project) => (
                        <li key={project.slug}>
                          <SlideLink
                            to={`/projects/${project.slug}`}
                            direction={getSlideDirection(
                              pathname,
                              `/projects/${project.slug}`,
                            )}
                            className={styles.projectLink}
                          >
                            {project.title}
                          </SlideLink>
                        </li>
                      ))}
                    </ul>
                  )}
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
