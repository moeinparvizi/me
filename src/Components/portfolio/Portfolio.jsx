// styles
import "./portfolio.scss";
// librarys
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    id: 1,
    title: "dashboard",
    image:
      "/posts/dashboard.png",
    desc: "A simple admin panel has been implemented using next JS14, and each part of the site's UI has been divided into a component for better code readability. If you like it, please give me a star. Thankful",
    url:'https://github.com/moeinparvizi/dashboard'
  },
  {
    id: 2,
    title: "persian alibaba",
    image:
      "/posts/alibaba.ir.png",
    desc: "rebuild persion alibaba website with react js and tailwind and swiper and material ui and little formik if you like it give me star on the github page thanks for watching...",
    url:'https://github.com/moeinparvizi/alibaba.ir'
  },
  {
    id: 3,
    title: "gaming website (board)",
    image:
      "/posts/gaming-website-board.png",
    desc: "hi welcome to the my new project i hope you enjoy from my new project, this website about game and now i talk about this, build website with bootstrap and js swiperJS ransomUsers api and more, if you like it give me star in githubpage and follow in socials media.",
    url:'https://github.com/moeinparvizi/gaming-website-board'
  },
  {
    id: 4,
    title: "music player",
    image:
      "/posts/music-player.png",
    desc: "new project build with react & nextjs , have many components full Responsive & fetch data or music from api this application have animation build with framer motion. i hope you enjoy, plese give me star.",
    url:'https://github.com/moeinparvizi/music-player'
  },
  {
    id: 5,
    title: "snake game",
    image:
      "/posts/snake-game.png",
    desc: "a snake game build with javascript es6 to up , sass and more . snake movment build with grid display in css and when eating an apple it bigger than old self . when snake collition to wall or self body users game over in play board . i try to write clean code and to understand more write lot commnet in js . please give to my code star and follow my page in social media to happy me. scroll page to more information about this project.",
    url:'https://github.com/moeinparvizi/snake-game'
  },
];

const Single = ({ post }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container-post">
        <div className="wrapper">
          <figure className="image-container" ref={ref}>
            <img src={post.image} alt={post.title} />
          </figure>
          <motion.div className="text-container" style={{ y }}>
            <h4>{post.title}</h4>
            <p>{post.desc}</p>
            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
              <a href={post.url} target="_blank">more info & demo</a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h3>featured works</h3>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {posts.map((post) => {
        return <Single key={post.id} post={post} />;
      })}
    </div>
  );
};
