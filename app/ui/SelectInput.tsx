import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";

type SelectInputProps = {
  options: readonly string[];
  onSelect: (option: string) => void;
};

const SelectInput: React.FC<SelectInputProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

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
        <span
          className={`transition-transform duration-350 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ArrowDown />
        </span>
      </button>
      <ul
        className={`absolute z-10 mt-2 w-full max-h-56 overflow-auto rounded-md bg-backgroundMain border border-[#0000001F] py-4 shadow-lg transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
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
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectInput;