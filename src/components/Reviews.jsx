import { reviews } from '../data/content'
import CarouselSlider from './CarouselSlider'
import ReviewCard from './ReviewCard'
import './Reviews.css'

function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="reviews__bg" aria-hidden="true" />

      <div className="reviews__panel">
        <CarouselSlider
          className="reviews__carousel"
          items={reviews}
          prevAriaLabel="Prethodna recenzija"
          nextAriaLabel="Sljedeća recenzija"
          renderSlide={(review) => (
            <ReviewCard key={review.id} review={review} />
          )}
        />
      </div>
    </section>
  )
}

export default Reviews
