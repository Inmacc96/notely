import { useMemo } from "react";
import { useStore } from "../lib/store";
import NoteCard from "./NoteCard";
import { sortNotes } from "../lib/utils";

const NotesList = () => {
  const notes = useStore((state) => state.notes);
  const sortedNotes = useMemo(() => sortNotes(notes), [notes]);
  const search = useStore((state) => state.search);
  const data = useMemo(() => {
    if (!search) return sortedNotes;
    return sortedNotes.filter((note) => note.title.includes(search));
  }, [search, sortedNotes]);

  if (data.length === 0 && search)
    return (
      <section>
        <p>No notes found</p>
      </section>
    );

  return (
    <section className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
      {data.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};

export default NotesList;
