"use client";
import { orderPlace } from "@/state/features/shopFeature/shopApiSlice";
import useStore from "@/state/store";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const { card } = useStore();
  const item = card.find((i) => i.id == id);

  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    dispatch(
      orderPlace({
        userId: 1,
        productid: item.id,
        amount: item.price * item.count,
        count: item.count,
        status: "delivery",
        type: "cash",
      })
    );
  };

  return (
    <div>
      <p className="text-indigo-400 font-semibold text-2xl text-center py-4">
        Chekout page
      </p>

      <div className="space-y-3 pb-5 mx-auto w-5/12 ">
        <Image
          src={item?.photo}
          width={500}
          height={100}
          className=" object-cover rounded-lg"
          alt={item?.name}
        />
        <p className="   font-semibold text-lg ">{item?.name}</p>
        <p className="  font-semibold text-lg ">
          {item?.count}ps({item?.price}-tk)
        </p>
        <p className="  font-semibold text-lg ">
          {item?.price * item?.count}tk
        </p>
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-400 text-white px-2 rounded-md py-1 font-semibold"
        >
          Place order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
