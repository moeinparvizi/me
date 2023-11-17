// import librarys
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import styles
import "./parallax.scss";


// const plan = {
//   initial: {
//     y: 0,
//   },
//   animate: {
//     y: 10,
//     transition: {
//       repeat: Infinity,
//       duration: 20,
//       repeatType: "mirror",
//       stiffness: 220,
//       damping: 300,
//       type: "spring"
//     },
//   },
// };

export const Parallax = ({ type }) => { const parallax = useRef();

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
          type == "services"
            ? "linear-gradient(180deg, #111132, #0c0c1c )"
            : "linear-gradient(180deg, #111132, #505064 )",
      }}
    >
      <motion.h1 style={{ y: text }}>
        {type == "services" ? "what we do?" : "what we did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        // variants={plan}
        // initial="initial"
        // animate="animate"
        style={{
          y: planets,
          backgroundImage: `url(${type == "services" ? "/public/planets.png" : "/public/sun.png"})`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ y: stars }} className="stars"></motion.div>
    </div>
  );
};
