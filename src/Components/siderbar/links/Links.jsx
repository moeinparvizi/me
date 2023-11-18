// librarys
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.01,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export default function Links() {
  const menu = ["homepage", "skills", "portfolio", "blog", "about"];

  return (
    <motion.div className="links" variants={variants}>
      {menu.map((item, i) => {
        return (
          <motion.a href={"#" + item} key={item + i} variants={itemVariants} whileHover={{scale:1.2,color:'white'}} whileTap={{scale:0.8}}>
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
