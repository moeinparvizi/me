// styles
import "./portfolio.scss";
// librarys
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    id: 1,
    title: "reactj filan",
    image:
      "https://images.pexels.com/photos/19121700/pexels-photo-19121700/free-photo-of-a-man-standing-in-front-of-a-rock-formation-with-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore ratione eos in amet mollitia saepe dignissimos, possimus necessitatibus quia quis esse, ea aliquam debitis asperiores cum repellendus delectus molestiae.",
    url:''
  },
  {
    id: 2,
    title: "next filan",
    image:
      "https://images.pexels.com/photos/19121700/pexels-photo-19121700/free-photo-of-a-man-standing-in-front-of-a-rock-formation-with-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore ratione eos in amet mollitia saepe dignissimos, possimus necessitatibus quia quis esse, ea aliquam debitis asperiores cum repellendus delectus molestiae.",
    url:''
  },
  {
    id: 3,
    title: "filan",
    image:
      "https://images.pexels.com/photos/19121700/pexels-photo-19121700/free-photo-of-a-man-standing-in-front-of-a-rock-formation-with-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore ratione eos in amet mollitia saepe dignissimos, possimus necessitatibus quia quis esse, ea aliquam debitis asperiores cum repellendus delectus molestiae.",
    url:''
  },
  {
    id: 4,
    title: "moein filan",
    image:
      "https://images.pexels.com/photos/19121700/pexels-photo-19121700/free-photo-of-a-man-standing-in-front-of-a-rock-formation-with-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore ratione eos in amet mollitia saepe dignissimos, possimus necessitatibus quia quis esse, ea aliquam debitis asperiores cum repellendus delectus molestiae.",
    url:''
  },
  {
    id: 5,
    title: "parvizi",
    image:
      "https://images.pexels.com/photos/19121700/pexels-photo-19121700/free-photo-of-a-man-standing-in-front-of-a-rock-formation-with-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore ratione eos in amet mollitia saepe dignissimos, possimus necessitatibus quia quis esse, ea aliquam debitis asperiores cum repellendus delectus molestiae.",
    url:''
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
              <a href={post.url}>see demo</a>
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
