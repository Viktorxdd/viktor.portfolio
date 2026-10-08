import styles from './ContactFooter.module.css'

const GITHUB_URL = 'https://github.com/Viktorxdd'
const LINKEDIN_URL = 'https://www.linkedin.com/in/viktor-liljegren-b5801018a'
const EMAIL = 'viktor.liljegren99@gmail.com'

function ContactFooter() {
  return (
    <footer className={styles.footer}>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
        github
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
        linkedin
      </a>
      <a href={`mailto:${EMAIL}`}>mail</a>
    </footer>
  )
}

export default ContactFooter
