function CarouselArrow({ direction, onClick, ariaLabel }) {
  const isLeft = direction === 'left'

  return (
    <button
      type="button"
      className={`carousel-slider__arrow carousel-slider__arrow--${direction}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <svg
        className="carousel-slider__arrow-icon"
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        aria-hidden="true"
      >
        {isLeft ? (
          <>
            <path d="M17 6H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 6L9 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 6L9 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            <path d="M1 6H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 6L9 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 6L9 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    </button>
  )
}

export default CarouselArrow
