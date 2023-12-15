import { create } from "zustand";

type Store = {
  showAddProject: boolean;
  toggleshowAddProject: (value: boolean) => void;
};

const useSharedVariablesStore = create<Store>()((set) => ({
  showAddProject: false,
  toggleshowAddProject: (value: boolean) =>
    set((state) => ({ showAddProject: value })),
}));

export default useSharedVariablesStore;
