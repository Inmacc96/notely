import { useMemo } from "react";
import { useStore } from "../lib/store";
import NoteCard from "./NoteCard";

const NotesList = () => {
  const notes = useStore((state) => state.notes);
  const sortedNotes = useMemo(() => {
    return notes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }, [notes]);

  return (
    <section className="grid grid-cols-3 gap-6">
      {sortedNotes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};

export default NotesList;
