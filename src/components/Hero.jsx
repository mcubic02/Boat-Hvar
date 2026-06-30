import Button from './Button'
import { locationInfo } from '../data/content'
import './Hero.css'

const heroServices = [
  { label: 'Boat Rental', href: '#boat-tours' },
  { label: 'Quad Tours', href: '#quad-tours' },
  { label: 'Safari Tours', href: '#safari-tours' },
  { label: 'Fishing Charter', href: '#fishing-tours' },
]

const heroPhotosLeft = [
  {
    src: '/images/Sunbird.webp',
    alt: 'Speed boat on turquoise sea',
    className: 'hero__photo hero__photo--tilt-left hero__photo--m1',
  },
  {
    src: '/images/Quad2.webp',
    alt: 'Quad tour on Hvar',
    className: 'hero__photo hero__photo--tilt-right hero__photo--m2',
  },
  {
    src: '/images/kayak.webp',
    alt: 'Kayak on the sea',
    className: 'hero__photo hero__photo--tilt-left hero__photo--m3',
  },
  {
    src: '/images/SafariTour.webp',
    alt: 'Quad safari tour overlooking the sea',
    className: 'hero__photo hero__photo--tilt-right hero__photo--m8',
  },
]

const heroPhotosRight = [
  {
    src: '/images/Fishing.webp',
    alt: 'Fishing trip catch',
    className: 'hero__photo hero__photo--tilt-right hero__photo--m4',
  },
  {
    src: '/images/Pasara.webp',
    alt: 'Pasara boat at sea',
    className: 'hero__photo hero__photo--tilt-left hero__photo--m5',
  },
  {
    src: '/images/JetSki.webp',
    alt: 'Jet ski',
    className: 'hero__photo hero__photo--tilt-right hero__photo--m6',
  },
  {
    src: '/images/Sunbird.webp',
    alt: 'Sunbird boat at sea',
    className: 'hero__photo hero__photo--tilt-left hero__photo--m7',
  },
]

function Hero() {
  return (
    <header id="top" className="hero">
      <a href="#top" className="hero__logo" aria-label="Ivan Dolac">
        <img src="/images/IVAN DOLAC LOGO.svg" alt="Ivan Dolac" />
      </a>

      <div className="hero__photos" aria-hidden="true">
        <div className="hero__column hero__column--left">
          {heroPhotosLeft.map((photo) => (
            <figure key={photo.src} className={photo.className}>
              <img src={photo.src} alt="" />
            </figure>
          ))}
        </div>

        <div className="hero__column hero__column--right">
          {heroPhotosRight.map((photo) => (
            <figure key={photo.src} className={photo.className}>
              <img src={photo.src} alt="" />
            </figure>
          ))}
        </div>
      </div>

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-line">EXPLORE THE</span>
          <span className="hero__title-line">CROATIAN COAST</span>
          <span className="hero__title-line">YOUR WAY</span>
        </h1>

        <p className="hero__subtitle hero__subtitle--desktop">{locationInfo.hero}</p>
        <p className="hero__subtitle hero__subtitle--mobile">
          boat rental | quad tours |<br />fishing trips | safari tour
        </p>

        <div className="hero__buttons">
          {heroServices.map((service) => (
            <Button key={service.label} href={service.href}>
              {service.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Hero
