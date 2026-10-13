import { useEffect } from 'react'
import { useExperience } from '../../../logic/hooks/useExperience'
import { useDocumentTitle } from '../../../logic/hooks/useDocumentTitle'
import { useProfile } from '../../../logic/hooks/useProfile'
import { useProjects } from '../../../logic/hooks/useProjects'
import { useTechStack } from '../../../logic/hooks/useTechStack'
import { useTranslations } from '../../../logic/i18n/useTranslations'
import styles from './CvPage.module.css'

const PHONE_PATTERN = /^[+\d\s()-]{6,20}$/

// The phone number is deliberately not stored in the source (the repo is
// public). It is only shown if it is passed in the URL, e.g. /cv?phone=...,
// which is how the PDF is exported.
function readPhone(): string | null {
  const phone = new URLSearchParams(window.location.search).get('phone')
  return phone && PHONE_PATTERN.test(phone) ? phone : null
}

function withoutProtocol(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '')
}

function CvPage() {
  const t = useTranslations()
  const experience = useExperience()
  const projects = useProjects()
  const skills = useTechStack()
  const { email, githubUrl, linkedinUrl, siteUrl } = useProfile()
  const phone = readPhone()
  useDocumentTitle('CV')

  const work = experience.filter((entry) => entry.type !== 'education')
  const education = experience.filter((entry) => entry.type === 'education')

  // The rest of the site is dark: keep the whole canvas white while the CV
  // is shown, so no dark strip appears below the sheet (e.g. in the PDF).
  useEffect(() => {
    const root = document.documentElement
    const previous = root.style.background
    root.style.background = '#fff'
    return () => {
      root.style.background = previous
    }
  }, [])

  const contactRows = [
    [email, phone].filter(Boolean),
    [
      siteUrl && withoutProtocol(siteUrl),
      withoutProtocol(githubUrl),
      withoutProtocol(linkedinUrl),
    ].filter(Boolean),
  ]

  return (
    <div className={styles.page}>
      <main className={styles.sheet}>
        <header className={styles.header}>
          <h1 className={styles.name}>Viktor Liljegren</h1>
          <p className={styles.role}>{t.cv.role}</p>
          <div className={styles.contact}>
            {contactRows.map((row, rowIndex) => (
              <p key={rowIndex} className={styles.contactRow}>
                {row.map((item, index) => (
                  <span key={item}>
                    {index > 0 && (
                      <span className={styles.separator} aria-hidden="true">
                        {' · '}
                      </span>
                    )}
                    {item}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </header>

        <p className={styles.summary}>{t.cv.summary}</p>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t.cv.headings.experience}</h2>
          {work.map((entry) => (
            <article
              key={`${entry.start}-${entry.organization}`}
              className={styles.entry}
            >
              <div className={styles.entryHeader}>
                <h3 className={styles.entryTitle}>
                  {entry.title}
                  <span className={styles.organization}>
                    {' '}
                    · {entry.organization}
                  </span>
                </h3>
                <p className={styles.period}>
                  {entry.start} – {entry.end ?? t.experience.ongoing}
                </p>
              </div>
              <ul className={styles.points}>
                {entry.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t.cv.headings.education}</h2>
          {education.map((entry) => (
            <article
              key={`${entry.start}-${entry.organization}`}
              className={styles.entry}
            >
              <div className={styles.entryHeader}>
                <h3 className={styles.entryTitle}>
                  {entry.title}
                  <span className={styles.organization}>
                    {' '}
                    · {entry.organization}
                  </span>
                </h3>
                <p className={styles.period}>
                  {entry.start} – {entry.end ?? t.experience.ongoing}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>{t.cv.headings.projects}</h2>
          {projects.map((project) => (
            <article key={project.slug} className={styles.entry}>
              <h3 className={styles.entryTitle}>{project.title}</h3>
              <p className={styles.text}>{project.summary}</p>
              <p className={styles.tech}>{project.tech.join(', ')}</p>
              {(project.liveUrl || project.repoUrl) && (
                <p className={styles.tech}>
                  {[project.liveUrl, project.repoUrl]
                    .filter((url): url is string => Boolean(url))
                    .map(withoutProtocol)
                    .join(' · ')}
                </p>
              )}
            </article>
          ))}
        </section>

        <div className={styles.columns}>
          <section className={styles.section}>
            <h2 className={styles.heading}>{t.cv.headings.skills}</h2>
            <dl className={styles.skills}>
              {skills.map((group) => (
                <div key={group.category} className={styles.skillRow}>
                  <dt className={styles.skillLabel}>
                    {t.techStack.categories[group.category]}
                  </dt>
                  <dd className={styles.skillItems}>
                    {group.items.map((item) => item.name).join(', ')}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>{t.cv.headings.languages}</h2>
            <ul className={styles.languages}>
              {t.cv.languages.map((language) => (
                <li key={language.name}>
                  {language.name}
                  <span className={styles.organization}>
                    {' '}
                    · {language.level}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}

export default CvPage
