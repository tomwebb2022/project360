import  NasaImage  from "../api/nasa";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { titleVariant } from "../../motion/landing-page";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2> Projct 360</h2>
          <NasaImage />
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Hero;

