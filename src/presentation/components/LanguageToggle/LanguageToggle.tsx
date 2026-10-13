import { useLanguage } from '../../../logic/i18n/useLanguage'
import styles from './LanguageToggle.module.css'

function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={styles.toggle}
      role="group"
      aria-label={lang === 'sv' ? 'Språk' : 'Language'}
    >
      <span className={styles.prefix} aria-hidden="true">
        lang:
      </span>
      <button
        type="button"
        className={styles.button}
        aria-pressed={lang === 'sv'}
        aria-label={lang === 'sv' ? 'Svenska' : 'Switch to Swedish'}
        onClick={() => setLang('sv')}
      >
        SE
      </button>
      <button
        type="button"
        className={styles.button}
        aria-pressed={lang === 'en'}
        aria-label={lang === 'en' ? 'English' : 'Byt till engelska'}
        onClick={() => setLang('en')}
      >
        GB
      </button>
    </div>
  )
}

export default LanguageToggle
