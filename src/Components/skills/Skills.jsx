// import librarys
import { motion } from "framer-motion";
import { Circle } from "rc-progress";

// import styles
import "./skills.scss";
import { useEffect, useRef, useState } from "react";



export const Skills = () => {
  const menuFix = useRef()

  const [view, setView] = useState("");

  const skillsInfo = [
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "",
      name: "",
      percent: 0,
      url: "",
    },
    {
      id: "html",
      name: "html & css",
      percent: 99,
      url: "https://www.codecademy.com/catalog/language/html-css",
    },
    {
      id: "tailwind",
      name: "tailwind css",
      percent: 100,
      url: "https://tailwindcss.com/",
    },
    {
      id: "bootstrap",
      name: "bootstrap",
      percent: 90,
      url: "https://getbootstrap.com/",
    },
    {
      id: "sass",
      name: "sass",
      percent: 100,
      url: "https://sass-lang.com/",
    },
    {
      id: "animate",
      name: "animate",
      percent: 100,
      url: "https://animate.style/",
    },
    {
      id: "javascript",
      name: "javascript",
      percent: 98,
      url: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      id: "react",
      name: "react js",
      percent: 85,
      url: "https://react.dev/",
    },
    {
      id: "formik",
      name: "formik",
      percent: 80,
      url: "https://formik.org/",
    },
    {
      id: "material",
      name: "material ui",
      percent: 90,
      url: "https://mui.com/",
    },
    {
      id: "motion",
      name: "framer motion",
      percent: 90,
      url: "https://www.framer.com/motion/",
    },
    {
      id: "next",
      name: "next js",
      percent: 30,
      url: "https://nextjs.org/",
    },
    {
      id: "aos",
      name: "aos",
      percent: 100,
      url: "https://michalsnik.github.io/aos/",
    },
    {
      id: "wow",
      name: "wowjs",
      percent: 90,
      url: "https://wowjs.uk/",
    },
    {
      id: "swiper",
      name: "swiper js",
      percent: 95,
      url: "https://swiperjs.com/",
    },
    {
      id: "python",
      name: "python",
      percent: 93,
      url: "https://python.org/",
    },
    {
      id: "django",
      name: "Django",
      percent: 40,
      url: "https://www.djangoproject.com/",
    },
    {
      id: "linux",
      name: "linux",
      percent: 80,
      url: "https://www.linux.org/",
    },
  ];

  const menu = [
    "html",
    "tailwind",
    "bootstrap",
    "sass",
    "animate",
    "javascript",
    "react",
    "formik",
    "material",
    "motion",
    "next",
    "aos",
    "wow",
    "swiper",
    "python",
    "django",
    "linux",
  ];
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.5 },
    }),

    hidden: { opacity: 0, x: -100 },
  };

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 1000){
        menuFix.current.style.display = 'flex'
        menuFix.current.style.visibility = 'visible'
      } if (window.scrollY < 1000) {
        menuFix.current.style.visibility = 'hidden'
        menuFix.current.style.display = 'none'
      } if (window.scrollY > 2000) {
        menuFix.current.style.visibility = 'hidden'
        menuFix.current.style.display = 'none'
      }
    })
  })

  return (
    <div className="container">
      <motion.span variants={variants} className="skills-menu" data-status='on' ref={menuFix}>
        {menu.map((i, v) => {
          return (
            <motion.a
              variants={variants}
              custom={v}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              key={i + i + 1}
              href={"#" + i}
            >
              {i}
            </motion.a>
          );
        })}
      </motion.span>
      <div className="wrapper">
        {skillsInfo.map((item) => {
          return (
            <motion.div
              className="circles"
              key={item.name}
              whileInView={() => setView(item.percent)}
              id={item.id}
            >
              <Circle
                percent={view}
                strokeWidth={4}
                strokeColor={{
                  "0%": "#000",
                  "100%": "#fff",
                }}
                strokeLinecap="round"
                className="circle"
              />
              <a href={item.url}>
                <motion.h5
                  initial={{ opacity: 0, y: -200 }}
                  whileInView={{ opacity: 1, y: "-50%", x: "-50%" }}
                >
                  {item.name}
                </motion.h5>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
