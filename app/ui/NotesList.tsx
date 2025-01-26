import NoteCard from "./NoteCard";
import { fetchNotes } from "../lib/data";
import Image from "next/image";
import { Category } from "../lib/type";

type NotesListProps = {
  query: string;
  categoryFilter?: Category;
  showCompletedNotes: boolean;
};

const NotesList: React.FC<NotesListProps> = async ({
  query,
  categoryFilter,
  showCompletedNotes,
}) => {
  const notes = await fetchNotes(query, showCompletedNotes, categoryFilter);

  if (notes.length === 0) {
    const imageSrc = query ? "/search-results.svg" : "/empty-notes.svg";
    const imageAlt = query ? "no-search-results" : "empty-notes";
    const message = query
      ? "No notes found"
      : showCompletedNotes
      ? "You don't have any completed notes"
      : "You don't have any notes";

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
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};

export default NotesList;
