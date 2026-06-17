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
    name: 'Ana M.',
    location: 'Zagreb',
    rating: 5,
    text: 'An unforgettable experience! The captain took us to hidden coves we could never have found on our own. I recommend it to anyone who wants to see the real Hvar.',
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
    name: 'Speed Boat',
    capacity: '5 people',
    price: '180 € / day',
    description:
      'A fast and agile speedboat ideal for exploring hidden coves and the Pakleni islands. Perfect for groups looking for a day full of adventure at sea.',
    image: '/images/SpeedBoat.png',
    imageAlt: 'Speedboat at sea',
    note: 'drivers licence needed · fuel not included',
    bookUrl: WHATSAPP_DEFAULT_URL,
  },
  {
    id: 1,
    name: 'Pasara',
    capacity: '5 people',
    price: '90 € / day',
    description:
      'A traditional Dalmatian pasara for relaxed exploring of the surrounding coves and beaches. Easy to handle and ideal for a calmer day at sea.',
    image: '/images/Pasara.png',
    imageAlt: 'Pasara boat at sea',
    note: 'no licence needed · fuel included',
    bookUrl: WHATSAPP_DEFAULT_URL,
  },
  {
    id: 2,
    name: 'Kayak',
    capacity: '1 or 2 persons',
    price: '15 € / hour · 40 € / day',
    description:
      'Explore the coastline at your own pace. A great way to reach nearby beaches and coves under your own power, perfect for a single paddler or a pair.',
    image: '/images/Kayak.avif',
    imageAlt: 'Kayak on the sea',
    note: 'no licence needed',
    bookUrl: WHATSAPP_DEFAULT_URL,
  },
  {
    id: 3,
    name: 'Sunbird',
    capacity: '7 people',
    price: '290 € / day',
    description:
      'A spacious and comfortable boat for larger groups. Ideal for family trips or gatherings, with plenty of space for relaxation and fun on the water.',
    image: '/images/Sunbird.jpeg',
    imageAlt: 'Sunbird boat at sea',
    note: 'licence needed',
    bookUrl: WHATSAPP_PRIMARY_URL,
  },
  {
    id: 4,
    name: 'Joker Coaster ',
    capacity: '7 people',
    price: '290 € / day',
    description:
      'A fast and agile speedboat ideal for exploring hidden coves and the Pakleni islands. Perfect for groups looking for a day full of adventure at sea.',
    image: '/images/JokerCoaster.jpg',
    imageAlt: 'Joker Coaster speedboat at sea',
    note: 'licence needed',
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
    note: 'no licence needed',
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

export const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1567899378494-47b05033f870?w=1200&q=80',
    alt: 'Boat on the turquoise sea near Hvar',
    caption: 'Morning tour along the Hvar coast',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
    alt: 'View of the Pakleni islands',
    caption: 'Pakleni islands — crystal clear sea',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80',
    alt: 'Yacht in a bay',
    caption: 'A private cove for swimming and relaxing',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    alt: 'Sunset from a boat',
    caption: 'Sunset from the deck',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1605281317010-76c7bdecaa2a?w=1200&q=80',
    alt: 'Boat on the open sea',
    caption: 'Open sea and freedom',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80',
    alt: 'Dalmatian coast',
    caption: 'The Dalmatian coast from a bird\'s-eye view',
  },
]
