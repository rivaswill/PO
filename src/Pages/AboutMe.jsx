import { motion } from "framer-motion";
import React from "react";
import { pageVariants } from "../variants";
import { Link } from "react-router-dom";


const AboutMe = () => {
  return (
    <motion.div
      initial={pageVariants.init}
      animate={pageVariants.in}
      exit={pageVariants.out}
    >
      <h1>About Me</h1>
      <Link to="/">click</Link>
    </motion.div>
  );
}

export default AboutMe