// images
import scrollImage from "../../../public/scroll.png";
import heroImage from "../../../public/hero.png";
// styles
import "./hero.scss";
// librarys
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
      repeatType: "mirror"
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          className="text-container"
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>moein parvizi</motion.h1>
          <motion.h2 variants={textVariants}>i&apos;m web developer</motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              see the latest works
            </motion.button>
            <motion.button variants={textVariants}>contact me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src={scrollImage} alt="" />
        </motion.div>
      </div>
      <motion.div className="sliding-text-container" variants={sliderVariants} initial="initial" animate="animate">
        writer content creator influencer
      </motion.div>
      <figure className="image-container">
        <img src={heroImage} alt="" />
      </figure>
    </div>
  );
};

export default Hero;
