import { boats, quads, safariTours, fishingTrips } from '../data/content'
import ToursSection from './ToursSection'
import './BoatTours.css'

function BoatTours() {
  return (
    <section className="tours">
      <ToursSection
        id="boat-tours"
        marqueeLabel="BOAT TOURS"
        items={boats}
        prevAriaLabel="Previous boat"
        nextAriaLabel="Next boat"
        footnote="*skipper available - price on demand"
      />

      <ToursSection
        id="quad-tours"
        marqueeLabel="QUAD TOURS"
        items={quads}
        prevAriaLabel="Previous quad"
        nextAriaLabel="Next quad"
      />

      <ToursSection
        id="safari-tours"
        marqueeLabel="SAFARI TOUR"
        items={safariTours}
        prevAriaLabel="Previous safari tour"
        nextAriaLabel="Next safari tour"
      />

      <ToursSection
        id="fishing-tours"
        marqueeLabel="FISHING TOURS"
        items={fishingTrips}
        prevAriaLabel="Previous tour"
        nextAriaLabel="Next tour"
      />
    </section>
  )
}

export default BoatTours
