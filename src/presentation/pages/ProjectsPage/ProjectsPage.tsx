import { useProjects } from '../../../logic/hooks/useProjects'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import Navbar from '../../components/Navbar/Navbar'
import styles from './ProjectsPage.module.css'

function ProjectsPage() {
  const projects = useProjects()

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.content}>
        <p className={styles.prompt}>
          <span className={styles.accent}>guest</span>@viktor-portfolio
          <span className={styles.accent}>:~/projects$</span> ls
        </p>

        <h1 className={styles.heading}>projects</h1>

        {projects.map((project) => (
          <section key={project.slug} className={styles.projectSection}>
            <div className={styles.imagePlaceholder} aria-hidden="true">
              image
            </div>

            <div className={styles.projectText}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectSummary}>{project.summary}</p>

              <ul className={styles.techList}>
                {project.tech.map((tech) => (
                  <li key={tech} className={styles.techItem}>
                    {tech}
                  </li>
                ))}
              </ul>

              {project.isPrivate ? (
                <span className={styles.privateNote}>private repo</span>
              ) : (
                project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    repo
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
