import { useMemo } from "react";
import { useStore } from "../lib/store";
import NoteCard from "./NoteCard";
import { sortNotes } from "../lib/utils";
import Image from "next/image";

const NotesList = () => {
  const notes = useStore((state) => state.notes);
  const sortedNotes = useMemo(() => sortNotes(notes), [notes]);
  const search = useStore((state) => state.search);
  const filter = useStore((state) => state.filter);
  const data = useMemo(() => {
    const filteredNotes =
      filter === "All"
        ? sortedNotes
        : sortedNotes.filter((note) => note.category === filter);

    return filteredNotes.filter((note) => note.title.includes(search));
  }, [search, sortedNotes, filter]);

  if (data.length === 0) {
    const imageSrc = search ? "/search-results.svg" : "/empty-notes.svg";
    const imageAlt = search ? "no-search-results" : "empty-notes";
    const message = search ? "No notes found" : "You don't have any notes";

    return (
      <section className="mt-12 w-full flex flex-col items-center justify-center gap-6">
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
    <section className="mt-8 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
      {data.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};

export default NotesList;
