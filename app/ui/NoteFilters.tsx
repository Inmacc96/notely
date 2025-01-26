"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES } from "../lib/constants";
import { Category } from "../lib/type";

const NoteFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filter = searchParams.get("category") ?? "All";

  const handleFilter = (category: Category | "All") => {
    const params = new URLSearchParams(searchParams);
    if (category !== "All") {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.replace(`?${params.toString()}`);
  };

  return (
    <div>
      {(["All", ...CATEGORIES] as const).map((category) => (
        <button
          key={category}
          onClick={() => handleFilter(category)}
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
