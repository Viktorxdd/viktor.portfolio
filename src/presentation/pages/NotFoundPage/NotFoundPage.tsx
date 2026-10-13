import { useDocumentTitle } from '../../../logic/hooks/useDocumentTitle'
import { useTranslations } from '../../../logic/i18n/useTranslations'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  const t = useTranslations()
  useDocumentTitle('404')

  return (
    <main className={styles.page}>
      <h1>{t.notFound.title}</h1>
    </main>
  )
}

export default NotFoundPage
