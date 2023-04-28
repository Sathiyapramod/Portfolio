import React from "react";
import { motion } from "framer-motion";
import "./Intro.css";

function Intro() {
  return (
    <div className="background-Theme">
      <motion.div
        animate={{
          x: -20,
          y: 1,
          scale: 1.05,
          rotate: 0,
        }}
        initial="hidden"
      >
        <span className="intro">Sathiyapramod</span>
      </motion.div>
    </div>
  );
}

export default Intro;
