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
      </main>

      <ContactFooter />
    </div>
  )
}

export default ProjectDetailPage
