import { useState } from 'react'
import { galleryImages, locationInfo } from '../data/content'
import GalleryPopup from './GalleryPopup'
import Button from './Button'

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
        <div className="gallery__inner">
          <h2 className="gallery__title">
            Authentic outdoor experiences that allow you to discover the Adriatic from a different perspective
          </h2>

          <p className="gallery__text">
            From boat rentals and fishing charters to quad and safari tours, our mission is to help guests explore the island&apos;s natural beauty, hidden locations, and unique way of life.
          </p>

          <div className="gallery__actions">
            <Button onClick={() => openPopup(0)}>
              Gallery
            </Button>
          </div>

          <div className="gallery__locations">
            {locationInfo.places.map((place) => (
              <article key={place.name} className="gallery__location">
                <h3 className="gallery__location-name">{place.name}</h3>
                <p className="gallery__location-text">{place.text}</p>
              </article>
            ))}
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
