// librarys
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// import styles
import './cursor.scss'


export const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(()=>{
    const mouseMove = (e) => {
      setPos({x: e.clientX, y: e.clientY})
    }

    window.addEventListener('mousemove',mouseMove)

    return () => {
      window.removeEventListener('mousemove',mouseMove)
    }
  },[])

  return <motion.div animate={{x:pos.x+10, y:pos.y+10}} className="cursor"></motion.div>;
};
