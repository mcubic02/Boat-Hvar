import Button from './Button'

const heroServices = [
  { label: 'Boat rental', href: '#boat-tours' },
  { label: 'Quad tours', href: '#quad-tours' },
  { label: 'Safari tour', href: '#safari-tours' },
  { label: 'Fishing charter', href: '#fishing-trips' },
]

function Hero() {
  return (
    <header className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1567899378494-47b05033f870?w=1920&q=80"
      >
        <source
          src="/images/Aerial-Drone-Shot-Of-Marina-Bay-In-Adriatic-Sea-C-2025-12-17-11-32-06-Utc.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          EXPLORE THE CROATIAN COAST YOUR WAY
        </h1>

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
