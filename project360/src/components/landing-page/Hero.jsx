import { exampleBanner } from "../../assets";
import Slider from "./Slider";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
    <div className="hero-container">

        <div className="hero-content">

            <h1 className="title">ATEDO 360</h1>
            <img src={exampleBanner} alt="example-banner" className="background-image" />

            <Slider />

        </div>
      
    </div>
    </section>
  )
}

export default Hero;
