import { useMemo } from "react";
import { useStore } from "../lib/store";
import NoteCard from "./NoteCard";
import { sortNotes } from "../lib/utils";
import Image from "next/image";

const NotesList = () => {
  const notes = useStore((state) => state.notes);
  const sortedNotes = useMemo(() => sortNotes(notes), [notes]);
  const search = useStore((state) => state.search);
  const data = useMemo(() => {
    if (!search) return sortedNotes;
    return sortedNotes.filter((note) => note.title.includes(search));
  }, [search, sortedNotes]);

  if (data.length === 0) {
    const imageSrc = search ? "/search-results.svg" : "/empty-notes.svg";
    const imageAlt = search ? "no-search-results" : "empty-notes";
    const message = search ? "No notes found" : "You don't have any notes";

    return (
      <section className="pt-12 w-full flex flex-col items-center justify-center gap-6">
        <Image
          src={imageSrc}
          width={160}
          height={160}
          alt={imageAlt}
          priority={true}
        />
        <p className="text-gray-900 font-medium text-lg">{message}</p>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
      {data.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};

export default NotesList;
