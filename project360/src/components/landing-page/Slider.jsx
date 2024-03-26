import { motion } from "framer-motion";
import { cameraLens } from "../../assets";
import { cameraLensVariant, sliderVariant } from "../../motion/landing-page";
import "./Hero.css";

const Slider = () => {
  return (
    <motion.div
      variants={cameraLensVariant}
      initial="initial"
      animate="animate"
      className="slider-container"
    >
    <a href="/#what-is" alt="scroll-down" className="scroll-down">
      <motion.div
        variants={cameraLensVariant}
        className="camera-lens-container"
      >
        <motion.div variants={sliderVariant}>
          <img
            src={cameraLens}
            alt="sliding-camera-lens"
            className="camera-lens"
          />
        </motion.div>
      </motion.div>
      </a>
    </motion.div>
  );
};

export default Slider;
