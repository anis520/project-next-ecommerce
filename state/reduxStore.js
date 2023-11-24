import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/shopFeature/shopSlice";
import { getAllProduct } from "./features/shopFeature/shopApiSlice";

//create sotre
const reduxStore = configureStore({
  reducer: {
    shop: shopReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});
reduxStore.dispatch(getAllProduct());

export default reduxStore;
