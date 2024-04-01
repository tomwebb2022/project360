import { exampleBanner } from "../../assets";
import { motion } from "framer-motion";
import { titleVariant } from "../../motion/landing-page";
import "../landing-page/Hero.css";

const HeroGallery = () => {
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
            ATEDO 360
          </motion.h1>

          <img
            src={exampleBanner}
            alt="example-banner"
            className="background-image"
          />

         
        </div>
      </div>
    </section>
  );
};

export default HeroGallery;
