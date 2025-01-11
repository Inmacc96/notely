import { useStore } from "../lib/store";

const NotesView = () => {
  const notes = useStore((state) => state.notes);

  return (
    <main className="flex-1 overflow-y-scroll bg-backgroundMain">
      {notes.map((note) => (
        <div key={note.id}>{note.title}</div>
      ))}
    </main>
  );
};

export default NotesView;
