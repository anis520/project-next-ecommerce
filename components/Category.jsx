"use client";
import React from "react";
import { FaBowlFood, FaCloudMeatball } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { GrAppsRounded } from "react-icons/gr";
import { MdFreeBreakfast } from "react-icons/md";
import LeftAnimation from "./LeftAnimationDiv";
import { useDispatch } from "react-redux";
import { setProductByCategory } from "@/state/features/shopFeature/shopSlice";

const Category = () => {
  const dispatch = useDispatch();

  const handleCategory = (data) => {
    dispatch(setProductByCategory(data));
  };

  return (
    <div className="px-10">
      <p className=" font-semibold text-xl text-center md:text-start">
        Categorys
      </p>
      <div className=" flex gap-3   py-4 flex-wrap justify-center md:justify-normal">
        <LeftAnimation delay={0.5}>
          <div
            onClick={() => handleCategory("all")}
            className=" w-32 flex flex-col  items-center justify-center gap-2 bg-white hover:bg-indigo-400 hover:text-white cursor-pointer duration-300 rounded-md shadow-md p-4"
          >
            <GrAppsRounded />
            <p className="font-semibold">All</p>
          </div>
        </LeftAnimation>{" "}
        <LeftAnimation delay={0.9}>
          <div
            onClick={() => handleCategory("food")}
            className=" w-32 flex flex-col  items-center justify-center gap-2 bg-white hover:bg-indigo-400 hover:text-white cursor-pointer duration-300 rounded-md shadow-md p-4"
          >
            <FaBowlFood />
            <p className="font-semibold">Foods</p>
          </div>
        </LeftAnimation>
        <LeftAnimation delay={1.3}>
          <div
            onClick={() => handleCategory("meats")}
            className="w-32  flex flex-col  items-center justify-center gap-2 bg-white hover:bg-indigo-400 hover:text-white cursor-pointer duration-300 rounded-md shadow-md p-4"
          >
            <FaCloudMeatball />
            <p className="font-semibold">Meats</p>
          </div>
        </LeftAnimation>
        <LeftAnimation delay={1.7}>
          <div
            onClick={() => handleCategory("fruit")}
            className="w-32  flex flex-col  items-center justify-center gap-2 bg-white hover:bg-indigo-400 hover:text-white cursor-pointer duration-300 rounded-md shadow-md p-4"
          >
            <GiFruitBowl />
            <p className="font-semibold">Fruit</p>
          </div>
        </LeftAnimation>
        <LeftAnimation delay={2.1}>
          <div
            onClick={() => handleCategory("breakfast")}
            className="w-32  flex flex-col  items-center justify-center gap-2 bg-white hover:bg-indigo-400 hover:text-white cursor-pointer duration-300 rounded-md shadow-md p-4"
          >
            <MdFreeBreakfast />
            <p className="font-semibold">Breakfast</p>
          </div>
        </LeftAnimation>
      </div>
    </div>
  );
};

export default Category;
