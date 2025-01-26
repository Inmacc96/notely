"use client";
import { useSearchParams, useRouter } from "next/navigation";
import AddNoteButton from "./AddNoteButton";
import SearchIcon from "./icons/SearchIcon";

const Header = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = (search: string) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }
    router.replace(`?${params.toString()}`);
  };

  return (
    <header className="shadow-md bg-white">
      <div className="flex gap-6 max-w-screen-xl mx-auto px-6 py-4">
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
        <AddNoteButton />
      </div>
    </header>
  );
};

export default Header;
