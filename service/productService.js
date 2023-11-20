import { PrismaClient } from "@prisma/client";
import axios from "axios";

const url = "http://localhost:3000/api";

export const createProduct = async (data) => {
  // Make the POST request
  fetch(url + "/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Specify content type as JSON
      // Add any other headers if needed
    },
    body: JSON.stringify(data), // Convert data to JSON string
  })
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the JSON response

      return response.json();
    })
    .then((data) => {
      // Handle the data from the response
      console.log("POST request successful:", data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("There was a problem with the POST request:", error);
    });
};

// get products
export const getProduct = async (setData) => {
  // Make the POST request
  const response = await axios.get(`${url}/product`);
  // console.log(response);
  return response.data.result;
};

export const getProductByPage = async (data, setData) => {
  // Make the POST request
  fetch(`${url}/product/productByPage?page=${data.page}&size=${data.size}`, {
    cache: "no-store",
  })
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the JSON response
      // console.log(response.json());
      return response.json();
    })
    .then((data) => {
      setData({ allProduct: data.result.data, total: data.result.total });
      // Handle the data from the response
      console.log("POST request successful:", data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("There was a problem with the POST request:", error);
    });
};

export const getProductService = async (num) => {
  const prisma = new PrismaClient();

  let result = await prisma.product.findMany();
  return result;
};
