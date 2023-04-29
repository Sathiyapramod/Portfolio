import React from "react";
import { easeInOut, motion } from "framer-motion";
import "./Intro.css";

function Intro() {
  const Styling = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <div className="background-Theme">
      <motion.span
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 50, opacity: 0.5 }}
        transition={{ duration: 0.5, transition: "linear" }}
      >
        <span className="intro">Sathiyapramod</span>
      </motion.span>
    </div>
  );
}

export default Intro;
