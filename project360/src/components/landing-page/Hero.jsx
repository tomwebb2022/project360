import { bannerVideo } from "../../assets";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { titleVariant } from "../../motion/landing-page";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.h1
            variants={titleVariant}
            initial="initial"
            animate="animate"
            className="title"
          >
            Projct360
          </motion.h1>

          <video autoPlay muted loop className="background-image">
            <source src={bannerVideo} type="video/mp4" />
          </video>

          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
