import { create } from "zustand";
import { ActionType } from "./type";

interface Store {
  modal: { isShow: boolean; actionType: ActionType };
  showModal: (actionType: ActionType) => void;
  closeModal: () => void;
}

export const useStore = create<Store>((set, get) => ({
  modal: { isShow: false, actionType: "create" },
  showModal: (actionType: ActionType) => {
    set(() => ({ modal: { isShow: true, actionType } }));
  },
  closeModal: () => {
    const modal = { ...get().modal, isShow: false };
    set(() => ({ modal }));
  },
}));
