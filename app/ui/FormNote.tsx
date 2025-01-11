import { useState } from "react";
import { useStore } from "../lib/store";
import SelectInput from "./SelectInput";
import { Note } from "../lib/type";
import { CATEGORIES } from "../lib/constants";

type formData = Omit<Note, "createdAt">;

const FormNote: React.FC = () => {
  const closeModal = useStore((state) => state.closeModal);
  const [formData, setFormData] = useState<formData>({
    title: "",
    category: "Personal",
    description: "",
  });

  const handleChange = (property: keyof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [property]: value }));
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="grid grid-cols-2 gap-x-6 gap-y-7">
      <div className="col-span-1 space-y-2">
        <label className="text-sm font-bold text-primary" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Add title"
          className="block w-full text-sm text-primary bg-backgroundMain border border-[#0000001F] focus:outline-none focus:border-[#42A5F5] rounded-md placeholder:text-secondary font-medium p-3"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </div>
      <div className="col-span-1 space-y-2">
        <label className="text-sm font-bold text-primary">Category</label>
        <SelectInput
          options={CATEGORIES}
          onSelect={(option) => handleChange("category", option)}
        />
      </div>
      <div className="col-span-2 space-y-2">
        <div className="flex justify-between">
          <label
            className="text-sm font-bold text-primary"
            htmlFor="description"
          >
            Description{" "}
            <span className="text-secondary font-normal">{`(optional)`}</span>
          </label>
          <p className="text-secondary text-sm">{`${
            formData.description?.length ?? 0
          }/200`}</p>
        </div>
        <textarea
          id="description"
          placeholder="Add description"
          className="block w-full h-36 resize-none text-sm text-primary bg-backgroundMain border border-[#0000001F] focus:outline-none focus:border-[#42A5F5] rounded-md placeholder:text-secondary font-medium p-3"
          maxLength={200}
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>
      <div className="col-span-2 flex justify-end itemse-center gap-8">
        <button
          onClick={closeModal}
          className="text-[#656565] hover:text-[#212121DE]"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleClick}
          className="bg-[#42A5F5] hover:bg-[#2196F3] rounded-full px-4 py-2 text-white gap-2"
        >
          <p>Add</p>
        </button>
      </div>
    </form>
  );
};

export default FormNote;
