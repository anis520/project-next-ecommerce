"use client";
import AddProdut from "@/components/AddProdut";

import {
  delteProduct,
  getAllProduct,
} from "@/state/features/shopFeature/shopApiSlice";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { useEffect } from "react";
import { Md10K, MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { products } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const handleDelte = (id) => {
    dispatch(delteProduct(id));
  };

  return (
    <div className="">
      <h1 className="">All products</h1>
      <hr />
      <table class="table-auto w-full">
        <thead>
          <tr className="  flex   text-start py-2">
            <th className="w-5/12  text-start ">Name</th>
            <th className="w-2/12  text-start">Image</th>
            <th className="w-2/12 text-start">Stock</th>
            <th className="w-2/12 text-start">Stock</th>
            <th className="w-1/12 text-start">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => {
            return (
              <tr key={item.id} className="  flex  mb-2  items-center">
                <td className="w-5/12   ">{item.name}</td>
                <td className="w-2/12">
                  <Image
                    width={80}
                    height={50}
                    src={item.photo}
                    alt={item.name}
                    className="object-cover"
                  />
                </td>
                <td className="w-2/12">{item.price}</td>
                <td className="w-2/12">{item.stock}</td>
                <td className="w-1/12 flex gap-2">
                  <MdEdit className="bg-indigo-400 text-white text-3xl p-1 rounded-full hover:scale-110 duration-300 cursor-pointer " />
                  <MdDelete
                    onClick={() => handleDelte(item.id)}
                    className="bg-red-400 text-white text-3xl p-1 rounded-full hover:scale-110 duration-300 cursor-pointer "
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
