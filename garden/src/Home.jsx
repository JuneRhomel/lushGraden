import About from "./components/About"
import Blog from "./components/Blog"
import Email from "./components/email"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Offer from "./components/Offer"
import Service from "./components/Service"
import Testimonial from "./components/Testimonial"
import './style/index.css'
import DataContext from "./Context/ContextData"
import PlantData from "./Context/PlantData"

function App() {

  return (
    <div className="App">
      <DataContext.Provider value={PlantData}>
      <Nav/>
      <Hero/>
      <About/>
      <Offer/>
      <Service/>
      <Gallery/>
      <Testimonial/>
      <Email/>
      <Blog/>
      <Footer/>
      </DataContext.Provider>
    </div>
  )
}

export default App
