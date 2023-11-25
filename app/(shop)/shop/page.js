"use client";
import AllProduct from "@/components/AllProduct";
import { setProductByCategory } from "@/state/features/shopFeature/shopSlice";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Shop() {
  return (
    <div className=" ">
      <AllProduct />
    </div>
  );
}
