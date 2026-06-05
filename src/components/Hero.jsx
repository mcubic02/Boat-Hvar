function Hero() {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToInfo = () => {
    document.getElementById('quick-info')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="hero">
      <div className="hero__overlay" />
      <nav className="hero__nav">
        <span className="hero__logo">Boat Hvar</span>
        <div className="hero__nav-links">
          <button type="button" onClick={scrollToInfo}>Info</button>
          <button type="button" onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}>
            Recenzije
          </button>
          <button type="button" onClick={scrollToGallery}>Galerija</button>
        </div>
      </nav>

      <div className="hero__content">
        <p className="hero__eyebrow">Privatne ture · Hvar & Pakleni otoci</p>
        <h1 className="hero__title">
          Otkrijte Jadran<br />
          <em>s našeg broda</em>
        </h1>
        <p className="hero__subtitle">
          Iznajmljivanje broda s iskusnim kapitánom. Skrivene uvale,
          kristalno more i nezaboravni zalasci sunca — samo za vas.
        </p>
        <div className="hero__actions">
          <a href="#footer" className="btn btn--primary">Rezerviraj turu</a>
          <button type="button" className="btn btn--ghost" onClick={scrollToGallery}>
            Pogledaj galeriju
          </button>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </header>
  )
}

export default Hero
