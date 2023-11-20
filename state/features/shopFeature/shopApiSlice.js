import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct = createAsyncThunk(
  "shop/getAllProduct",
  async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/product`);
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete products
export const delteProduct = createAsyncThunk(
  "shop/delteProduct",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/product?id=${id}`
      );

      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// search products
export const searchProduct = createAsyncThunk(
  "shop/searchProduct",
  async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/product/search?name=${name}`
      );

      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
