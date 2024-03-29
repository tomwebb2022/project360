import { motion } from "framer-motion";
import { downArrow } from "../../assets";
import { downArrowVariant, sliderVariant } from "../../motion/landing-page";
import "./Hero.css";

const Slider = () => {
  return (
    <motion.div
      variants={downArrowVariant}
      initial="initial"
      animate="animate"
      className="slider-container"
    >
    <a href="/#what-is" alt="scroll-down" className="scroll-down">
      <motion.div
        variants={downArrowVariant}
        className="down-arrow-container"
      >
        <motion.div variants={sliderVariant}>
          <img
            src={downArrow}
            alt="down-arrow"
            className="down-arrow-shape"
          />
        </motion.div>
      </motion.div>
      </a>
    </motion.div>
  );
};

export default Slider;
