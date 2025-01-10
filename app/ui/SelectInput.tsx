import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";
import ArrowUp from "./icons/ArrowUp";

type SelectInputProps = {
  options: string[];
};

const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`w-full flex justify-between items-center text-sm text-primary bg-backgroundMain focus:outline-none rounded-md font-medium p-3 border ${
          isOpen ? "border-[#42A5F5]" : "border-[#0000001F]"
        }`}
      >
        <p>{selectedOption}</p>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </button>
      <ul
        className={`absolute z-10 mt-2 w-full max-h-56 overflow-auto rounded-md bg-backgroundMain border border-[#0000001F] py-4 shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={`text-sm hover:bg-[#0000001F] hover:text-primary px-4 py-3 cursor-pointer font-medium ${
              option === selectedOption
                ? "bg-[#0000001F] text-primary"
                : "text-secondary"
            }`}
            onClick={() => {
              setSelectedOption(option);
              setIsOpen(false);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectInput;
