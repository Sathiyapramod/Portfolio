import React from "react";
import { easeInOut, motion } from "framer-motion";
import "./Intro.css";

function Intro() {
  return (
    <div className="background-Theme">
      <motion.span
        initial={{ x: 0, opacity: 0.3, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", easeInOut }}
      >
        <span className="intro">Sathiyapramod</span>
      </motion.span>
    </div>
  );
}

export default Intro;
