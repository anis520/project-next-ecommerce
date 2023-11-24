"use client";
import { searchProduct } from "@/state/features/shopFeature/shopApiSlice";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const params = useSearchParams();
  const dispatch = useDispatch();
  const { products, filteredProducts } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(searchProduct(params.get("name")));
  }, []);

  return (
    <div className="px-10 ">
      <p className="py-5 font-semibold text-xl">
        {" "}
        Search for{" "}
        <span className="py-1 px-4 ms-4 text-white rounded-md bg-indigo-300 ">
          {params.get("name")}
        </span>
      </p>
    </div>
  );
};

export default Page;
