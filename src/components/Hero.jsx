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
    src: '/images/SpeedBoat.png',
    alt: 'Speed boat on turquoise sea',
    className: 'hero__photo hero__photo--tilt-left',
  },
  {
    src: '/images/Quad.png',
    alt: 'Quad tour on Hvar',
    className: 'hero__photo hero__photo--tilt-right',
  },
  {
    src: '/images/Kayak.avif',
    alt: 'Kayak on the sea',
    className: 'hero__photo hero__photo--tilt-left',
  },
]

const heroPhotosRight = [
  {
    src: '/images/Fishing.png',
    alt: 'Fishing trip catch',
    className: 'hero__photo hero__photo--tilt-right',
  },
  {
    src: '/images/Pasara.png',
    alt: 'Pasara boat at sea',
    className: 'hero__photo hero__photo--tilt-left',
  },
  {
    src: '/images/SafariTour.png',
    alt: 'Quad safari tour overlooking the sea',
    className: 'hero__photo hero__photo--tilt-right',
  },
]

function Hero() {
  return (
    <header className="hero">
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
        <h1 className="hero__title">EXPLORE THE CROATIAN COAST YOUR WAY</h1>

        <p className="hero__subtitle">{locationInfo.hero}</p>

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
