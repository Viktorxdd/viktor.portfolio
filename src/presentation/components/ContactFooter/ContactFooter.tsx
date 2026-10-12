import { useProfile } from '../../../logic/hooks/useProfile'
import styles from './ContactFooter.module.css'

function ContactFooter() {
  const { email, githubUrl, linkedinUrl } = useProfile()

  return (
    <footer className={styles.footer}>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        github
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        linkedin
      </a>
      <a href={`mailto:${email}`}>mail</a>
    </footer>
  )
}

export default ContactFooter
