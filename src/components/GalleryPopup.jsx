import { useEffect, useCallback } from 'react'

function GalleryPopup({ images, activeIndex, onClose, onChangeIndex }) {
  const goNext = useCallback(() => {
    onChangeIndex((prev) => (prev + 1) % images.length)
  }, [images.length, onChangeIndex])

  const goPrev = useCallback(() => {
    onChangeIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length, onChangeIndex])

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, goNext, goPrev])

  const activeImage = images[activeIndex]

  return (
    <div
      className="gallery-popup"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery — enlarged view"
    >
      <button
        type="button"
        className="gallery-popup__backdrop"
        onClick={onClose}
        aria-label="Close gallery"
      />

      <div className="gallery-popup__content">
        <button
          type="button"
          className="gallery-popup__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <button
          type="button"
          className="gallery-popup__nav gallery-popup__nav--prev"
          onClick={goPrev}
          aria-label="Previous image"
        >
          ‹
        </button>

        <figure className="gallery-popup__figure">
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="gallery-popup__image"
          />
          <figcaption className="gallery-popup__caption">
            {activeImage.caption}
            <span className="gallery-popup__counter">
              {activeIndex + 1} / {images.length}
            </span>
          </figcaption>
        </figure>

        <button
          type="button"
          className="gallery-popup__nav gallery-popup__nav--next"
          onClick={goNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default GalleryPopup
