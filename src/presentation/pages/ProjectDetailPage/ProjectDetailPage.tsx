import { Link, useParams } from 'react-router'
import { useProject } from '../../../logic/hooks/useProject'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import Navbar from '../../components/Navbar/Navbar'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import styles from './ProjectDetailPage.module.css'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = useProject(slug)

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <Link to="/projects" className={styles.back}>
          &larr; projects
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.meta}>
            {project.date}
            {project.role && ` · ${project.role}`}
          </p>
        </header>

        {project.images.length > 0 ? (
          <div
            className={styles.gallery}
            role="region"
            aria-label={`${project.title} images`}
            tabIndex={0}
          >
            {project.images.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={styles.galleryImage}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            image
          </div>
        )}

        <p className={styles.description}>{project.description}</p>

        <section className={styles.section} aria-labelledby="tech-heading">
          <h2 id="tech-heading" className={styles.sectionHeading}>
            tech
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
              repo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              live
            </a>
          )}
          {project.isPrivate && (
            <span className={styles.privateNote}>private repo</span>
          )}
        </div>
      </main>

      <ContactFooter />
    </div>
  )
}

export default ProjectDetailPage
