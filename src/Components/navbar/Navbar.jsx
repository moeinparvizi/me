// import images
import githubImage from "../../../public/github.png";
import instagramImage from "../../../public/instagram.png";
import linkedinImage from "../../../public/linkedin.webp";
import stackoverflowImage from "../../../public/stackoverflow.png";
import Sidebar from "../siderbar/Sidebar";

import "./navbar.scss";

// librarys
import { motion } from "framer-motion";

// arrays
const socials = [
  {
    name: 'github',
    img: githubImage,
    url: "https://github.com/moeinparvizi",
  },
  {
    name: 'instagram',
    img: instagramImage,
    url: "https://instagram.com/moeinparvizi.dev",
  },
  {
    name: 'linkedin',
    img: linkedinImage,
    url: "https://linkedin.com/in/moeinparvizi2002",
  },
  {
    name: 'stackoverflow',
    img: stackoverflowImage,
    url: "https://linkedin.com/in/moeinparvizi2002",
  },
];

export default function Navbar() {
  const variants = {
    visible: (i) => ({
      opacity:1,
      x:0,
      transition:{delay: i * 0.5},
    }),

    hidden: { opacity: 0, x: -100 },
  }
  return (
    <>
      <div className="navbar">
        {/* slidebar */}
        <Sidebar />

        {/* navigation bar */}
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, x: 100, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
          >
             moein parvizi
          </motion.span>
          <motion.div variants={variants} initial='hidden' animate='visible' className="social">
            {socials.map((item, i) => {
              return(
                <motion.a key={item.name} href={item.url} variants={variants} custom={i} whileHover={{scale:1.2}}>
                  <img src={item.img} alt={item.name+' '+'logo'} />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}
