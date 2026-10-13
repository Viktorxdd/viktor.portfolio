import { useLocation } from 'react-router'
import { useDocumentTitle } from '../../../logic/hooks/useDocumentTitle'
import { useProjects } from '../../../logic/hooks/useProjects'
import { useTranslations } from '../../../logic/i18n/useTranslations'
import { getSlideDirection } from '../../../logic/navigation/slideDirection'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import Navbar from '../../components/Navbar/Navbar'
import SlideLink from '../../components/SlideLink/SlideLink'
import styles from './ProjectsPage.module.css'

function ProjectsPage() {
  const projects = useProjects()
  const t = useTranslations()
  useDocumentTitle(t.pageTitles.projects)
  const { pathname } = useLocation()

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <p className={styles.prompt}>
          <span className={styles.accent}>guest</span>@viktor-portfolio
          <span className={styles.accent}>:~/projects$</span> ls
        </p>

        <h1 className={styles.heading}>{t.headings.projects}</h1>

        {projects.map((project) => (
          <section key={project.slug} className={styles.projectSection}>
            {project.images[0] ? (
              <img
                className={styles.image}
                src={project.thumbnail ?? project.images[0].src}
                alt={project.images[0].alt}
                loading="lazy"
              />
            ) : (
              <div className={styles.imagePlaceholder} aria-hidden="true">
                image
              </div>
            )}

            <div className={styles.projectText}>
              <h2 className={styles.projectTitle}>
                <SlideLink
                  to={`/projects/${project.slug}`}
                  direction={getSlideDirection(
                    pathname,
                    `/projects/${project.slug}`,
                  )}
                  className={styles.projectTitleLink}
                >
                  {project.title}
                </SlideLink>
              </h2>
              <p className={styles.projectSummary}>{project.summary}</p>

              <ul className={styles.techList}>
                {project.tech.map((tech) => (
                  <li key={tech} className={styles.techItem}>
                    {tech}
                  </li>
                ))}
              </ul>

              {project.isPrivate ? (
                <span className={styles.privateNote}>
                  {t.projects.privateRepo}
                </span>
              ) : (
                project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.repo}
                  </a>
                )
              )}
            </div>
          </section>
        ))}
      </main>

      <ContactFooter />
    </div>
  )
}

export default ProjectsPage
