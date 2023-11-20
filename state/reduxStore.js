import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/shopFeature/shopSlice";

//create sotre
const reduxStore = configureStore({
  reducer: {
    shop: shopReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

export default reduxStore;
