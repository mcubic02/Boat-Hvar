export const quickInfoItems = [
  {
    icon: '⛵',
    title: 'Capacity',
    value: 'Up to 8 guests',
    description: 'A comfortable boat for family or friends',
  },
  {
    icon: '📍',
    title: 'Departure',
    value: 'Hvar, waterfront',
    description: 'Easily accessible from the town center',
  },
  {
    icon: '⏱️',
    title: 'Duration',
    value: '4–8 hours',
    description: 'Morning and full-day tours',
  },
  {
    icon: '💶',
    title: 'Price',
    value: 'From 350 €',
    description: 'By arrangement, no hidden costs',
  },
]

export const reviews = [
  {
    id: 1,
    name: 'Ferdi',
    location: 'Zagreb',
    rating: 5,
    text: 'We rented a small boat here with a friend for a day trip (no licence needed) and it was the perfect way to explore the nearby island of Šćedro. You don’t need much experience — driving the boat is simple, and the owner gives you a quick intro that’s really all you need. Docking takes a little practice, but that’s part of the fun, and there’s some shade for the sun. The price was fair and fuel was included. With the boat you can reach beautiful bays around the island, where a couple of great restaurants serve fresh fish. An easy and fun adventure!',
    date: 'August 2025',
  },
  {
    id: 2,
    name: 'Marko & Petra',
    location: 'Split',
    rating: 5,
    text: 'A perfect day at sea. The boat is clean, modern and very comfortable. Flawless organization — booking, departure, return, all on time.',
    date: 'July 2025',
  },
  {
    id: 3,
    name: 'Thomas K.',
    location: 'Germany',
    rating: 5,
    text: 'Best boat trip on our Croatia vacation. The captain spoke excellent English and knew every hidden spot around Pakleni islands.',
    date: 'June 2025',
  },
  {
    id: 4,
    name: 'Sophie L.',
    location: 'France',
    rating: 5,
    text: 'Absolutely magical day! Crystal clear water, friendly crew and a route perfectly tailored to what we wanted. We swam at the most beautiful coves of our trip.',
    date: 'September 2025',
  },
  {
    id: 5,
    name: 'James & Emily',
    location: 'United Kingdom',
    rating: 5,
    text: 'Highly recommend! Everything was smooth from booking to drop-off. The skipper made our day relaxed and fun, and the views were unforgettable.',
    date: 'July 2025',
  },
]

export const WHATSAPP_PRIMARY_URL = 'https://wa.me/385915795737'
export const WHATSAPP_DEFAULT_URL = 'https://wa.me/385919795375'

export const boats = [
  {
    id: 0,
    name: 'Arimar Style 500',
    capacity: '5 people',
    price: '180 € / day',
    description:
      'A fast and agile speedboat ideal for exploring hidden coves and the Pakleni islands. Perfect for groups looking for a day full of adventure at sea.',
    image: '/images/SpeedBoat.png',
    imageAlt: 'Speedboat at sea',
    note: 'fuel not included',
    bookUrl: WHATSAPP_DEFAULT_URL,
  },
  {
    id: 1,
    name: 'Pasara',
    capacity: '5 people',
    price: '100 € / day',
    description:
      'A traditional Dalmatian pasara for relaxed exploring of the surrounding coves and beaches. Easy to handle and ideal for a calmer day at sea.',
    image: '/images/Pasara.png',
    imageAlt: 'Pasara boat at sea',
    note: 'fuel included',
    bookUrl: WHATSAPP_DEFAULT_URL,
  },
  {
    id: 2,
    name: 'Kayak',
    capacity: '1 or 2 persons',
    price: '15 € / hour · 40 € / day',
    description:
      'Explore the coastline at your own pace. A great way to reach nearby beaches and coves under your own power, perfect for a single paddler or a pair.',
    image: '/images/kayak.png',
    imageAlt: 'Kayak on the sea',
    bookUrl: WHATSAPP_DEFAULT_URL,
  },
  {
    id: 3,
    name: 'Sunbird 650',
    capacity: '7 people',
    price: '290 € / day',
    description:
      'A spacious and comfortable boat for larger groups. Ideal for family trips or gatherings, with plenty of space for relaxation and fun on the water.',
    image: '/images/Sunbird.png',
    imageAlt: 'Sunbird boat at sea',
    bookUrl: WHATSAPP_PRIMARY_URL,
  },
  {
    id: 4,
    name: 'Joker Coaster 650',
    capacity: '7 people',
    price: '290 € / day',
    description:
      'A fast and agile speedboat ideal for exploring hidden coves and the Pakleni islands. Perfect for groups looking for a day full of adventure at sea.',
    image: '/images/JokerCoaster.png',
    imageAlt: 'Joker Coaster speedboat at sea',
    bookUrl: WHATSAPP_PRIMARY_URL,
  },
  {
    id: 5,
    name: 'Jet ski',
    capacity: '1 person',
    price: '50 € / 15 minutes',
    description:
      'A fast and agile jet ski ideal for exploring hidden coves and the Pakleni islands. Perfect for a single person looking for a day full of adventure at sea.',
    image: '/images/JetSki.png',
    imageAlt: 'Jet ski at sea',
    bookUrl: WHATSAPP_PRIMARY_URL,
  },
]

export const quads = [
  {
    id: 1,
    name: 'Linhai Landforce 550L',
    capacity: 'up to 2 persons per quad',
    price: '110 € / day',
    description:
      'Real off-road experience — rocky terrain, sea-view trails and hidden island routes. Explore Hvar like a local with a professional guide.',
    image:
      '/images/Quad.png',
    imageAlt: 'Linhai Landforce 550L quad ATV',
    note: 'Ivan Dolac · Zavala · Sv. Nedilja',
    bookUrl: WHATSAPP_DEFAULT_URL,
  },
  {
    id: 2,
    name: 'Linhai Landforce 650L Pro',
    capacity: 'up to 2 persons per quad',
    price: '130 € / day',
    description:
      'Our top-spec quad for the most demanding off-road routes. More power for rocky terrain, sea-view trails and hidden island roads.',
    image:
      '/images/Quad2.png',
    imageAlt: 'Linhai Landforce 650L Pro quad ATV',
    note: 'Ivan Dolac · Zavala · Sv. Nedilja',
    bookUrl: WHATSAPP_DEFAULT_URL,
  },
]

export const safariTours = [
  {
    id: 1,
    name: 'Safari Tour',
    capacity: 'up to 2 persons per quad',
    price: '60 € / person',
    description:
      'Off-road adventure with amazing viewpoints, led by a professional guide. Explore Hvar like a local — rocky terrain, sea-view trails and hidden island routes. Equipment included.',
    image:
      '/images/SafariTour.png',
    imageAlt: 'Quad safari tour on Hvar',
    note: 'Duration ~2.5h',
    bookUrl: WHATSAPP_DEFAULT_URL,
  },
]

export const fishingTrips = [
  {
    id: 1,
    name: 'Fishing Charter',
    capacity: '2 persons max',
    price: 'from 100 € / person',
    description:
      'A morning or evening trip — what you catch, you take home! Target species include orada, arbun, skuša, škrpina, šampjer, zubatac, lignja, lampuga and fratar.',
    image:
      '/images/Fishing.png',
    imageAlt: 'Fishing from a boat at sea',
    note: 'Included: equipment, licence, bait & fuel · duration 2–4 h',
    bookUrl: WHATSAPP_DEFAULT_URL,
  },
]

export const locationInfo = {
  hero:
    "Boat & quad adventures from Ivan Dolac, Zavala and Sv. Nedjelja — quiet villages on Hvar's south coast.",
  places: [
    {
      name: 'Ivan Dolac',
      text: 'A peaceful fishing village on Hvar\'s south shore — crystal-clear water, quiet coves and an easy starting point for boat trips.',
    },
    {
      name: 'Zavala',
      text: 'A laid-back coastal spot surrounded by vineyards and olive groves, with wide-open views across the Adriatic.',
    },
    {
      name: 'Sv. Nedjelja',
      text: 'A hillside village above the coast, known for its wine cellars, rugged trails and some of the island\'s best viewpoints.',
    },
  ],
}

export const destinations = [
  {
    id: 'scedro',
    name: 'Šćedro',
    text: 'A small, untouched island just south of Hvar, protected as a nature park. Its sheltered bays of Mostir and Lovišće offer calm, crystal-clear water, pine-shaded anchorages and a couple of family-run konobas — the perfect quiet escape away from the crowds.',
  },
  {
    id: 'vis',
    name: 'Otok Vis',
    text: 'The farthest inhabited island from the mainland, with a wild, authentic charm all its own. Famous for the Blue Cave on nearby Biševo, the dramatic Stiniva cove and the charming towns of Vis and Komiža, it rewards anyone willing to go that little bit further.',
  },
  {
    id: 'pakleni',
    name: 'Pakleni Otoci',
    text: 'A string of low, green islets right across from Hvar town, ringed by some of the clearest water in the Adriatic. Hidden coves, lively beach bars and the palm gardens of Palmižana make them the most popular day-trip destination in the area.',
  },
]

export const galleryImages = Array.from({ length: 16 }, (_, index) => {
  const number = index + 1
  return {
    id: number,
    src: `/images/gallery${number}.png`,
    alt: `Hvar adventures — gallery photo ${number}`,
    caption: '',
  }
})
