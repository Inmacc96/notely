import CompletedNotesFilter from "./CompletedNotesFilter";
import NoteFilters from "./NoteFilters";
import NotesList from "./NotesList";

const NotesView = () => {
  return (
    <main className="flex-1 overflow-y-scroll bg-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 py-4">
        <h1 className="text-gray-900 font-semibold text-2xl">Your notes</h1>
        <section className="w-full flex justify-between mt-4 items-center">
          <NoteFilters />
          <CompletedNotesFilter />
        </section>
        <NotesList />
      </div>
    </main>
  );
};

export default NotesView;
