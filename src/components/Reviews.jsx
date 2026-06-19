import { useState, useRef, useLayoutEffect } from 'react'
import { reviews } from '../data/content'
import CarouselSlider from './CarouselSlider'
import ReviewCard from './ReviewCard'
import './Reviews.css'

function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardMinHeight, setCardMinHeight] = useState(null)
  const measureRef = useRef(null)

  useLayoutEffect(() => {
    const measure = () => {
      const node = measureRef.current
      if (!node) return

      let tallest = 0
      for (const child of node.children) {
        tallest = Math.max(tallest, child.offsetHeight)
      }
      setCardMinHeight(tallest || null)
    }

    measure()
    window.addEventListener('resize', measure)
    if (document.fonts?.ready) {
      document.fonts.ready.then(measure)
    }
    return () => window.removeEventListener('resize', measure)
  }, [])

  const panelStyle = cardMinHeight
    ? { '--review-card-min-height': `${cardMinHeight}px` }
    : undefined

  return (
    <>
      <section id="reviews" className="reviews">
        <div className="reviews__bg" aria-hidden="true" />

        <div
          className="reviews__measure"
          aria-hidden="true"
          ref={measureRef}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="reviews__panel" style={panelStyle}>
          <CarouselSlider
            className="reviews__carousel"
            items={reviews}
            activeIndex={activeIndex}
            onIndexChange={setActiveIndex}
            prevAriaLabel="Previous review"
            nextAriaLabel="Next review"
            renderSlide={(review) => (
              <ReviewCard key={review.id} review={review} />
            )}
          />
        </div>
      </section>

      <div className="reviews__dots" role="tablist" aria-label="Reviews">
        {reviews.map((review, index) => (
          <button
            key={review.id}
            type="button"
            className={
              index === activeIndex
                ? 'reviews__dot reviews__dot--active'
                : 'reviews__dot'
            }
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to review ${index + 1}`}
            aria-selected={index === activeIndex}
          />
        ))}
      </div>
    </>
  )
}

export default Reviews
