import { useEffect, useMemo, useState } from 'react'
import { useDocumentTitle } from '../../../logic/hooks/useDocumentTitle'
import { useRevealCount } from '../../../logic/hooks/useRevealCount'
import { useTypewriter } from '../../../logic/hooks/useTypewriter'
import { useTranslations } from '../../../logic/i18n/useTranslations'
import { getSlideDirection } from '../../../logic/navigation/slideDirection'
import ContactFooter from '../../components/ContactFooter/ContactFooter'
import LanguageToggle from '../../components/LanguageToggle/LanguageToggle'
import SlideLink from '../../components/SlideLink/SlideLink'
import styles from './HeroPage.module.css'

// How long the fully-typed intro (cursor still blinking after /contact)
// sits still before switching to the live view — avoids the cursor
// snapping straight from there to the empty status quotes.
const REVEAL_HOLD_MS = 600

// Pause after switching to the live view before the status word starts its
// typing cycle, left empty in the meantime.
const LIVE_STATUS_DELAY_MS = 2000

const SECTION_LINKS = [
  { to: '/about', key: 'about' },
  { to: '/projects', key: 'projects' },
  { to: '/experience', key: 'experience' },
  { to: '/tech-stack', key: 'techStack' },
  { to: '/contact', key: 'contact' },
] as const

type Segment = { text: string; tone?: 'muted' | 'accent' }

// The code block (status left empty — it starts its live cycle after a
// pause, once everything here has finished typing), as colored segments —
// so the reveal below can type it out character by character while already
// showing its final colors, instead of typing plain text and only coloring
// it once done.
const CODE_SEGMENTS: Segment[] = [
  { text: '{', tone: 'muted' },
  { text: '\n  ' },
  { text: 'name:', tone: 'muted' },
  { text: ' "Viktor Liljegren"' },
  { text: ',', tone: 'muted' },
  { text: '\n  ' },
  { text: 'status:', tone: 'muted' },
  { text: ' ""' },
  { text: ',', tone: 'muted' },
  { text: '\n' },
  { text: '}', tone: 'muted' },
]

const CODE_TOTAL_LENGTH = CODE_SEGMENTS.reduce(
  (sum, segment) => sum + segment.text.length,
  0,
)

// Matches .navSlashTone's margin-right in HeroPage.module.css (the same gap
// .navLink .slash uses in the final nav) — included in each link's reserved
// width below, since that margin is part of its real rendered width too.
const NAV_SLASH_MARGIN_CH = 0.6

// Reveal-tick pause inserted before each word after the first. The gap
// between nav items is a flex `gap` (pure layout, zero typed characters), so
// without this the next "/" jumps straight across it the instant the
// previous word finishes — this turns that jump into a deliberate pause.
const NAV_WORD_PAUSE_TICKS = 4

// Each nav link gets a fixed width (in ch — the font is monospace, so this
// is exact) matching its own fully-typed "/" + label from the very first
// render. That reserves its final size and position in the same .nav row
// the final version uses, so nothing resizes or re-centers as the text
// fills in, and there's no jump when the live view takes over.
// Built from the labels of the current language, since their lengths differ.
function buildNavLinks(
  labels: Record<(typeof SECTION_LINKS)[number]['key'], string>,
) {
  let offset = 0
  return SECTION_LINKS.map((link, index) => {
    if (index > 0) {
      offset += NAV_WORD_PAUSE_TICKS
    }
    const label = labels[link.key]
    const length = 1 + label.length
    const width = length + NAV_SLASH_MARGIN_CH
    const entry = { ...link, label, length, width, offset }
    offset += length
    return entry
  })
}

// Plain module-level flag, not React state: the module is only evaluated
// once per real page load, so this survives client-side route changes
// (About back to Hero via react-router) but resets on an actual browser
// reload — exactly the "once per visit, not once ever" behavior we want.
let hasPlayedIntro = false

function sliceSegments(segments: Segment[], revealedCount: number): Segment[] {
  const sliced: Segment[] = []
  let remaining = revealedCount

  for (const segment of segments) {
    if (remaining <= 0) {
      break
    }
    sliced.push({ ...segment, text: segment.text.slice(0, remaining) })
    remaining -= segment.text.length
  }

  return sliced
}

function toneClassName(tone: Segment['tone']) {
  if (tone === 'muted') return styles.muted
  if (tone === 'accent') return styles.accent
  return undefined
}

function HeroPage() {
  const t = useTranslations()
  useDocumentTitle()

  const navLinks = useMemo(() => buildNavLinks(t.nav), [t.nav])
  const navTotalLength =
    navLinks[navLinks.length - 1].offset + navLinks[navLinks.length - 1].length
  const introTotalLength = CODE_TOTAL_LENGTH + navTotalLength

  const [skipIntro] = useState(hasPlayedIntro)

  const { count: revealedCount, done: introDone } = useRevealCount({
    total: skipIntro ? 0 : introTotalLength,
  })
  const [showFinal, setShowFinal] = useState(skipIntro)
  const [liveStatusEnabled, setLiveStatusEnabled] = useState(skipIntro)

  useEffect(() => {
    hasPlayedIntro = true
  }, [])

  useEffect(() => {
    if (skipIntro || !introDone) {
      return
    }
    const timeout = setTimeout(() => setShowFinal(true), REVEAL_HOLD_MS)
    return () => clearTimeout(timeout)
  }, [skipIntro, introDone])

  useEffect(() => {
    if (skipIntro || !showFinal) {
      return
    }
    const timeout = setTimeout(
      () => setLiveStatusEnabled(true),
      LIVE_STATUS_DELAY_MS,
    )
    return () => clearTimeout(timeout)
  }, [skipIntro, showFinal])

  const status = useTypewriter({
    words: t.hero.statusWords,
    enabled: liveStatusEnabled,
  })

  const codeRevealed = Math.min(revealedCount, CODE_TOTAL_LENGTH)
  const codeTypingDone = revealedCount >= CODE_TOTAL_LENGTH
  const navRevealed = Math.max(0, revealedCount - CODE_TOTAL_LENGTH)
  const cursor = <span className={`${styles.accent} ${styles.cursor}`}>_</span>

  return (
    <div className={styles.page}>
      <p className={styles.prompt}>
        <span className={styles.accent}>guest</span>@viktor-portfolio
        <span className={styles.accent}>:~$</span> whoami
      </p>

      <div className={styles.languageToggle}>
        <LanguageToggle />
      </div>

      <main className={styles.hero}>
        {showFinal ? (
          <>
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
                <SlideLink
                  key={link.to}
                  to={link.to}
                  direction={getSlideDirection('/', link.to)}
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
              ))}
            </nav>
          </>
        ) : (
          <>
            <pre className={styles.codeBlock}>
              {sliceSegments(CODE_SEGMENTS, codeRevealed).map(
                (segment, index) => (
                  <span key={index} className={toneClassName(segment.tone)}>
                    {segment.text}
                  </span>
                ),
              )}
              {!codeTypingDone && cursor}
            </pre>

            {codeTypingDone && (
              <nav className={styles.nav} aria-label="Main">
                {navLinks.map((link) => {
                  const linkRevealed = Math.max(
                    0,
                    Math.min(navRevealed - link.offset, link.length),
                  )
                  const slashRevealed = Math.min(linkRevealed, 1)
                  const labelRevealed = Math.max(0, linkRevealed - 1)
                  const isCurrent =
                    linkRevealed > 0 && linkRevealed < link.length

                  return (
                    <span
                      key={link.to}
                      className={styles.navLink}
                      style={{ width: `${link.width}ch` }}
                    >
                      <span className={styles.navSlashTone}>
                        {'/'.slice(0, slashRevealed)}
                      </span>
                      <span className={styles.muted}>
                        {link.label.slice(0, labelRevealed)}
                      </span>
                      {isCurrent && cursor}
                    </span>
                  )
                })}
              </nav>
            )}
          </>
        )}
      </main>

      <ContactFooter />
    </div>
  )
}

export default HeroPage
