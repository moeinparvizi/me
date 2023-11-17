// import librarys
import { motion } from "framer-motion";
// import styles
import "./parallax.scss";

export const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type == "services"
            ? "linear-gradient(180deg, #111132, #0c0c1c )"
            : "linear-gradient(180deg, #111132, #505064 )",
      }}
    >
      <h1 className="">
        {type == "services" ? "what we do?" : "what we did?"}
      </h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
};
