"use client";
import useFromField from "@/hooks/useFromFiled";
import { createProduct } from "@/service/productService";
import React, { useState } from "react";

const AddProdut = () => {
  const { input, handleInputChange, resetForm, setinput } = useFromField({
    name: "",
    price: "",
    stock: "",
    photo: "",
  });

  const handlesave = () => {
    createProduct(input);
  };

  return (
    <div className="">
      <p>Add new Product</p>

      <p>Name :</p>
      <input
        name="name"
        value={input.name}
        onChange={handleInputChange}
        type="text"
        className="w-4/12"
      />

      <p>Price :</p>
      <input
        name="price"
        value={input.price}
        onChange={handleInputChange}
        type="number"
        className="w-4/12"
      />

      <p>Stock :</p>
      <input
        name="stock"
        value={input.stock}
        onChange={handleInputChange}
        type="number"
        className="w-4/12"
      />

      <p>Photo :</p>
      <input
        name="photo"
        value={input.photo}
        onChange={handleInputChange}
        type="text"
        className="w-4/12"
      />
      <button onClick={handlesave}>save</button>
    </div>
  );
};

export default AddProdut;
