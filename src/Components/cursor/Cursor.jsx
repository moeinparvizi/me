// librarys
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const styles = {
  border: '1px solid white',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  position: 'fixed',
  zIndex: 99999,
}

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

  return <motion.div style={styles} animate={{x:pos.x+10, y:pos.y+10}} className="cursor"></motion.div>;
};
