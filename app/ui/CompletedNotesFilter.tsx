"use client";
import { useRouter, useSearchParams } from "next/navigation";
import ChecboxIcon from "./icons/ChecboxIcon";
import CheckboxOutlineIcon from "./icons/CheckboxOutlineIcon";

const CompletedNotesFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const showCompletedNotes = !!searchParams.get("showCompletedNotes");

  const toggleShowCompletedNotes = () => {
    const params = new URLSearchParams(searchParams);
    if (params.get("showCompletedNotes")) {
      params.delete("showCompletedNotes");
    } else {
      params.set("showCompletedNotes", "true");
    }
    router.replace(`?${params.toString()}`);
  };

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
