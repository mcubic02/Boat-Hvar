import { quickInfoItems } from '../data/content'

function QuickInfo() {
  return (
    <section id="quick-info" className="quick-info">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Brzi pregled</p>
          <h2>Sve što trebate znati</h2>
          <p className="section-desc">
            Jednostavna rezervacija, fleksibilni termini i personalizirana ruta
            prema vašim željama.
          </p>
        </div>

        <div className="quick-info__grid">
          {quickInfoItems.map((item) => (
            <article key={item.title} className="quick-info__card">
              <span className="quick-info__icon" aria-hidden="true">{item.icon}</span>
              <p className="quick-info__label">{item.title}</p>
              <p className="quick-info__value">{item.value}</p>
              <p className="quick-info__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickInfo
