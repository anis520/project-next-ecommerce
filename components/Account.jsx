"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { FiPackage } from "react-icons/fi";
import { MdDeliveryDining, MdRecommend } from "react-icons/md";
import orderphoto from "@/public/download.png";
import { useDispatch, useSelector } from "react-redux";
import { getShopState } from "@/state/features/shopFeature/shopSlice";
import { logout, orderGet } from "@/state/features/shopFeature/shopApiSlice";
import { useRouter } from "next/navigation";

const Account = ({ email }) => {
  const { orders } = useSelector(getShopState);
  const router = useRouter();
  const dispatch = useDispatch();

  const reloadAndReplaceURL = () => {
    router.push("/"); // Replace the URL
    router.refresh();
  };
  const logoutHandaler = () => {
    dispatch(logout());
    reloadAndReplaceURL();
  };

  useEffect(() => {
    dispatch(orderGet());
  }, [dispatch]);

  return (
    <div className="px-5 md:px-10 mt-10">
      {/* <AdminAccess /> */}
      <button
        onClick={logoutHandaler}
        className="bg-red-400 mt-4 text-white font-semibold rounded-md mb-5 p-2"
      >
        logout
      </button>
      <p className="p-10 text-2xl font-semibold">user email : {email}</p>
      {/* order status  */}
      <div>
        <p className="font-semibold text-xl text-zinc-700">
          Your all order status
        </p>

        {/* single order div  */}

        {orders?.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-slate-200 p-4 my-5 rounded-xl space-y-3"
            >
              <p className="font-semibold">Order #id:{item.id}</p>

              <div className="flex flex-col md:flex-row">
                <Image
                  src={item.Product.photo}
                  width={440}
                  height={440}
                  alt="order"
                />
                <div className="p-5 font-semibold">
                  <p>{item.Product.name}</p>
                  <p>{item.count}ps</p>
                  <p>{item.amount}tk</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-5 md:gap-20  h-14 md:h-24  my-4 relative w-11/12 md:w-10/12">
                <div className="absolute w-full h-2 bg-blue-500 top-[45%] left-0 z-10"></div>
                <div
                  className={`     duration-300 ${
                    item.status == "placed" && "bg-green-400 text-white"
                  } cursor-pointer  rounded-3xl font-semibold flex z-20  bg-white flex-col items-center justify-center md:gap-2 `}
                >
                  <CiShoppingBasket className="md:text-4xl" />
                  <p className="text-sm md:text-lg hidden md:block">Placed</p>
                </div>
                <div
                  className={`  bg-white    duration-300 ${
                    item.status == "Packged" && "bg-green-400 text-white"
                  } cursor-pointer  rounded-3xl font-semibold flex z-20 flex-col items-center justify-center md:gap-2 `}
                >
                  {" "}
                  <FiPackage className="md:text-4xl" />
                  <p className="text-sm md:text-lg  hidden md:block">
                    Packaged
                  </p>
                </div>
                <div
                  className={`  bg-white    duration-300 ${
                    item.status == "delivery" && "bg-green-400 text-white"
                  } cursor-pointer  rounded-3xl font-semibold flex z-20 flex-col items-center justify-center md:gap-2 `}
                >
                  {" "}
                  <MdDeliveryDining className="md:text-4xl" />
                  <p className="text-sm md:text-lg  hidden md:block">
                    Delivery
                  </p>
                </div>
                <div
                  className={`  bg-white    duration-300 ${
                    item.status == "recived" && "bg-green-400 text-white"
                  } cursor-pointer  rounded-3xl font-semibold flex z-20 flex-col items-center justify-center md:gap-2 `}
                >
                  {" "}
                  <MdRecommend className="md:text-4xl" />
                  <p className="text-sm md:text-lg  hidden md:block">Recived</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* single order div  */}
      </div>
      {/* order status  */}
    </div>
  );
};

export default Account;
