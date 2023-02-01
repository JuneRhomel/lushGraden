import About from "./components/About"
import Blog from "./components/Blog"
import Email from "./components/email"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Offer from "./components/Offer"
import Service from "./components/Service"
import Testimonial from "./components/Testimonial"
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
      <Testimonial/>
      <Email/>
      <Blog/>
    </div>
  )
}

export default App
