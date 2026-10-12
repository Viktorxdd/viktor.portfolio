import { useEffect, useState } from 'react'
import styles from './CopyButton.module.css'

type CopyButtonProps = {
  text: string
  label: string // what is being copied, for the accessible name
}

const RESET_AFTER_MS = 2000

function CopyButton({ text, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), RESET_AFTER_MS)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch {
      // Clipboard blocked (e.g. insecure context): the text is still on the page.
    }
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      aria-label={`Copy ${label}`}
    >
      <span aria-live="polite">{copied ? 'copied' : 'copy'}</span>
    </button>
  )
}

export default CopyButton
