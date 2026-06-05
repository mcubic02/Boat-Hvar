function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <h2 className="footer__logo">Boat Hvar</h2>
          <p className="footer__tagline">
            Privatne brodske ture po najljepšim dijelovima Jadrana.
            Rezervirajte svoj dan na moru danas.
          </p>
        </div>

        <div className="footer__contact">
          <h3>Kontakt</h3>
          <ul>
            <li>
              <a href="tel:+385911234567">+385 91 123 4567</a>
            </li>
            <li>
              <a href="mailto:info@boathvar.hr">info@boathvar.hr</a>
            </li>
            <li>Hvar, Hrvatska</li>
          </ul>
        </div>

        <div className="footer__hours">
          <h3>Radno vrijeme</h3>
          <ul>
            <li>Pon – Ned: 08:00 – 20:00</li>
            <li>Sezona: travanj – listopad</li>
          </ul>
        </div>

        <div className="footer__social">
          <h3>Pratite nas</h3>
          <div className="footer__social-links">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="WhatsApp">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {year} Boat Hvar. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
