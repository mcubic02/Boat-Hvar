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
              <a href="#top" className="footer__brand" aria-label="Oasis Meu">
                <span className="footer__brand-mark" aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.2" />
                    <path
                      d="M20 8c6.6 0 12 5.4 12 12 0 4-3.2 7.2-7.2 7.2-3.2 0-5.8-2.6-5.8-5.8 0-2.6 2.1-4.7 4.7-4.7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 14c3.3 0 6 2.7 6 6 0 1.7-1.3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="footer__brand-name">
                  O<span>asis</span> <span className="footer__brand-sub">meu</span>
                </span>
              </a>

              <div className="footer__contact">
                <span>Ivan Dolac, Zavala, Sv. Nedjelja</span>
              </div>
            </div>
          </div>

          <nav className="footer__menus" aria-label="Footer">
            <div className="footer__col">
              <h3 className="footer__col-title">IME OBJEKTA</h3>
              <ul>
                <li><a href="#boat-tours">Boat Rental</a></li>
                <li><a href="#quad-tours">Quad Tours</a></li>
                <li><a href="#safari-tours">Safari Tour</a></li>
                <li><a href="#fishing-tours">Fishing Trips</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
