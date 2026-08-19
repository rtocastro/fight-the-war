import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function ArchiveLightbox({
  isOpen,
  items,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  title,
  category,
}) {
  const currentItem = items[currentIndex]

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowRight') {
        onNext()
      }

      if (event.key === 'ArrowLeft') {
        onPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, onNext, onPrevious])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  if (!currentItem) {
    return null
  }

  const imageSource =
    typeof currentItem === 'string'
      ? currentItem
      : currentItem.image

  const itemTitle =
    typeof currentItem === 'string'
      ? title
      : currentItem.title

  const itemCredit =
    typeof currentItem === 'string'
      ? null
      : currentItem.credit

  const itemDate =
    typeof currentItem === 'string'
      ? null
      : currentItem.dateLabel

  const itemNote =
    typeof currentItem === 'string'
      ? null
      : currentItem.note

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="archive-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="archive-lightbox-backdrop"
            onClick={onClose}
          />

          <div className="archive-lightbox-shell">
            <div className="archive-lightbox-header">
              <div>
                <span className="archive-lightbox-label">
                  ARCHIVE
                  {category && ` // ${category.toUpperCase()}`}
                </span>

                {title && (
                  <span className="archive-lightbox-collection-title">
                    {title}
                  </span>
                )}
              </div>

              <button
                type="button"
                className="archive-lightbox-close"
                onClick={onClose}
              >
                CLOSE ×
              </button>
            </div>

            <div className="archive-lightbox-stage">
              {items.length > 1 && (
                <button
                  type="button"
                  className="archive-lightbox-arrow archive-lightbox-prev"
                  onClick={onPrevious}
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${imageSource}-${currentIndex}`}
                  className="archive-lightbox-image-wrap"
                  initial={{
                    opacity: 0,
                    filter: 'contrast(1.35) brightness(0.75)',
                  }}
                  animate={{
                    opacity: 1,
                    filter: 'contrast(1) brightness(1)',
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                >
                  <img
                    src={imageSource}
                    alt={itemTitle || 'Fight The War archive image'}
                  />
                </motion.div>
              </AnimatePresence>

              {items.length > 1 && (
                <button
                  type="button"
                  className="archive-lightbox-arrow archive-lightbox-next"
                  onClick={onNext}
                  aria-label="Next image"
                >
                  ›
                </button>
              )}
            </div>

            <div className="archive-lightbox-footer">
              <div className="archive-lightbox-details">
                {itemDate && (
                  <span className="archive-lightbox-date">
                    {itemDate}
                  </span>
                )}

                <h3>{itemTitle}</h3>

                {itemCredit && (
                  <p className="archive-lightbox-credit">
                    CREDIT // {itemCredit}
                  </p>
                )}

                {itemNote && (
                  <p className="archive-lightbox-note">
                    {itemNote}
                  </p>
                )}
              </div>

              <div className="archive-lightbox-counter">
                {String(currentIndex + 1).padStart(2, '0')}
                {' / '}
                {String(items.length).padStart(2, '0')}
              </div>
            </div>

            <div className="archive-lightbox-controls">
              <span>← PREVIOUS</span>
              <span>ESC CLOSE</span>
              <span>NEXT →</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ArchiveLightbox