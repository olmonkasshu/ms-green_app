import './App.css'
import Navbar from './components/Navbar'
import HeroPage from './components/Hero/HeroPage'
import ThirdPage from "./components/ThirdPage"

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      {/* <h1 className="text-3xl font-bold underline text-center">Hello React</h1> */}
      <ThirdPage />
     
    </>
  )
}

export default App
