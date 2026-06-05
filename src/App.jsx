import Hero from './components/Hero'
import QuickInfo from './components/QuickInfo'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import BoatTours from './components/BoatTours'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Hero />
      <Gallery />
      <BoatTours />
      <main>
        <QuickInfo />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}

export default App
