import { getProduct } from "@/service/productService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialstate = {
  couter: 0,
  user: null,
  products: null,
  card: [],
};

const useStore = create(
  devtools((set) => ({
    ...initialstate,
  }))
);

export const addCardItem = (data) => {
  useStore.setState((state) => ({
    ...state.card.push(data),
  }));
};

export const removeCardItem = (data) => {
  useStore.setState((state) => ({
    card: state.card.filter((i) => i.id !== data.id),
  }));
};

export default useStore;
