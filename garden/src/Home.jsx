import About from "./components/About"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Offer from "./components/Offer"
import './style/index.css'
function App() {

  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <About/>
      <Offer/>
    </div>
  )
}

export default App
