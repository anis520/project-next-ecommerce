"use client";

import React from "react";
import banner from "@/public/banner2.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const HeroDiv = () => {
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
        delay: 0.2,
        type: "spring",
        bounce: 0.4,
        duration: 1.1,
      },
    },
  };

  return (
    <div className="relative  py-10">
      <Image
        src={banner}
        className="w-full  blur-sm  h-[500px] xl:h-auto object-cover"
        alt="banner"
        width={600}
        height={500}
      />
      <div className="absolute top-0 left-0 w-full h-full  px-5 md:px-10 py-10 md:py-14 space-y-5   textPri">
        <p className="font-bold text-4xl   md:text-6xl lg:text-8xl text-zinc-500">
          Welcome to this site
        </p>
        <p className="font-semibold text-lg md:w-8/12 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          ipsa assumenda aliquam? Veniam repudiandae, suscipit ullam odio
          dolorem recusandae iusto officia vel sint rem autem, exercitationem
          dolores qui corporis ipsa sed voluptas nihil placeat porro nobis harum
          eius praesentium nulla.
        </p>

        <div className="flex gap-4">
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div className="card" variants={Variant1}>
              <div className="bg-white p-5 rounded-2xl border font-semibold space-y-2 text-center">
                <p>Use copon</p>
                <p className="bg-indigo-400 text-white rounded-md  py-1">
                  sd4s
                </p>
                <p>Get 10% discounts</p>
              </div>
            </motion.div>
          </motion.div>{" "}
        </div>
      </div>
    </div>
  );
};

export default HeroDiv;
