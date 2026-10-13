import { useLocation, useParams } from 'react-router'
import { useDocumentTitle } from '../../../logic/hooks/useDocumentTitle'
import { useProject } from '../../../logic/hooks/useProject'
import { useTranslations } from '../../../logic/i18n/useTranslations'
import { getSlideDirection } from '../../../logic/navigation/slideDirection'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import Navbar from '../../components/Navbar/Navbar'
import SlideLink from '../../components/SlideLink/SlideLink'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import styles from './ProjectDetailPage.module.css'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = useProject(slug)
  const { pathname } = useLocation()
  const t = useTranslations()
  useDocumentTitle(project?.title)

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <SlideLink
          to="/projects"
          direction={getSlideDirection(pathname, '/projects')}
          className={styles.back}
        >
          &larr; {t.projects.back}
        </SlideLink>

        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.meta}>
            {project.date}
            {project.role && ` · ${project.role}`}
          </p>
        </header>

        {project.images.length > 0 ? (
          <ImageCarousel
            images={project.images}
            label={t.projects.galleryLabel(project.title)}
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            image
          </div>
        )}

        <div className={styles.description}>
          {project.description.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <section className={styles.section} aria-labelledby="tech-heading">
          <h2 id="tech-heading" className={styles.sectionHeading}>
            {t.projects.tech}
          </h2>
          <ul className={styles.techList}>
            {project.tech.map((tech) => (
              <li key={tech} className={styles.techItem}>
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.links}>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.repo}
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.live}
            </a>
          )}
          {project.isPrivate && (
            <span className={styles.privateNote}>{t.projects.privateRepo}</span>
          )}
        </div>
      </main>

      <ContactFooter />
    </div>
  )
}

export default ProjectDetailPage
