import { useRef, useState, type KeyboardEvent } from 'react'
import { useTranslations } from '../../../logic/i18n/useTranslations'
import styles from './ImageCarousel.module.css'

type ImageCarouselProps = {
  images: { src: string; alt: string }[]
  label: string // accessible name of the whole carousel
}

function ImageCarousel({ images, label }: ImageCarouselProps) {
  const t = useTranslations()
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const total = images.length

  // The track scrolls natively (swipe, trackpad, keyboard), so the current
  // image is read back from the scroll position.
  function handleScroll() {
    const track = trackRef.current
    if (!track) return

    let closest = 0
    let closestDistance = Infinity
    Array.from(track.children).forEach((child, i) => {
      const distance = Math.abs(
        (child as HTMLElement).offsetLeft - track.scrollLeft,
      )
      if (distance < closestDistance) {
        closest = i
        closestDistance = distance
      }
    })
    setIndex(closest)
  }

  function goTo(target: number) {
    const track = trackRef.current
    if (!track) return

    const next = Math.min(Math.max(target, 0), total - 1)
    const slide = track.children[next] as HTMLElement
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    track.scrollTo({
      left: slide.offsetLeft,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(index - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + 1)
    }
  }

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div ref={trackRef} className={styles.track} onScroll={handleScroll}>
        {images.map((image, i) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={styles.image}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {total > 1 && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.button}
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label={t.projects.previousImage}
          >
            &larr;
          </button>

          <span className={styles.counter} aria-hidden="true">
            {index + 1} / {total}
          </span>
          <span className={styles.srOnly} aria-live="polite" aria-atomic="true">
            {t.projects.imageOf(index + 1, total)}
          </span>

          <button
            type="button"
            className={styles.button}
            onClick={() => goTo(index + 1)}
            disabled={index === total - 1}
            aria-label={t.projects.nextImage}
          >
            &rarr;
          </button>
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
