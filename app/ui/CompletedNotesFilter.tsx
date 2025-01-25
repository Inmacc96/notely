"use client";
import { useStore } from "../lib/store";
import ChecboxIcon from "./icons/ChecboxIcon";
import CheckboxOutlineIcon from "./icons/CheckboxOutlineIcon";

const CompletedNotesFilter = () => {
  const showCompletedNotes = useStore((state) => state.showCompletedNotes);
  const toggleShowCompletedNotes = useStore(
    (state) => state.toggleShowCompletedNotes
  );
  return (
    <div className="flex gap-2 items-center">
      <button onClick={toggleShowCompletedNotes} className="text-gray-600">
        {showCompletedNotes ? <ChecboxIcon /> : <CheckboxOutlineIcon />}
      </button>
      <p className="text-gray-900-87 text-sm">Show only completed notes</p>
    </div>
  );
};

export default CompletedNotesFilter;
