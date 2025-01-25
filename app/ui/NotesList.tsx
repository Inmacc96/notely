import NoteCard from "./NoteCard";
import { fetchNotes } from "../lib/data";

const NotesList = async () => {
  const allNotes = await fetchNotes();

  return (
    <section className="mt-8 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
      {allNotes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};

export default NotesList;
