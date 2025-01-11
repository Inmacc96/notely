import NotesList from "./NotesList";

const NotesView = () => {
  return (
    <main className="flex-1 overflow-y-scroll bg-gray-200 p-4">
      <NotesList />
    </main>
  );
};

export default NotesView;
