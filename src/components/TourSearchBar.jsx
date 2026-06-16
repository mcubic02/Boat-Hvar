import { useEffect, useRef, useState } from 'react'
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
  const [isOpen, setIsOpen] = useState(false)
  const filterRef = useRef(null)

  const priceFilterIndex = PRICE_FILTER_OPTIONS.findIndex((option) =>
    priceFiltersEqual(priceFilter, option.value)
  )

  const hasActiveFilters =
    peopleFilter != null ||
    (priceFilter && (priceFilter.min != null || priceFilter.max != null))

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handlePeopleChange = (event) => {
    const value = event.target.value
    onPeopleFilterChange(value === '' ? null : Number(value))
  }

  const handlePriceChange = (event) => {
    const option = PRICE_FILTER_OPTIONS[Number(event.target.value)]
    onPriceFilterChange(option.value)
  }

  return (
    <div className="tour-search">
      <div className="tour-search__bar">
        <div className="tour-search__filters">
          <label className="tour-search__field">
            <span className="tour-search__label">Number of people:</span>
            <select
              className="tour-search__select"
              value={peopleFilter ?? ''}
              onChange={handlePeopleChange}
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
              onChange={handlePriceChange}
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M13.5 13.5L18 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </label>

        <div className="tour-search__filter" ref={filterRef}>
          <button
            type="button"
            className={
              hasActiveFilters
                ? 'tour-search__filter-toggle tour-search__filter-toggle--active'
                : 'tour-search__filter-toggle'
            }
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-haspopup="true"
            aria-label="Filters"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M3 4.5h14l-5.5 6.5v4.2l-3 1.8v-6L3 4.5z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            {hasActiveFilters && <span className="tour-search__filter-dot" />}
          </button>

          {isOpen && (
            <div className="tour-search__panel">
              <label className="tour-search__field">
                <span className="tour-search__label">Number of people</span>
                <select
                  className="tour-search__select"
                  value={peopleFilter ?? ''}
                  onChange={handlePeopleChange}
                >
                  {PEOPLE_FILTER_OPTIONS.map((option) => (
                    <option key={option.label} value={option.value ?? ''}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="tour-search__field">
                <span className="tour-search__label">Price</span>
                <select
                  className="tour-search__select"
                  value={priceFilterIndex >= 0 ? priceFilterIndex : 0}
                  onChange={handlePriceChange}
                >
                  {PRICE_FILTER_OPTIONS.map((option, index) => (
                    <option key={option.label} value={index}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TourSearchBar
