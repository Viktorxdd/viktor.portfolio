import { useLocation } from 'react-router'
import { useTranslations } from '../../../logic/i18n/useTranslations'
import { getSlideDirection } from '../../../logic/navigation/slideDirection'
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import SlideLink from '../SlideLink/SlideLink'
import styles from './Navbar.module.css'

const SECTION_LINKS = [
  { to: '/about', key: 'about' },
  { to: '/projects', key: 'projects' },
  { to: '/experience', key: 'experience' },
  { to: '/tech-stack', key: 'techStack' },
  { to: '/contact', key: 'contact' },
] as const

function Navbar() {
  const location = useLocation()
  const t = useTranslations()

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
              {t.nav[link.key]}
            </SlideLink>
          ),
        )}
      </nav>

      <LanguageToggle />
    </header>
  )
}

export default Navbar
