import NotesList from "./NotesList";

const NotesView = () => {
  return (
    <main className="flex-1 overflow-y-scroll bg-gray-200">
      <div className="max-w-screen-xl mx-auto space-y-4 px-6 py-4">
        <h1 className="text-gray-900 font-semibold text-2xl">Your notes</h1>
        <NotesList />
      </div>
    </main>
  );
};

export default NotesView;
