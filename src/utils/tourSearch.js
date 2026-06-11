export function parseCapacity(capacity = '') {
  const numbers = capacity.match(/\d+/g)?.map(Number) ?? []
  if (!numbers.length) return 0
  return Math.max(...numbers)
}

export function parsePriceRange(price = '') {
  const numbers = price.match(/\d+/g)?.map(Number) ?? []
  if (!numbers.length) return { min: 0, max: Infinity }
  return { min: Math.min(...numbers), max: Math.max(...numbers) }
}

const SECTION_KEYWORDS = {
  'boat-tours': ['boat', 'boats', 'rental', 'rent', 'excursion', 'excursions'],
  'quad-tours': ['quad', 'quads', 'atv'],
  'safari-tours': ['safari'],
  'fishing-tours': ['fishing', 'fish'],
}

export function buildSearchIndex(sections) {
  return sections.flatMap((section) =>
    section.items.map((item, itemIndex) => {
      const nameTerms = item.name.toLowerCase().split(/\s+/).filter(Boolean)
      const sectionTerms = SECTION_KEYWORDS[section.id] ?? []

      return {
        sectionId: section.id,
        itemIndex,
        item,
        terms: [...new Set([...nameTerms, ...sectionTerms])],
      }
    })
  )
}

export function findSearchMatch(query, searchIndex) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return null

  const tokens = normalized.split(/\s+/).filter(Boolean)

  let best = null
  let bestScore = 0

  searchIndex.forEach((entry) => {
    const name = entry.item.name.toLowerCase()
    let score = 0

    if (name.includes(normalized)) score += 100
    if (tokens.some((token) => name.includes(token))) score += 60

    entry.terms.forEach((term) => {
      if (term === normalized) score += 80
      if (term.includes(normalized) || normalized.includes(term)) score += 40
      if (tokens.some((token) => term.includes(token) || token.includes(term))) score += 25
    })

    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  })

  return bestScore > 0 ? best : null
}

function getItemSearchTerms(item, sectionId) {
  const nameTerms = item.name.toLowerCase().split(/\s+/).filter(Boolean)
  const sectionTerms = SECTION_KEYWORDS[sectionId] ?? []
  return [...new Set([...nameTerms, ...sectionTerms, item.name.toLowerCase()])]
}

export function itemMatchesSearch(item, sectionId, query) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return true

  const name = item.name.toLowerCase()
  const terms = getItemSearchTerms(item, sectionId)
  const tokens = normalized.split(/\s+/).filter(Boolean)

  if (name.includes(normalized)) return true
  if (tokens.some((token) => name.includes(token))) return true
  if (
    terms.some(
      (term) =>
        term === normalized ||
        term.includes(normalized) ||
        normalized.includes(term)
    )
  ) {
    return true
  }
  if (
    tokens.some((token) =>
      terms.some((term) => term.includes(token) || token.includes(term))
    )
  ) {
    return true
  }

  return false
}

export function filterTourItems(
  items,
  sectionId,
  { people, priceMin, priceMax, query }
) {
  return items.filter((item) => {
    const capacity = parseCapacity(item.capacity)
    const { min, max } = parsePriceRange(item.price)

    if (people != null && capacity < people) return false
    if (priceMin != null && max < priceMin) return false
    if (priceMax != null && min > priceMax) return false
    if (!itemMatchesSearch(item, sectionId, query ?? '')) return false

    return true
  })
}

const MAX_PEOPLE = 12

export const PEOPLE_FILTER_OPTIONS = [
  { label: 'Any', value: null },
  ...Array.from({ length: MAX_PEOPLE }, (_, index) => {
    const count = index + 1
    return {
      label: count === 1 ? '1 person' : `${count} people`,
      value: count,
    }
  }),
]

export const PRICE_FILTER_OPTIONS = [
  { label: 'Any price', value: null },
  { label: 'Up to €50', value: { min: null, max: 50 } },
  { label: '€50 – €100', value: { min: 50, max: 100 } },
  { label: '€100 – €200', value: { min: 100, max: 200 } },
  { label: '€200+', value: { min: 200, max: null } },
]

export function priceFiltersEqual(a, b) {
  if (!a && !b) return true
  if (!a || !b) return false
  return a.min === b.min && a.max === b.max
}
