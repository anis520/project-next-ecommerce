import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// add new product
export const addProduct = createAsyncThunk("shop/addProduct", async (data) => {
  console.log(data);
  try {
    const response = await axios.post(
      `http://localhost:3000/api/product`,
      data
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get all  prodcut
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
// orders get
export const orderGet = createAsyncThunk("shop/orderGet", async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/order`);

    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const orderPlace = createAsyncThunk("shop/orderPlace", async (data) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/order`, data);

    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// login
export const login = createAsyncThunk("shop/login", async (data) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/login`, data);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// log out
export const logout = createAsyncThunk("shop/logout", async (data) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/login`);
    return response;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});
// register user
export const register = createAsyncThunk("shop/register", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/register`,
      data
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
