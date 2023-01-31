import About from "./components/About"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Offer from "./components/Offer"
import Service from "./components/Service"
import './style/index.css'
function App() {

  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <About/>
      <Offer/>
      <Service/>
      <Gallery/>
    </div>
  )
}

export default App
