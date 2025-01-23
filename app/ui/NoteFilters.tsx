import { CATEGORIES } from "../lib/constants";
import { useStore } from "../lib/store";

const NoteFilters = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);

  return (
    <div>
      {(["All", ...CATEGORIES] as const).map((category) => (
        <button
          key={category}
          onClick={() => {
            setFilter(category);
          }}
          className={`w-[100px] py-2 uppercase font-medium text-tracking-widest relative ${
            filter === category
              ? "text-blue-400"
              : "text-gray-600 hover:text-gray-900-87"
          }`}
        >
          {category}
          <span
            className={`absolute left-1/2 transform -translate-x-1/2 w-full ${
              filter === category
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
