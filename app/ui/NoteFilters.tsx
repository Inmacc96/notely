import { CATEGORIES } from "../lib/constants";

const NoteFilters = () => {
  const active = "All";
  return (
    <div>
      {["All", ...CATEGORIES].map((category) => (
        <button
          key={category}
          className={`w-[100px] py-2 uppercase font-medium text-tracking-widest relative ${
            active === category
              ? "text-blue-400"
              : "text-gray-600 hover:text-gray-900-87"
          }`}
        >
          {category}
          <span
            className={`absolute left-1/2 transform -translate-x-1/2 w-full ${
              active === category
                ? "h-[2px] bg-blue-400 rounded-full bottom-[-1px]"
                : "h-[1px] bg-black-12 bottom-0"
            }`}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default NoteFilters;
