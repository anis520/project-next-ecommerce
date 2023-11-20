"use client";
import reduxStore from "@/state/reduxStore";
import React from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};

export default StoreProvider;
