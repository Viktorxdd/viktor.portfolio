import { Link } from 'react-router'
import { useTypewriter } from '../../../logic/hooks/useTypewriter'
import styles from './HeroPage.module.css'

const STATUS_WORDS = ['student', 'developer', 'gamer', 'hockey enthusiast']

function HeroPage() {
  const status = useTypewriter({ words: STATUS_WORDS })

  return (
    <main className={styles.page}>
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
  )
}

export default HeroPage
