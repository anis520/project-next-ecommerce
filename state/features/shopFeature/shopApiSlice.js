import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const url = "https://project-next-ecommerce.vercel.app/api";
const url = "http://localhost:3000/api";

// add new product
export const addProduct = createAsyncThunk("shop/addProduct", async (data) => {
  console.log(data);
  try {
    const response = await axios.post(`${url}/product`, data);
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
      const response = await axios.get(`${url}/product`);
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
      const response = await axios.delete(`${url}/product?id=${id}`);

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
      const response = await axios.get(`${url}/product/search?name=${name}`);

      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// orders get
export const orderGet = createAsyncThunk("shop/orderGet", async () => {
  try {
    const response = await axios.get(`${url}/order`);

    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const orderPlace = createAsyncThunk("shop/orderPlace", async (data) => {
  try {
    const response = await axios.post(`${url}/order`, data);

    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// login
export const login = createAsyncThunk("shop/login", async (data) => {
  try {
    const response = await axios.post(`${url}/login`, data);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// log out
export const logout = createAsyncThunk("shop/logout", async (data) => {
  try {
    const response = await axios.get(`${url}/login`);
    return response;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});
// register user
export const register = createAsyncThunk("shop/register", async (data) => {
  try {
    const response = await axios.post(`${url}/register`, data);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// get all user
export const getAllUsers = createAsyncThunk("shop/getAllUsers", async () => {
  try {
    const response = await axios.get(`${url}/user`);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// update single user
export const updateUser = createAsyncThunk("shop/updateUser", async (data) => {
  try {
    const response = await axios.put(`${url}/user?id=${data.id}`, data);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
