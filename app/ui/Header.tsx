import PlusIcon from "./icons/PlusIcon";
import SearchIcon from "./icons/SearchIcon";

const Header = () => {
  return (
    <div className="bg-white px-32 py-4 flex gap-6 max-w-screen-xl mx-auto">
      <div className="flex-1 text-[#212121] relative">
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
          className="cursor-default pl-10 pr-6 py-3 w-full bg-[#eee] rounded-md placeholder:text-[#212121] focus:outline-none appearance-none"
        />
      </div>
      <button className="bg-[#42A5F5] rounded-full px-5 py-3 flex items-center text-white gap-2 hover:bg-[#2196F3]">
        <PlusIcon />
        <p>Add</p>
      </button>
    </div>
  );
};

export default Header;
