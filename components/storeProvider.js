"use client";
import reduxStore from "@/state/reduxStore";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StoreProvider = ({ children }) => {
  return (
    <Provider store={reduxStore}>
      <ToastContainer />

      {children}
    </Provider>
  );
};

export default StoreProvider;
