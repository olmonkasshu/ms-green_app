import './App.css'
import Navbar from './components/Navbar'
import HeroPage from './components/Hero/HeroPage'
import SecondPage from './components/Hero_2/SecondPage'
import Footer from './components/Footer/Footer'
import FourthPage from './components/Hero_4/FourthPage'

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <SecondPage/>
      <FourthPage />
      <Footer />
      {/* <h1 className="text-3xl font-bold underline text-center">Hello React</h1> */}
        
    </>
  )
}

export default App
