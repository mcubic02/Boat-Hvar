import { destinations } from '../data/content'
import './Destinations.css'

function Destinations() {
  return (
    <section id="destinations" className="destinations">
      <div className="destinations__inner">
        <h2 className="destinations__title">Where we take you</h2>

        <div className="destinations__grid">
          {destinations.map((place) => (
            <article key={place.id} className="destinations__card">
              <h3 className="destinations__name">{place.name}</h3>
              <p className="destinations__text">{place.text}</p>
            </article>
          ))}
        </div>

        <figure className="destinations__map">
          <img
            src="/images/mapa slika 1.png"
            alt="Map of Hvar and the surrounding islands — Šćedro, Vis and the Pakleni islands"
          />
        </figure>
      </div>
    </section>
  )
}

export default Destinations
