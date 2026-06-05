import { useState } from 'react'
import CarouselArrow from './CarouselArrow'
import './CarouselSlider.css'

function CarouselSlider({
  items,
  renderSlide,
  prevAriaLabel = 'Previous',
  nextAriaLabel = 'Next',
  showArrows,
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!items.length) return null

  const shouldShowArrows = showArrows ?? items.length > 1

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  const rootClassName = [
    'carousel-slider',
    !shouldShowArrows && 'carousel-slider--no-arrows',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClassName}>
      {shouldShowArrows && (
        <CarouselArrow
          direction="left"
          onClick={goPrev}
          ariaLabel={prevAriaLabel}
        />
      )}

      {renderSlide(items[activeIndex], activeIndex)}

      {shouldShowArrows && (
        <CarouselArrow
          direction="right"
          onClick={goNext}
          ariaLabel={nextAriaLabel}
        />
      )}
    </div>
  )
}

export default CarouselSlider
