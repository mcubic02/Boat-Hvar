import {
  PEOPLE_FILTER_OPTIONS,
  PRICE_FILTER_OPTIONS,
  priceFiltersEqual,
} from '../utils/tourSearch'
import './TourSearchBar.css'

function TourSearchBar({
  query,
  onQueryChange,
  peopleFilter,
  onPeopleFilterChange,
  priceFilter,
  onPriceFilterChange,
}) {
  const priceFilterIndex = PRICE_FILTER_OPTIONS.findIndex((option) =>
    priceFiltersEqual(priceFilter, option.value)
  )

  return (
    <div className="tour-search">
      <div className="tour-search__bar">
        <div className="tour-search__filters">
          <label className="tour-search__field">
            <span className="tour-search__label">Number of people:</span>
            <select
              className="tour-search__select"
              value={peopleFilter ?? ''}
              onChange={(event) => {
                const value = event.target.value
                onPeopleFilterChange(value === '' ? null : Number(value))
              }}
            >
              {PEOPLE_FILTER_OPTIONS.map((option) => (
                <option key={option.label} value={option.value ?? ''}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="tour-search__field">
            <span className="tour-search__label">Price:</span>
            <select
              className="tour-search__select"
              value={priceFilterIndex >= 0 ? priceFilterIndex : 0}
              onChange={(event) => {
                const option = PRICE_FILTER_OPTIONS[Number(event.target.value)]
                onPriceFilterChange(option.value)
              }}
            >
              {PRICE_FILTER_OPTIONS.map((option, index) => (
                <option key={option.label} value={index}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="tour-search__input-wrap">
          <span className="sr-only">Find a tour</span>
          <input
            type="search"
            className="tour-search__input"
            placeholder="Find"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
          <span className="tour-search__icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="4.75" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M10.5 10.5L14 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </label>
      </div>
    </div>
  )
}

export default TourSearchBar
