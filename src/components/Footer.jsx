import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__card">
        <div className="footer__main">
          <div className="footer__left">
            <p className="footer__tagline">
              Private tours. Authentic experiences. Unforgettable memories.
            </p>

            <div className="footer__brand-row">
              <a href="#top" className="footer__brand" aria-label="Ivan Dolac">
                <span className="footer__brand-logo" aria-hidden="true" />
              </a>

              <div className="footer__contact">
                <span>Ivan Dolac, Zavala, Sv. Nedjelja</span>
                <a href="tel:+38598860853">+385 98 860 853</a>
              </div>
            </div>
          </div>

          <nav className="footer__menus" aria-label="Footer">
            <div className="footer__col">
              <h3 className="footer__col-title">SAIL AWAY</h3>
              <ul>
                <li><a href="#boat-tours">Private Boat Excursions</a></li>
                <li><a href="#quad-tours">Quad Tours</a></li>
                <li><a href="#safari-tours">Safari Tour</a></li>
                <li><a href="#fishing-tours">Fishing Charters</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
