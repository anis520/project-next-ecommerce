"use client";

import React from "react";

import { motion, Variants } from "framer-motion";

const LeftAnimation = ({ children, delay }) => {
  const Variant1 = {
    offscreen: {
      x: "-300",

      opacity: 80,
      visibility: "hidden",
    },
    onscreen: {
      x: 0,

      opacity: 100,

      visibility: "visible",
      transition: {
        delay,
        type: "spring",
        bounce: 0.4,
        duration: 1.1,
      },
    },
  };

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={Variant1}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default LeftAnimation;
