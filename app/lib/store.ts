import { create } from "zustand";
import { ActionType, Note } from "./type";

interface Store {
  notes: Note[];
  completedNotes: Note[];
  addNote: (note: Note) => void;
  editNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  toggleCompleted: (id: string) => void;
  modal: { isShow: boolean; actionType: ActionType; payload?: unknown };
  showModal: (actionType: ActionType, payload?: unknown) => void;
  closeModal: () => void;
}

export const useStore = create<Store>((set, get) => ({
  notes: [],
  completedNotes: [],
  addNote: (note: Note) => {
    set({ notes: [...get().notes, note] });
  },
  editNote: (note: Note) => {
    const updatedNotes = get().notes.map((item) =>
      item.id === note.id ? note : item
    );
    set({ notes: updatedNotes });
  },
  deleteNote: (id: string) => {
    set({ notes: get().notes.filter((item) => item.id !== id) });
  },
  toggleCompleted: (id: string) => {
    const note =
      get().notes.filter((item) => item.id === id)?.[0] ??
      get().completedNotes.filter((item) => item.id == id)[0];
    const updatedNote = { ...note, isCompleted: !note.isCompleted };
    if (note.isCompleted) {
      set({
        completedNotes: get().completedNotes.filter((item) => item.id !== id),
        notes: [...get().notes, updatedNote],
      });
    } else {
      set({
        completedNotes: [...get().completedNotes, updatedNote],
        notes: get().notes.filter((item) => item.id !== id),
      });
    }
  },
  modal: { isShow: false, actionType: "create" },
  showModal: (actionType: ActionType, payload?: unknown) => {
    set(() => ({ modal: { isShow: true, actionType, payload } }));
  },
  closeModal: () => {
    set(() => ({ modal: { ...get().modal, isShow: false } }));
  },
}));
