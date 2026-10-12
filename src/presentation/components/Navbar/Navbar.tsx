import { useLocation } from 'react-router'
import { getSlideDirection } from '../../../logic/navigation/slideDirection'
import SlideLink from '../SlideLink/SlideLink'
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
      <SlideLink
        to="/"
        direction={getSlideDirection(location.pathname, '/')}
        className={styles.home}
      >
        viktor@portfolio
      </SlideLink>

      <nav className={styles.nav} aria-label="Main">
        {SECTION_LINKS.filter((link) => link.to !== location.pathname).map(
          (link) => (
            <SlideLink
              key={link.to}
              to={link.to}
              direction={getSlideDirection(location.pathname, link.to)}
              className={styles.navLink}
            >
              <span className={styles.arrow} aria-hidden="true">
                -&gt;
              </span>
              <span className={styles.slash} aria-hidden="true">
                /
              </span>
              {link.label}
            </SlideLink>
          ),
        )}
      </nav>
    </header>
  )
}

export default Navbar
