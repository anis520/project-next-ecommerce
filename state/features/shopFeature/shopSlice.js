import { createSlice } from "@reduxjs/toolkit";
import {
  delteProduct,
  getAllProduct,
  getAllUsers,
  login,
  orderGet,
  searchProduct,
  updateUser,
} from "./shopApiSlice";

//create auth slice
const shopSlice = createSlice({
  name: "shop",

  initialState: {
    user: null,
    products: null,
    filteredProducts: null,
    orders: null,
    message: null,
    error: null,
    loading: false,
    users: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.message = null), (state.error = null);
    },
    setProductByCategory: (state, action) => {
      action.payload == "all"
        ? (state.filteredProducts = state.products)
        : (state.filteredProducts = state.products.filter(
            (i) => i.category == action.payload
          ));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      (state.products = action.payload.data.result),
        (state.filteredProducts = state.products),
        (state.loading = false);
      //   (state.message = action.payload.data.message);
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });

    //delete product
    builder.addCase(delteProduct.pending, () => {});

    // search product
    builder.addCase(searchProduct.pending, (state, action) => {
      (state.filteredProducts = null), (state.loading = true);
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      (state.filteredProducts = action.payload.data.result),
        (state.loading = false);
    });
    // get orders
    builder.addCase(orderGet.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(orderGet.fulfilled, (state, action) => {
      (state.orders = action.payload.data.result), (state.loading = false);
    });
    // /    get login
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      (state.message = action.payload.data.message),
        (state.user = action.payload.data.user),
        (state.loading = false);
    });
    builder.addCase(login.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });
    // /    get getAllUsers
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      (state.message = action.payload.data.message),
        (state.users = action.payload.data.result),
        (state.loading = false);
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });
    // /    update User
    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      (state.message = action.payload.data.message),
        (state.users[
          state.users.findIndex(
            (data) => data.id == action.payload.data.result.id
          )
        ] = action.payload.data.result),
        (state.loading = false);
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      (state.error = action.error.message), (state.loading = false);
    });
  },
});

//export

// selectors
export const getShopState = (state) => state.shop;
// action
export const { setMessageEmpty, setProductByCategory } = shopSlice.actions;
// slice
export default shopSlice.reducer;
