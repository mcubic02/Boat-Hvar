import { useEffect, useRef, useState } from 'react'
import { boats, quads, safariTours, fishingTrips } from '../data/content'
import ToursSection from './ToursSection'
import './BoatTours.css'

const TOUR_SECTIONS = [
  {
    id: 'boat-tours',
    marqueeLabel: 'BOAT TOURS',
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

    SECTION_IDS.forEach((id) => {
      const el = sectionRefs.current[id]
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

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

  return (
    <section className="tours">
      {TOUR_SECTIONS.map((section) => (
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
        />
      ))}
    </section>
  )
}

export default BoatTours
