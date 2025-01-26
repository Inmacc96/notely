import AddNoteButton from "./AddNoteButton";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="shadow-md bg-white">
      <div className="flex gap-6 max-w-screen-xl mx-auto px-6 py-4">
        <SearchBar />
        <AddNoteButton />
      </div>
    </header>
  );
};

export default Header;
