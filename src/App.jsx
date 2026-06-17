import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import BoatTours from './components/BoatTours'
import Destinations from './components/Destinations'
import Footer from './components/Footer'

function App() {
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
