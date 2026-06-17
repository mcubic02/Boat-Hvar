import { useEffect } from 'react'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import BoatTours from './components/BoatTours'
import Destinations from './components/Destinations'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return

      const id = link.getAttribute('href').slice(1)
      if (!id) return

      const target = document.getElementById(id)
      if (!target) return

      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'center' })

      window.history.replaceState(null, '', `#${id}`)
      window.dispatchEvent(new Event('hashchange'))
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      <Hero />
      <Gallery />
      <BoatTours />
      <Destinations />
      <main>
        <Reviews />
      </main>
      <Footer />
    </>
  )
}

export default App
