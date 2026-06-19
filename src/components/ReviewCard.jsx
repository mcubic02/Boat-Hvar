import './ReviewCard.css'

function StarRating({ rating }) {
  return (
    <div className="review-card__stars" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'review-card__star review-card__star--filled' : 'review-card__star'}>
          ★
        </span>
      ))}
    </div>
  )
}

function ReviewCard({ review, title = 'What our clients think' }) {
  return (
    <article className="review-card">
      <h3 className="review-card__eyebrow">{title}</h3>

      <StarRating rating={review.rating} />

      <blockquote className="review-card__text">&ldquo;{review.text}&rdquo;</blockquote>

      <footer className="review-card__footer">
        <cite className="review-card__name">{review.name}</cite>
        <span className="review-card__meta">{review.date}</span>
      </footer>
    </article>
  )
}

export default ReviewCard
