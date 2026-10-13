import styles from './RichText.module.css'

// Turns "[text](https://…)" in a string into links, everything else stays
// plain text. Only https links are accepted, so content can never inject
// other kinds of URLs (javascript:, data: ...).
const LINK_PATTERN = /\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g

type RichTextProps = {
  text: string
}

function RichText({ text }: RichTextProps) {
  const parts: React.ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [fullMatch, label, href] = match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <a
        key={match.index}
        href={href}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>,
    )
    lastIndex = match.index + fullMatch.length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}

export default RichText
