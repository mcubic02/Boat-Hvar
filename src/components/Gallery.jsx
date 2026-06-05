import { useState } from 'react'
import { galleryImages } from '../data/content'
import GalleryPopup from './GalleryPopup'

function Gallery() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openPopup = (index = 0) => {
    setActiveIndex(index)
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header section-header--compact">
            <p className="section-eyebrow">Galerija</p>
            <h2>Trenuci s mora</h2>
          </div>

          <div className="gallery__grid">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                className="gallery__thumb"
                onClick={() => openPopup(index)}
                aria-label={`Otvori: ${image.caption}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span className="gallery__thumb-overlay">
                  <span className="gallery__thumb-icon" aria-hidden="true">⊕</span>
                  <span className="gallery__thumb-caption">{image.caption}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="gallery__actions">
            <button
              type="button"
              className="btn btn--gallery"
              onClick={() => openPopup(0)}
            >
              Otvori cijelu galeriju
            </button>
          </div>
        </div>
      </section>

      {isPopupOpen && (
        <GalleryPopup
          images={galleryImages}
          activeIndex={activeIndex}
          onClose={closePopup}
          onChangeIndex={setActiveIndex}
        />
      )}
    </>
  )
}

export default Gallery
