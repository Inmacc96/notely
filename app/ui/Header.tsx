"use client";
import { useStore } from "../lib/store";
import AddNoteButton from "./AddNoteButton";
import SearchIcon from "./icons/SearchIcon";

const Header = () => {
  const search = useStore((state) => state.search);
  const setSearch = useStore((state) => state.setSearch);

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
            type="search"
            placeholder="Search"
            className="cursor-default pl-10 pr-6 py-3 w-full bg-gray-200 rounded-md placeholder:text-gray-900-87 focus:outline-none appearance-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <AddNoteButton />
      </div>
    </header>
  );
};

export default Header;
