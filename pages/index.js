import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import Summary from "../components/Summary"
import Opnion from "../components/Opnion"



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Summary/>
      <Opnion/>
      <Cards/>
    </div>
  )
}