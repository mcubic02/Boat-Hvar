import { useState } from 'react'
import { boats, WHATSAPP_URL } from '../data/content'
import './BoatTours.css'

const MARQUEE_ITEM = '// BOAT TOURS //'
const MARQUEE_COUNT = 10

function ArrowIcon({ direction }) {
  const isLeft = direction === 'left'

  return (
    <svg
      className="boat-tours__arrow-svg"
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      aria-hidden="true"
    >
      {isLeft ? (
        <>
          <path d="M17 6H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 6L9 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 6L9 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <path d="M1 6H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 6L9 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 6L9 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  )
}

function MarqueeGroup() {
  return (
    <div className="boat-tours__marquee-group">
      {Array.from({ length: MARQUEE_COUNT }, (_, index) => (
        <span key={index} className="boat-tours__marquee-item">
          {MARQUEE_ITEM}
        </span>
      ))}
    </div>
  )
}

function BoatTours() {
  const [activeIndex, setActiveIndex] = useState(0)
  const boat = boats[activeIndex]

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + boats.length) % boats.length)
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % boats.length)
  }

  return (
    <section id="boat-tours" className="boat-tours">
      <div className="boat-tours__marquee" aria-hidden="true">
        <div className="boat-tours__marquee-track">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>

      <div className="boat-tours__slider">
        <button
          type="button"
          className="boat-tours__arrow boat-tours__arrow--prev"
          onClick={goPrev}
          aria-label="Prethodni brod"
        >
          <ArrowIcon direction="left" />
        </button>

        <article className="boat-tours__card">
          <div className="boat-tours__card-content">
            <div className="boat-tours__info">
              <h3 className="boat-tours__name">{boat.name}</h3>
              <p className="boat-tours__meta">
                {boat.capacity} | {boat.price}
              </p>
              <p className="boat-tours__description">{boat.description}</p>
            </div>

            <div className="boat-tours__image-wrap">
              <img
                src={boat.image}
                alt={boat.imageAlt}
                className="boat-tours__image"
              />
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            className="boat-tours__book"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book now
          </a>
        </article>

        <button
          type="button"
          className="boat-tours__arrow boat-tours__arrow--next"
          onClick={goNext}
          aria-label="Sljedeći brod"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </section>
  )
}

export default BoatTours
