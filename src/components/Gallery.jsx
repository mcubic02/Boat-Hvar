import { useState } from 'react'
import { galleryImages } from '../data/content'
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
            Who we are, what we rent, and how easy it is to book everything over WhatsApp.
          </h2>

          <p className="gallery__text">
            Each Oasis Meu houseboat is handcrafted using premium sustainable
            materials and cutting-edge technology, offering an unmatched blend
            of comfort, style, and reliability on both water and land. With over
            7 years of experience in
          </p>

          <div className="gallery__actions">
            <Button onClick={() => openPopup(0)}>
              Gallery
            </Button>
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
