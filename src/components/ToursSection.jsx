import { forwardRef } from 'react'
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
    activeCardIndex = 0,
    onCardIndexChange,
  },
  ref
) {
  return (
    <div id={id} className="tours-section" ref={ref}>
      <MarqueeStrip
        label={marqueeLabel}
        className="tours-section__marquee"
        paused={!marqueeActive}
      />

      {items.length > 0 ? (
        <CarouselSlider
          items={items}
          showArrows={showArrows}
          prevAriaLabel={prevAriaLabel}
          nextAriaLabel={nextAriaLabel}
          activeIndex={activeCardIndex}
          onIndexChange={onCardIndexChange}
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
              bookUrl={item.bookUrl}
            />
          )}
        />
      ) : (
        <p className="tours-section__empty">No tours match your filters.</p>
      )}

      {footnote && items.length > 0 && (
        <p className="tours-section__footnote">{footnote}</p>
      )}
    </div>
  )
})

export default ToursSection
