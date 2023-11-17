import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialstate = {
  couter: 0,
  user: null,
};

const useStore = create(
  devtools((set) => ({
    ...initialstate,
    inCouter: () => set((state) => ({ couter: state.couter + 1 })),
    diCouter: () => set((state) => ({ couter: state.couter - 1 })),
  }))
);

export default useStore;
