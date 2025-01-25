import { create } from "zustand";
import { ActionType, Category, Note } from "./type";
import { persist } from "zustand/middleware";

interface Store {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
  addNote: (note: Note) => void;
  editNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  toggleCompleted: (id: string) => void;
  modal: { isShow: boolean; actionType: ActionType; payload?: unknown };
  showModal: (actionType: ActionType, payload?: unknown) => void;
  closeModal: () => void;
  search: string;
  setSearch: (value: string) => void;
  filter: Category | "All";
  setFilter: (value: Category | "All") => void;
  showCompletedNotes: boolean;
  toggleShowCompletedNotes: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      notes: [],
      completedNotes: [],
      setNotes: (notes: Note[]) => {
        set({ notes });
      },
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
        set({
          notes: get().notes.map((item) =>
            item.id === id
              ? {
                  ...item,
                  completedAt: item.completedAt ? undefined : new Date(),
                }
              : item
          ),
        });
      },
      modal: { isShow: false, actionType: "create" },
      showModal: (actionType: ActionType, payload?: unknown) => {
        set(() => ({ modal: { isShow: true, actionType, payload } }));
      },
      closeModal: () => {
        set(() => ({ modal: { ...get().modal, isShow: false } }));
      },
      search: "",
      setSearch: (value: string) => {
        set({ search: value });
      },
      filter: "All",
      setFilter: (value: Category | "All") => {
        set({ filter: value });
      },
      showCompletedNotes: false,
      toggleShowCompletedNotes: () => {
        set({ showCompletedNotes: !get().showCompletedNotes });
      },
    }),
    { name: "notes", partialize: (state) => state.notes }
  )
);
