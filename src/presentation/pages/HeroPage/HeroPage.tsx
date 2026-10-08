import { Link } from 'react-router'
import { useTypewriter } from '../../../logic/hooks/useTypewriter'
import styles from './HeroPage.module.css'

const STATUS_WORDS = ['student', 'developer', 'gamer', 'hockey enthusiast']

const GITHUB_URL = 'https://github.com/Viktorxdd'
const LINKEDIN_URL = 'https://www.linkedin.com/in/viktor-liljegren-b5801018a'
const EMAIL = 'viktor.liljegren99@gmail.com'

function HeroPage() {
  const status = useTypewriter({ words: STATUS_WORDS })

  return (
    <div className={styles.page}>
      <main className={styles.hero}>
        <p className={styles.prompt}>
          <span className={styles.accent}>guest</span>@viktor-portfolio
          <span className={styles.accent}>:~$</span> whoami
        </p>

        <pre className={styles.codeBlock}>
          <span className={styles.muted}>{'{'}</span>
          {'\n  '}
          <span className={styles.muted}>name:</span>{' '}
          <span>&quot;Viktor Liljegren&quot;</span>
          <span className={styles.muted}>,</span>
          {'\n  '}
          <span className={styles.muted}>status:</span> <span>&quot;</span>
          <span className={styles.accent}>{status}</span>
          <span className={`${styles.accent} ${styles.cursor}`}>_</span>
          <span>&quot;</span>
          <span className={styles.muted}>,</span>
          {'\n'}
          <span className={styles.muted}>{'}'}</span>
        </pre>

        <nav className={styles.nav} aria-label="Main">
          <Link to="/about">./about</Link>
          <Link to="/projects">./projects</Link>
          <Link to="/experience">./experience</Link>
          <Link to="/tech-stack">./tech-stack</Link>
          <Link to="/contact">./contact</Link>
        </nav>
      </main>

      <footer className={styles.footer}>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a href={`mailto:${EMAIL}`}>mail</a>
      </footer>
    </div>
  )
}

export default HeroPage
