import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import Summary from "../components/Summary"
import Opnion from "../components/Opnion"
import Themes from "../components/Themes"
import Conflict from "../components/Conflict"
import Vocab from "../components/Vocab"
import Location from "../components/Location"
import Footer from "../components/Footer"
import Games from "../components/Games"




export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Summary/>
      <Opnion/>
      <Cards/>
      <Themes/>
      <Conflict/>
      <Vocab/>
      <Location/>
      <Games/>
      <Footer/>
    </div>
  )
}