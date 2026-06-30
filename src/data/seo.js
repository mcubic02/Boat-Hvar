import { boats, quads, safariTours, fishingTrips, reviews } from './content'

/** Zamijeni s pravom domenom pri deployu. */
export const SITE_URL = 'https://ivandolac.hr'

export const siteMeta = {
  name: 'Ivan Dolac Adventures',
  shortName: 'Ivan Dolac',
  title: 'Boat Rental & Quad Tours Hvar | Ivan Dolac, Zavala, Sv. Nedjelja',
  description:
    'Rent boats, jet skis and kayaks or join quad safari and fishing tours from Ivan Dolac, Zavala and Sv. Nedjelja on Hvar island. Private excursions to Pakleni islands, Šćedro and Vis.',
  keywords:
    'boat rental Hvar, quad tours Hvar, Ivan Dolac, Zavala, Sv Nedjelja, Pakleni islands, jet ski rental, fishing charter Hvar, kayak rental Croatia, private boat tour',
  locale: 'en_US',
  language: 'en',
  ogImage: '/images/gallery1.webp',
  ogImageAlt: 'Boat and quad adventures on Hvar island, Croatia',
  telephone: '+385919795375',
  email: null,
  address: {
    locality: 'Ivan Dolac',
    region: 'Split-Dalmatia',
    country: 'HR',
    countryName: 'Croatia',
  },
  geo: {
    latitude: 43.1164,
    longitude: 16.7189,
  },
  themeColor: '#0c2d48',
}

export function absoluteUrl(path) {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

function averageRating() {
  if (!reviews.length) return null
  const total = reviews.reduce((sum, review) => sum + review.rating, 0)
  return {
    '@type': 'AggregateRating',
    ratingValue: (total / reviews.length).toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  }
}

function tourOffers(items) {
  return items.map((item) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: item.name,
      description: item.description,
      image: absoluteUrl(item.image),
    },
    priceCurrency: 'EUR',
  }))
}

export function buildStructuredData() {
  const aggregateRating = averageRating()

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'TouristInformationCenter',
    '@id': `${SITE_URL}/#business`,
    name: siteMeta.name,
    alternateName: siteMeta.shortName,
    description: siteMeta.description,
    url: SITE_URL,
    image: absoluteUrl(siteMeta.ogImage),
    telephone: siteMeta.telephone,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteMeta.address.locality,
      addressRegion: siteMeta.address.region,
      addressCountry: siteMeta.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteMeta.geo.latitude,
      longitude: siteMeta.geo.longitude,
    },
    areaServed: [
      { '@type': 'Place', name: 'Hvar' },
      { '@type': 'Place', name: 'Pakleni islands' },
      { '@type': 'Place', name: 'Šćedro' },
      { '@type': 'Place', name: 'Vis' },
    ],
    ...(aggregateRating && { aggregateRating }),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tours & Rentals',
      itemListElement: [
        ...tourOffers(boats),
        ...tourOffers(quads),
        ...tourOffers(safariTours),
        ...tourOffers(fishingTrips),
      ],
    },
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteMeta.name,
    description: siteMeta.description,
    inLanguage: siteMeta.language,
    publisher: { '@id': `${SITE_URL}/#business` },
  }

  const reviewSchemas = reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': `${SITE_URL}/#business` },
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.text,
    datePublished: review.date,
  }))

  return [localBusiness, webSite, ...reviewSchemas]
}
