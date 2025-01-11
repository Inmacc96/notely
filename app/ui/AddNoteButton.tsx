"use client";
import { useStore } from "../lib/store";
import PlusIcon from "./icons/PlusIcon";

const AddNoteButton = () => {
  const showModal = useStore((state) => state.showModal);

  return (
    <button
      onClick={() => {
        showModal("create");
      }}
      className="bg-blue-400 rounded-full px-5 py-3 flex items-center text-white gap-2 hover:bg-blue-500"
    >
      <PlusIcon />
      <p className="font-medium text-base">Add</p>
    </button>
  );
};

export default AddNoteButton;
