import { Link, useLocation } from 'react-router'
import styles from './Navbar.module.css'

const SECTION_LINKS = [
  { to: '/about', label: 'about' },
  { to: '/projects', label: 'projects' },
  { to: '/experience', label: 'experience' },
  { to: '/tech-stack', label: 'tech-stack' },
  { to: '/contact', label: 'contact' },
]

function Navbar() {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.home}>
        viktor@portfolio
      </Link>

      <nav className={styles.nav} aria-label="Main">
        {SECTION_LINKS.filter((link) => link.to !== location.pathname).map(
          (link) => (
            <Link key={link.to} to={link.to} className={styles.navLink}>
              <span className={styles.arrow} aria-hidden="true">
                -&gt;
              </span>
              <span className={styles.slash} aria-hidden="true">
                /
              </span>
              {link.label}
            </Link>
          ),
        )}
      </nav>
    </header>
  )
}

export default Navbar
