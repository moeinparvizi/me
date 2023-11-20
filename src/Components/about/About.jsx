// images
import githubImage from "../../../public/github.png";
import instagramImage from "../../../public/instagram.png";
import linkedinImage from "../../../public/linkedin.webp";
import stackoverflowImage from "../../../public/stackoverflow.png";
// library
import { motion } from "framer-motion";
// styles
import "./about.scss";

const socials = [
  {
    name: "github",
    img: githubImage,
    url: "https://github.com/moeinparvizi",
  },
  {
    name: "instagram",
    img: instagramImage,
    url: "https://instagram.com/moeinparvizi.dev",
  },
  {
    name: "linkedin",
    img: linkedinImage,
    url: "https://linkedin.com/in/moeinparvizi2002",
  },
  {
    name: "stackoverflow",
    img: stackoverflowImage,
    url: "https://linkedin.com/in/moeinparvizi2002",
  },
];

const About = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 1 },
    }),

    hidden: { opacity: 0, x: -100 },
  };
  return (
    <div className="about">
      <div className="wrapper">
        <motion.div
          className="text-container"
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h2>
            about{" "}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ transition: { delay: 4 }, x: 0, opacity: 1 }}
            >
              me
            </motion.div>
          </h2>
          <div className="contact-me">
            <div className="mail">
              <span>mail</span>
              <a href="mailto:giventulip@gmail.com">
                giventulip<span>@gmail.com</span>
              </a>
            </div>
            <div className="phone">
              <span>phone</span>
              <a href="tel:+989226756339">
                <span>+98</span>9226756339
              </a>
            </div>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="social-me"
          >
            {socials.map((item, i) => {
              return (
                <motion.a
                  key={item.name}
                  href={item.url}
                  variants={variants}
                  custom={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                >
                  <img src={item.img} alt={item.name + " " + "logo"} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
        <div className="about-me-container">
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ transition: { delay: 4 }, x: 0, opacity: 1 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            ab assumenda nulla quis facere praesentium omnis dolorem unde,
            impedit aut in accusamus natus error reprehenderit vero veritatis,
            voluptatibus blanditiis? Rem.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
