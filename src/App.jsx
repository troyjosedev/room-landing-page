
import Hero from "./Hero"
import Discover from "./Discover"
import About from "./About"
import '../src/index.css'

export default function App() {
  return (
    <div className="lg:grid lg:grid-cols-[30%_30%_10%_30%] grid-rows-2 auto-cols-auto content-center">
    <Hero/>
    <Discover/>
    <About/>
    </div>
  )
}