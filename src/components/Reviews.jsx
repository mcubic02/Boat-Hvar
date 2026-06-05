import { reviews } from '../data/content'

function StarRating({ rating }) {
  return (
    <div className="stars" aria-label={`Ocjena: ${rating} od 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'star star--filled' : 'star'}>★</span>
      ))}
    </div>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-header section-header--light">
          <p className="section-eyebrow">Recenzije</p>
          <h2>Što kažu naši gosti</h2>
          <p className="section-desc">
            Stotine zadovoljnih putnika svake sezone. Evo nekoliko njihovih dojmova.
          </p>
        </div>

        <div className="reviews__grid">
          {reviews.map((review) => (
            <article key={review.id} className="review-card">
              <StarRating rating={review.rating} />
              <blockquote className="review-card__text">"{review.text}"</blockquote>
              <footer className="review-card__footer">
                <div>
                  <cite className="review-card__name">{review.name}</cite>
                  <p className="review-card__location">{review.location}</p>
                </div>
                <time className="review-card__date">{review.date}</time>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
