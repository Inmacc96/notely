import { useMemo } from "react";
import { useStore } from "../lib/store";
import NoteCard from "./NoteCard";

const NotesList = () => {
  const notes = useStore((state) => state.notes);
  const sortedNotes = useMemo(() => {
    return notes.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  }, [notes]);

  return (
    <section className="grid grid-cols-[repeat(3,_minmax(400px,_1fr))] gap-6">
      {sortedNotes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};

export default NotesList;
