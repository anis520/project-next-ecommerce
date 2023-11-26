"use client";
import useFromField from "@/hooks/useFromFiled";
import { createProduct } from "@/service/productService";
import { addProduct } from "@/state/features/shopFeature/shopApiSlice";
import axios from "axios";
import Image from "next/image";
import foodPlaceholder from "@/public/foodPlaceholder.jpg";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddProdut = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [fileview, setFileview] = useState(null);
  const { input, handleInputChange, resetForm, setinput } = useFromField({
    name: "",
    price: "",
    stock: "",
    category: "",
  });

  const handlePreview = (e) => {
    setFile(e.target.files[0]);
    setFileview(URL.createObjectURL(e.target.files[0]));
  };

  const handlesave = async () => {
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "anisahad");
    data.append("cloud_name", "dgbhheqgy");

    const send = await axios.post(
      "https://api.cloudinary.com/v1_1/dgbhheqgy/image/upload",
      data
    );

    dispatch(addProduct({ ...input, photo: send.data.secure_url }));
    resetForm();
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

      <div>
        <label htmlFor="photo">
          Photo :
          <input
            name="photo"
            onChange={handlePreview}
            type="file"
            className="hidden"
            id="photo"
          />
          <Image
            src={file ? fileview : foodPlaceholder}
            alt="photo"
            width={400}
            height={200}
            className="h-[220px] object-cover border rounded-md"
          />
        </label>
      </div>
      <p>Category :</p>
      <input
        name="category"
        value={input.category}
        onChange={handleInputChange}
        type="text"
        list="cat"
        className="w-4/12"
      />
      <datalist id="cat">
        <option value="food" />
        <option value="meats" />
        <option value="fruit" />
        <option value="breakfast" />
      </datalist>
      <button
        className="block bg-blue-500 text-white p-2 rounded-md w-4/12"
        onClick={handlesave}
      >
        save
      </button>
    </div>
  );
};

export default AddProdut;
