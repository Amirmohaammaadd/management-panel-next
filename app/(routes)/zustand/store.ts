import { create } from "zustand";

// --------------- A ---------------

type ZustandCounter = {
  count: number;
  inc: () => void;
  decs: () => void;
};

export const useCounterStore = create<ZustandCounter>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  decs: () => set((state) => ({ count: state.count - 1 })),
}));

// --------------- B ---------------

type ZustandInnput = {
  value: string;
  setValue: (str: string) => void;
};

export const useInputStore = create<ZustandInnput>((set) => ({
  value: "",
  setValue: (data) => set({ value: data }),
}));
