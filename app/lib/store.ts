import { create } from "zustand";
import { ActionType } from "./type";

interface Store {
  modal: { isShow: boolean; actionType: ActionType; payload?: unknown };
  showModal: (actionType: ActionType, payload?: unknown) => void;
  closeModal: () => void;
}

export const useStore = create<Store>()((set, get) => ({
  modal: { isShow: false, actionType: "create" },
  showModal: (actionType: ActionType, payload?: unknown) => {
    set(() => ({ modal: { isShow: true, actionType, payload } }));
  },
  closeModal: () => {
    set(() => ({ modal: { ...get().modal, isShow: false } }));
  },
}));
