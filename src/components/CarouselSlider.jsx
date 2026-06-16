import { useRef, useState } from 'react'
import CarouselArrow from './CarouselArrow'
import './CarouselSlider.css'

const SWIPE_THRESHOLD = 45

function CarouselSlider({
  items,
  renderSlide,
  prevAriaLabel = 'Previous',
  nextAriaLabel = 'Next',
  showArrows,
  className = '',
  activeIndex: controlledIndex,
  onIndexChange,
}) {
  const [internalIndex, setInternalIndex] = useState(0)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  if (!items.length) return null

  const isControlled = controlledIndex != null
  const activeIndex = isControlled ? controlledIndex : internalIndex

  const setActiveIndex = (updater) => {
    const next =
      typeof updater === 'function' ? updater(activeIndex) : updater
    if (!isControlled) setInternalIndex(next)
    onIndexChange?.(next)
  }

  const shouldShowArrows = showArrows ?? items.length > 1

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  const handleTouchStart = (event) => {
    const touch = event.touches[0]
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current == null || items.length < 2) return

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - touchStartX.current
    const deltaY = touch.clientY - touchStartY.current
    touchStartX.current = null
    touchStartY.current = null

    if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) goNext()
      else goPrev()
    }
  }

  const rootClassName = [
    'carousel-slider',
    !shouldShowArrows && 'carousel-slider--no-arrows',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={rootClassName}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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

      {shouldShowArrows && (
        <div className="carousel-slider__controls">
          <CarouselArrow
            direction="left"
            onClick={goPrev}
            ariaLabel={prevAriaLabel}
          />
          <CarouselArrow
            direction="right"
            onClick={goNext}
            ariaLabel={nextAriaLabel}
          />
        </div>
      )}
    </div>
  )
}

export default CarouselSlider
