import { motion } from "framer-motion";
import React from "react";
import { pageVariants } from "../variants";
import { Link } from "react-router-dom";

pageVariants;

const Home = () => {
  return (
    <motion.div
      initial={pageVariants.init}
      animate={pageVariants.in}
      exit={pageVariants.out}
    >
      <h1>Home</h1>
      <Link to="/aboutme">click</Link>
    </motion.div>
  );
};

export default Home;
