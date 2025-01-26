import { useState } from "react";
import { useStore } from "../lib/store";
import SelectInput from "./SelectInput";
import { Note } from "../lib/type";
import { CATEGORIES } from "../lib/constants";
import { addNote, editNote } from "../lib/actions";
import { toast } from "react-toastify";

export type NoteFormData = Omit<Note, "id" | "updatedAt" | "completedAt">;

type FormNoteProps = {
  note?: Note;
};

const FormNote: React.FC<FormNoteProps> = ({ note }) => {
  const closeModal = useStore((state) => state.closeModal);
  const [formData, setFormData] = useState<NoteFormData>({
    title: note?.title ?? "",
    category: note?.category ?? "Personal",
    description: note?.description ?? "",
  });
  const [validationError, setValidationError] = useState("");

  const handleChange = (property: keyof NoteFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [property]: value }));
  };

  const isNoteUnchanged = () =>
    note?.id &&
    note.title === formData.title &&
    note.category === formData.category &&
    note.description === formData.description;

  const saveNote = async () => {
    return note?.id
      ? await editNote(note.id, formData)
      : await addNote(formData);
  };

  const handleAction = async () => {
    if (formData.title.length === 0) {
      setValidationError("This field is required");
      return;
    }
    setValidationError("");

    if (isNoteUnchanged()) {
      closeModal();
      return;
    }
    const response = await saveNote();
    if (response?.message) {
      toast.error(response.message);
    } else {
      closeModal();
    }
  };

  return (
    <form action={handleAction} className="w-[500px] grid grid-cols-2 gap-x-6">
      <div className="relative col-span-1 space-y-2">
        <label className="text-sm font-bold text-gray-900-87" htmlFor="title">
          Title
          <span className="text-red-400 ml-0.5">*</span>
        </label>
        <input
          id="title"
          type="text"
          placeholder="Add title"
          className="block w-full text-sm text-gray-900-87 bg-gray-200 border border-black-12 focus:outline-none focus:border-blue-400 rounded-md placeholder:text-gray-900-60 font-medium p-3"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
        <p className="text-red-400 text-xs absolute">{validationError}</p>
      </div>
      <div className="col-span-1 space-y-2">
        <label className="text-sm font-bold text-gray-900-87">Category</label>
        <SelectInput
          options={CATEGORIES}
          onSelect={(option) => handleChange("category", option)}
        />
      </div>
      <div className="col-span-2 space-y-2 mt-8">
        <div className="flex justify-between">
          <label
            className="text-sm font-bold text-gray-900-87"
            htmlFor="description"
          >
            Description{" "}
            <span className="text-gray-900-60 font-normal">{`(optional)`}</span>
          </label>
          <p className="text-gray-900-60 text-sm">{`${
            formData.description?.length ?? 0
          }/200`}</p>
        </div>
        <textarea
          id="description"
          placeholder="Add description"
          className="block w-full h-36 resize-none text-sm text-gray-900-87 bg-gray-200 border border-black-12 focus:outline-none focus:border-blue-400 rounded-md placeholder:text-gray-900-60 font-medium p-3"
          maxLength={200}
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>
      <div className="col-span-2 flex justify-end items-center gap-8 mt-6">
        <button
          type="button"
          onClick={closeModal}
          className="font-medium text-base text-gray-600 hover:text-gray-900-87 tracking-widest"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="font-medium text-base tracking-widest bg-blue-400 hover:bg-blue-500 rounded-full px-4 py-2 text-white gap-2"
        >
          {note?.id ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default FormNote;
