// librarys
import { motion } from "framer-motion";
import { useState } from "react";
// import styles
import "./sidebar.scss";

// this is inner components
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transiton: {
        type: "spring",
        sttifness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transiton: {
        delay: 0.5,
        type: "spring",
        sttifness: 400,
        damping: 40,
      },
    }
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}
