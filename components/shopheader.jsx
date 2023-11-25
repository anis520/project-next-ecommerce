"use client";
import { Agbalumo } from "next/font/google";
const agblumo = Agbalumo({ subsets: ["cyrillic-ext"], weight: ["400"] });
import { CiShop } from "react-icons/ci";
import { FaRegListAlt } from "react-icons/fa";

import React, { useEffect, useState } from "react";
import { MdAccountBox, MdClose, MdHome, MdSearch } from "react-icons/md";
import { FaCartArrowDown, FaMessage, FaRegMessage } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useStore, { removeCardItem } from "@/state/store";
import Image from "next/image";

const Shopheader = () => {
  const [cardDiv, setcardDiv] = useState(false);
  const [searchDiv, setSearchDiv] = useState(false);
  const [searchText, setSearchText] = useState("");

  const path = usePathname();
  const { card } = useStore();

  const handleCardRemove = (data) => {
    removeCardItem(data);
  };

  const handleSearch = () => {
    setSearchDiv(false);
    console.log(searchText);
    setSearchText("");
  };

  useEffect(() => {
    setSearchDiv(false);
    setcardDiv(false);
  }, [path]);

  return (
    <>
      <div className="fixed top-0 left-0 flex items-center  w-full px-5 md:px-10 py-2 md:py-4 shadow-md   bg-white  z-30">
        {/* logo  */}
        <Link href={"/"}>
          <p
            className={`font-semibold text-gray-600 text-2xl md:text-3xl   ${agblumo.className}`}
          >
            HomeItems.shop
          </p>
        </Link>
        {/* destop menu  */}
        <ul className=" hidden md:flex ms-auto  flex-wrap  font-semibold gap-4 items-center textPri ">
          <Link href={"/shop"}>
            <li
              className={`px-2 hover:bg-gray-100 duration-300 cursor-pointer rounded-md ${
                path == "/shop" &&
                "bg-indigo-400 text-white border border-indigo-400 hover:text-indigo-400"
              }`}
            >
              Shop
            </li>
          </Link>

          <li className="px-2 hover:bg-gray-100 duration-300 cursor-pointer rounded-md">
            About
          </li>
          <li className="px-2 hover:bg-gray-100 duration-300 cursor-pointer rounded-md">
            contact
          </li>

          <li
            className={`px-2 hover:bg-gray-100 duration-300 cursor-pointer rounded-md  flex items-center  gap-2 text-2xl`}
          >
            {" "}
            <Link href={"/account"}>
              <MdAccountBox />{" "}
            </Link>
            /
            <div className="relative">
              <FaCartArrowDown
                className={`duration-300 ${
                  cardDiv && "bg-indigo-400  text-white p-1"
                }  rounded-md `}
                onClick={() => setcardDiv(!cardDiv)}
              />
              <span className="absolute top-[-5px] text-xs left-5   h-5 w-5 bg-indigo-400 text-white flex items-center justify-center rounded-full">
                {card.length}
              </span>
            </div>
          </li>
        </ul>
        {/* mobile menu  */}
        <div className=" fixed flex gap-3 flex-col items-center justify-center   md:hidden top-52 right-0  p-2  bg-white  z-30 text-4xl bg-opacity-80  rounded-l-lg  border">
          <Link href={"/"}>
            <MdHome
              className={`hover:bg-indigo-400 hover:text-white hover:scale-110 duration-500 rounded-lg ${
                path == "/" && "bg-indigo-400 text-white"
              }`}
            />
          </Link>{" "}
          <Link href={"/shop"}>
            <CiShop
              className={`hover:bg-indigo-400 hover:text-white hover:scale-110 duration-500 rounded-lg ${
                path == "/shop" && "bg-indigo-400 text-white"
              }`}
            />
          </Link>
          <Link href={"/account"}>
            <MdAccountBox
              className={`hover:bg-indigo-400 hover:text-white hover:scale-110 duration-500 rounded-lg ${
                path == "/account" && "bg-indigo-400 text-white"
              }`}
            />
          </Link>
          <Link href={"/"}>
            <FaRegListAlt className="hover:bg-indigo-400 hover:text-white hover:scale-110 duration-500 rounded-lg p-1" />
          </Link>
          <Link href={"/"}>
            <FaRegMessage className="hover:bg-indigo-400 hover:text-white hover:scale-110 duration-500 rounded-lg p-1" />
          </Link>
        </div>
        {/* card  */}
        <div
          className={`fixed top-16 space-y-3  z-30  ${
            cardDiv ? " right-4 md:right-7  lg:right-10 " : " right-[-500px]"
          } w-7/12 md:w-5/12 lg:w-4/12 p-5  border shadow-lg rounded-lg bg-white duration-300`}
        >
          <p className="font-semibold ">Your card</p>
          <hr />

          {card.length < 1 && <p>no items</p>}
          <div className="divide-y-2 space-y-2">
            {card?.map((item) => {
              return (
                <div key={item.id} className="space-y-2  pt-2">
                  <div className="flex gap-2 items-center flex-wrap">
                    <span>
                      <Image
                        src={item.photo}
                        width={40}
                        height={40}
                        alt={item.name}
                      />
                    </span>
                    {item.name}
                    <span className="bg-indigo-400   px-2 rounded-md text-white">
                      {item.count}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCardRemove(item)}
                      className="border px-2"
                    >
                      Remove
                    </button>
                    <button className="border px-2">
                      <Link href={`/checkout?id=${item.id}`}>Checkout</Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => setcardDiv(false)}
            className="bg-red-500 text-white w-full rounded-md"
          >
            close
          </button>
        </div>
        {/* search div  */}{" "}
        <div
          onClick={() => setSearchDiv(!searchDiv)}
          className="duration-300 absolute top-full cursor-pointer left-0 p-1 w-8 bg-indigo-400 text-white text-2xl  z-30 "
        >
          {searchDiv ? <MdClose /> : <MdSearch />}
        </div>
        <div
          className={` duration-300  absolute  top-full      ${
            searchDiv ? "left-8" : "left-[-500px]"
          }  p-1 rounded-md   bg-slate-200  z-20 flex  gap-1  `}
        >
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="px-2"
            type="text"
          />{" "}
          <Link href={`/shop/search?name=${searchText}`}>
            <button
              onClick={handleSearch}
              className="bg-indigo-400 text-white px-1 rounded-md"
            >
              Search
            </button>
          </Link>
        </div>
      </div>{" "}
    </>
  );
};

export default Shopheader;
