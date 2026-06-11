import { useEffect, useMemo, useRef, useState } from 'react'
import { boats, quads, safariTours, fishingTrips } from '../data/content'
import {
  buildSearchIndex,
  filterTourItems,
  findSearchMatch,
} from '../utils/tourSearch'
import TourSearchBar from './TourSearchBar'
import ToursSection from './ToursSection'
import './BoatTours.css'

const TOUR_SECTIONS = [
  {
    id: 'boat-tours',
    marqueeLabel: 'PRIVATE BOAT EXCURSIONS',
    items: boats,
    prevAriaLabel: 'Previous boat',
    nextAriaLabel: 'Next boat',
    footnote: '*skipper available - price on demand',
  },
  {
    id: 'quad-tours',
    marqueeLabel: 'QUAD TOURS',
    items: quads,
    prevAriaLabel: 'Previous quad',
    nextAriaLabel: 'Next quad',
  },
  {
    id: 'safari-tours',
    marqueeLabel: 'SAFARI TOUR',
    items: safariTours,
    prevAriaLabel: 'Previous safari tour',
    nextAriaLabel: 'Next safari tour',
  },
  {
    id: 'fishing-tours',
    marqueeLabel: 'FISHING TOURS',
    items: fishingTrips,
    prevAriaLabel: 'Previous tour',
    nextAriaLabel: 'Next tour',
  },
]

const SECTION_IDS = TOUR_SECTIONS.map((section) => section.id)

function BoatTours() {
  const sectionRefs = useRef({})
  const visibilityRef = useRef({})
  const [activeSectionId, setActiveSectionId] = useState('boat-tours')
  const [searchQuery, setSearchQuery] = useState('')
  const [peopleFilter, setPeopleFilter] = useState(null)
  const [priceFilter, setPriceFilter] = useState(null)
  const [cardIndices, setCardIndices] = useState({})

  const filteredSections = useMemo(
    () =>
      TOUR_SECTIONS.map((section) => ({
        ...section,
        items: filterTourItems(section.items, section.id, {
          people: peopleFilter,
          priceMin: priceFilter?.min ?? null,
          priceMax: priceFilter?.max ?? null,
          query: searchQuery,
        }),
      })).filter((section) => section.items.length > 0),
    [peopleFilter, priceFilter, searchQuery]
  )

  const hasActiveFilters =
    searchQuery.trim().length > 0 ||
    peopleFilter != null ||
    (priceFilter && (priceFilter.min != null || priceFilter.max != null))

  useEffect(() => {
    const pickMostVisibleSection = () => {
      const best = Object.entries(visibilityRef.current)
        .filter(([, ratio]) => ratio > 0)
        .sort((a, b) => b[1] - a[1])[0]

      if (best) setActiveSectionId(best[0])
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityRef.current[entry.target.id] = entry.intersectionRatio
        })
        pickMostVisibleSection()
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    )

    filteredSections.forEach((section) => {
      const el = sectionRefs.current[section.id]
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [filteredSections])

  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.replace('#', '')
      if (SECTION_IDS.includes(id)) {
        setActiveSectionId(id)
      }
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  useEffect(() => {
    setCardIndices((prev) => {
      const next = { ...prev }
      let changed = false

      filteredSections.forEach((section) => {
        const current = next[section.id] ?? 0
        const maxIndex = Math.max(0, section.items.length - 1)
        const clamped = Math.min(current, maxIndex)

        if (clamped !== current) {
          next[section.id] = clamped
          changed = true
        }
      })

      return changed ? next : prev
    })
  }, [filteredSections])

  useEffect(() => {
    const query = searchQuery.trim()
    if (!query || !filteredSections.length) return

    const match = findSearchMatch(query, buildSearchIndex(filteredSections))
    if (!match) return

    setActiveSectionId(match.sectionId)
    setCardIndices((prev) => ({ ...prev, [match.sectionId]: match.itemIndex }))

    window.history.replaceState(null, '', `#${match.sectionId}`)

    requestAnimationFrame(() => {
      sectionRefs.current[match.sectionId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }, [searchQuery, filteredSections])

  return (
    <section className="tours">
      <TourSearchBar
        query={searchQuery}
        onQueryChange={setSearchQuery}
        peopleFilter={peopleFilter}
        onPeopleFilterChange={setPeopleFilter}
        priceFilter={priceFilter}
        onPriceFilterChange={setPriceFilter}
      />

      {filteredSections.length > 0 ? (
        filteredSections.map((section) => (
          <ToursSection
            key={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el
            }}
            id={section.id}
            marqueeLabel={section.marqueeLabel}
            items={section.items}
            prevAriaLabel={section.prevAriaLabel}
            nextAriaLabel={section.nextAriaLabel}
            footnote={section.footnote}
            marqueeActive={activeSectionId === section.id}
            activeCardIndex={cardIndices[section.id] ?? 0}
            onCardIndexChange={(index) =>
              setCardIndices((prev) => ({ ...prev, [section.id]: index }))
            }
          />
        ))
      ) : (
        hasActiveFilters && (
          <p className="tours__empty">No tours match your search or filters.</p>
        )
      )}
    </section>
  )
}

export default BoatTours
