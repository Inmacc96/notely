"use client";
import { useSearchParams, useRouter } from "next/navigation";
import SearchIcon from "./icons/SearchIcon";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }
    router.replace(`?${params.toString()}`);
  }, 300);

  return (
    <div className="flex-1 text-gray-900-87 relative">
      <label
        htmlFor="search"
        className="absolute inset-y-0 flex items-center pl-3 pointer-events-none"
      >
        <SearchIcon />
      </label>
      <input
        id="search"
        name="search"
        type="search"
        placeholder="Search"
        className="cursor-default pl-10 pr-6 py-3 w-full bg-gray-200 rounded-md placeholder:text-gray-900-87 focus:outline-none appearance-none"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default SearchBar;
