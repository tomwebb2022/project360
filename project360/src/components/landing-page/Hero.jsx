import { headerVideo } from "../../assets/index";
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

          <video
            src={headerVideo}
            autoPlay
            loop
            muted
            className="background-image"
          ></video>

          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
