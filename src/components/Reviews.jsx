import { useState } from 'react'
import { reviews } from '../data/content'
import CarouselSlider from './CarouselSlider'
import ReviewCard from './ReviewCard'
import './Reviews.css'

function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <section id="reviews" className="reviews">
        <div className="reviews__bg" aria-hidden="true" />

        <div className="reviews__panel">
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
