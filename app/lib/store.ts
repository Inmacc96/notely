import { create } from "zustand";
import { ActionType, Note } from "./type";

interface Store {
  notes: Note[];
  addNote: (note: Note) => void;
  modal: { isShow: boolean; actionType: ActionType };
  showModal: (actionType: ActionType) => void;
  closeModal: () => void;
}

export const useStore = create<Store>((set, get) => ({
  notes: [],
  addNote: (note: Note) => {
    set({ notes: [...get().notes, note] });
  },
  modal: { isShow: false, actionType: "create" },
  showModal: (actionType: ActionType) => {
    set(() => ({ modal: { isShow: true, actionType } }));
  },
  closeModal: () => {
    set(() => ({ modal: { ...get().modal, isShow: false } }));
  },
}));
