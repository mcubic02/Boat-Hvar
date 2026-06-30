import './BoatCard.css'

function BoatCard({
  name,
  capacity,
  price,
  description,
  note,
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
          <p className="boat-card__meta">{capacity}</p>
          <p className="boat-card__price">{price}</p>
          <div className="boat-card__text-block">
            <p className="boat-card__description">{description}</p>
            {note && <p className="boat-card__note">{note}</p>}
          </div>
        </div>
      </div>

      <div className="boat-card__image-wrap">
        <img
          src={image}
          alt={imageAlt}
          className="boat-card__image"
          loading="lazy"
          decoding="async"
        />
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
