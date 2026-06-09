import { forwardRef } from 'react'
import { WHATSAPP_URL } from '../data/content'
import MarqueeStrip from './MarqueeStrip'
import CarouselSlider from './CarouselSlider'
import BoatCard from './BoatCard'
import './ToursSection.css'

const ToursSection = forwardRef(function ToursSection(
  {
    id,
    marqueeLabel,
    items,
    prevAriaLabel = 'Previous',
    nextAriaLabel = 'Next',
    showArrows,
    footnote,
    marqueeActive = false,
  },
  ref
) {
  if (!items.length) return null

  return (
    <div id={id} className="tours-section" ref={ref}>
      <MarqueeStrip
        label={marqueeLabel}
        className="tours-section__marquee"
        paused={!marqueeActive}
      />

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
            note={item.note}
            image={item.image}
            imageAlt={item.imageAlt}
            bookUrl={WHATSAPP_URL}
          />
        )}
      />

      {footnote && <p className="tours-section__footnote">{footnote}</p>}
    </div>
  )
})

export default ToursSection
