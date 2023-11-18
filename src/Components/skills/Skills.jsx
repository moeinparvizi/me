// import librarys
import { motion } from "framer-motion"
import { Circle } from "rc-progress";

// import styles
import "./skills.scss";

export const Skills = () => {
  return(
    <motion.div whileInView={{border:"1px solid red",transition:{delay:2}}} className="skills">
      <Circle percent={90} strokeWidth={4} strokeColor="#D3D3D3" className="circle" />
      <Circle percent={90} strokeWidth={4} strokeColor="#D3D3D3" className="circle" />
      <Circle percent={90} strokeWidth={4} strokeColor="#D3D3D3" className="circle" />
      <Circle percent={90} strokeWidth={4} strokeColor="#D3D3D3" className="circle" />
    </motion.div>
  )
};
