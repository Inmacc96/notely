import { useState } from "react";
import { useStore } from "../lib/store";
import SelectInput from "./SelectInput";
import { Note } from "../lib/type";
import { CATEGORIES } from "../lib/constants";

type formData = Omit<Note, "id" | "createdAt">;

const FormNote: React.FC = () => {
  const closeModal = useStore((state) => state.closeModal);
  const addNote = useStore((state) => state.addNote);
  const [formData, setFormData] = useState<formData>({
    title: "",
    category: "Personal",
    description: "",
  });
  const [validationError, setValidationError] = useState("");

  const handleChange = (property: keyof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [property]: value }));
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (formData.title.length === 0) {
      setValidationError("This field is required");
      return;
    }
    setValidationError("");
    addNote({ ...formData, id: crypto.randomUUID(), createdAt: new Date() });
    closeModal();
  };

  return (
    <form className="grid grid-cols-2 gap-x-6">
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
          onClick={closeModal}
          className="font-medium text-base text-gray-600 hover:text-gray-900-87 tracking-widest"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleClick}
          className="bg-blue-400 hover:bg-blue-500 rounded-full px-4 py-2 text-white gap-2"
        >
          <p>Add</p>
        </button>
      </div>
    </form>
  );
};

export default FormNote;
