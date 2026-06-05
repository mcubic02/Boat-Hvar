import { boats, quads, fishingTrips } from '../data/content'
import ToursSection from './ToursSection'
import './BoatTours.css'

function BoatTours() {
  return (
    <section className="tours">
      <ToursSection
        id="boat-tours"
        marqueeLabel="BOAT TOURS"
        items={boats}
        prevAriaLabel="Prethodni brod"
        nextAriaLabel="Sljedeći brod"
      />

      <ToursSection
        id="quad-tours"
        marqueeLabel="QUAD TOURS"
        items={quads}
        prevAriaLabel="Prethodni quad"
        nextAriaLabel="Sljedeći quad"
      />

      <ToursSection
        id="fishing-tours"
        marqueeLabel="FISHING TOURS"
        items={fishingTrips}
        prevAriaLabel="Prethodna tura"
        nextAriaLabel="Sljedeća tura"
      />
    </section>
  )
}

export default BoatTours
