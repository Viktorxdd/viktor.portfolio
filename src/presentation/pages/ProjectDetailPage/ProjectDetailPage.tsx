import { useParams } from 'react-router'
import { useProject } from '../../../logic/hooks/useProject'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import styles from './ProjectDetailPage.module.css'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = useProject(slug)

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <main className={styles.page}>
      <h1>{project.title}</h1>
    </main>
  )
}

export default ProjectDetailPage
