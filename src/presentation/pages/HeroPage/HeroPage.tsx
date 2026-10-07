import { Link } from 'react-router'
import { useTypewriter } from '../../../logic/hooks/useTypewriter'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import styles from './HeroPage.module.css'

const STATUS_WORDS = ['student', 'developer', 'gamer', 'hockey enthusiast']

const SECTION_LINKS = [
  { to: '/about', label: 'about' },
  { to: '/projects', label: 'projects' },
  { to: '/experience', label: 'experience' },
  { to: '/tech-stack', label: 'tech-stack' },
  { to: '/contact', label: 'contact' },
]

function HeroPage() {
  const status = useTypewriter({ words: STATUS_WORDS })

  return (
    <div className={styles.page}>
      <p className={styles.prompt}>
        <span className={styles.accent}>guest</span>@viktor-portfolio
        <span className={styles.accent}>:~$</span> whoami
      </p>

      <main className={styles.hero}>
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
          {SECTION_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className={styles.navLink}>
              <span className={styles.arrow} aria-hidden="true">
                -&gt;
              </span>
              <span className={styles.slash} aria-hidden="true">
                /
              </span>
              {link.label}
            </Link>
          ))}
        </nav>
      </main>

      <ContactFooter />
    </div>
  )
}

export default HeroPage
