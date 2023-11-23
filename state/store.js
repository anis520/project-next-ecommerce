import { getProduct } from "@/service/productService";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const initialstate = {
  couter: 0,
  user: null,
  products: null,
  card: [],
};

const useStore = create(
  persist(
    devtools((set) => ({
      ...initialstate,
    })),
    { name: "homeshop" }
  )
);

export const addCardItem = (data) => {
  const { card } = useStore.getState();
  let isIncluded = card.some(
    (item) => JSON.stringify(item.id) === JSON.stringify(data.id)
  );

  if (isIncluded) {
    let inde = card.find((i) => i.id == data.id);
    useStore.setState((state) => ({
      ...(state.card[state.card.findIndex((item) => item.id === data.id)] = {
        ...data,
        count: inde.count + 1,
      }),
    }));
  } else {
    useStore.setState((state) => ({
      ...state.card.push({ ...data, count: 1 }),
    }));
  }
};

export const removeCardItem = (data) => {
  useStore.setState((state) => ({
    card: state.card.filter((i) => i.id !== data.id),
  }));
};

export default useStore;
