import './BoatCard.css'

function BoatCard({
  name,
  capacity,
  price,
  description,
  image,
  imageAlt,
  bookUrl,
  bookLabel = 'Book now',
}) {
  return (
    <article className="boat-card">
      <div className="boat-card__content">
        <div className="boat-card__info">
          <h3 className="boat-card__name">{name}</h3>
          <p className="boat-card__meta">
            {capacity} | {price}
          </p>
          <p className="boat-card__description">{description}</p>
        </div>

        <div className="boat-card__image-wrap">
          <img src={image} alt={imageAlt} className="boat-card__image" />
        </div>
      </div>

      <a
        href={bookUrl}
        className="boat-card__book"
        target="_blank"
        rel="noopener noreferrer"
      >
        {bookLabel}
      </a>
    </article>
  )
}

export default BoatCard
