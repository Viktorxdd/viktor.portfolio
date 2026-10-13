import { useDocumentTitle } from '../../../logic/hooks/useDocumentTitle'
import { useTechStack } from '../../../logic/hooks/useTechStack'
import { useTranslations } from '../../../logic/i18n/useTranslations'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import Navbar from '../../components/Navbar/Navbar'
import styles from './TechStackPage.module.css'

function TechStackPage() {
  const groups = useTechStack()
  const t = useTranslations()
  useDocumentTitle(t.pageTitles.techStack)

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <p className={styles.prompt}>
          <span className={styles.accent}>guest</span>@viktor-portfolio
          <span className={styles.accent}>:~/tech-stack$</span> ls
        </p>

        <h1 className={styles.heading}>{t.headings.techStack}</h1>

        {groups.map((group) => (
          <section key={group.category} className={styles.group}>
            <h2 className={styles.groupHeading}>
              {t.techStack.categories[group.category]}
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
