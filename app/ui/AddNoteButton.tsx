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
      className="bg-[#42A5F5] rounded-full px-5 py-3 flex items-center text-white gap-2 hover:bg-[#2196F3]"
    >
      <PlusIcon />
      <p>Add</p>
    </button>
  );
};

export default AddNoteButton;
