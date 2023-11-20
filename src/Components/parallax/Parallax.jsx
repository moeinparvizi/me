// import librarys
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import styles
import "./parallax.scss";

// images
import planets from '../../../public/planets.png'
import sun from '../../../public/sun.png'

export const Parallax = ({ type }) => {
  const parallax = useRef();

  const { scrollYProgress } = useScroll({
    target: parallax,
    offset: ["start start", "end start"],
  });

  const stars = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const text = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const planets = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <div
      className="parallax"
      ref={parallax}
      style={{
        background:
          type == "skills"
            ? "linear-gradient(180deg, #111132, #0c0c1c )"
            : "linear-gradient(180deg, #111132, #505064 )",
      }}
    >
      <motion.h1 style={{ y: text }}>
        {type == "skills" ? "see my skills!" : "see my projects!"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        // variants={plan}
        // initial="initial"
        // animate="animate"
        style={{
          y: planets,
          backgroundImage: `url(${type == "skills" ? planets : sun})`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ y: stars }} className="stars"></motion.div>
    </div>
  );
};
