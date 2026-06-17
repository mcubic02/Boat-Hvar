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
      </div>
    </section>
  )
}

export default Destinations
