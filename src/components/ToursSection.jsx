import { WHATSAPP_URL } from '../data/content'
import MarqueeStrip from './MarqueeStrip'
import CarouselSlider from './CarouselSlider'
import BoatCard from './BoatCard'
import './ToursSection.css'

function ToursSection({
  id,
  marqueeLabel,
  items,
  prevAriaLabel = 'Prethodni',
  nextAriaLabel = 'Sljedeći',
  showArrows,
}) {
  if (!items.length) return null

  return (
    <div id={id} className="tours-section">
      <MarqueeStrip label={marqueeLabel} className="tours-section__marquee" />

      <CarouselSlider
        items={items}
        showArrows={showArrows}
        prevAriaLabel={prevAriaLabel}
        nextAriaLabel={nextAriaLabel}
        renderSlide={(item) => (
          <BoatCard
            key={item.id}
            name={item.name}
            capacity={item.capacity}
            price={item.price}
            description={item.description}
            image={item.image}
            imageAlt={item.imageAlt}
            bookUrl={WHATSAPP_URL}
          />
        )}
      />
    </div>
  )
}

export default ToursSection
