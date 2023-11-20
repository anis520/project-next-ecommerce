"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import photo from "@/public/banner1.png";
import { getProduct } from "@/service/productService";
import useStore, { addCardItem } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "@/state/features/shopFeature/shopApiSlice";
import { getShopState } from "@/state/features/shopFeature/shopSlice";

const AllProduct = ({ category }) => {
  const dispatch = useDispatch();
  const { products, filteredProducts } = useSelector((state) => state.shop);
  const { card } = useStore();

  const handleCard = (data) => {
    addCardItem(data);
  };

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <div className="px-10 py-5 bg-indigo-50">
      <p className="text-xl font-semibold ">All product</p>

      {!products && (
        <div className="py-5 grid  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-7">
          <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-200 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-200 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-200 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="py-5 grid  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-7">
        {filteredProducts?.map((item) => {
          return (
            <div key={item.id} className="p-2 bg-white rounded-md shadow-md">
              <Image
                src={
                  item.photo
                    ? item.photo
                    : "data:image/png;base64,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"
                }
                alt="product"
                width={200}
                height={200}
                className=" w-full h-40 object-cover"
                placeholder="data:image/png;base64,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"
              />
              <div className="py-2 space-y-2">
                <p className="font-semibold ">{item.name}</p>
                <div className="font-semibold   ">
                  {item.price}tk{" "}
                  <span className="ms-5 bg-indigo-400 text-white rounded-md  p-1 text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2  font-semibold  ">
                {card.includes(item) ? (
                  <button>remove</button>
                ) : (
                  <button
                    onClick={() => handleCard(item)}
                    className="bg-blue-400 text-white rounded-l-md"
                  >
                    Add to card
                  </button>
                )}

                <button className="border rounded-r-md">See</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;
