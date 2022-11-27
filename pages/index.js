import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cards/>
    </div>
  )
}