import { sql } from "@vercel/postgres";
import { Category, Note, NoteDTO } from "./type";
import { sortNotes } from "./utils";

export const fetchNotes = async (
  query: string,
  categoryFilter?: Category
): Promise<Note[]> => {
  try {
    const data = await sql<NoteDTO>`SELECT * FROM notes`;
    const sortedNotes = sortNotes(
      data.rows.map((note) => ({
        id: note.id,
        title: note.title,
        category: note.category,
        description: note.description,
        completedAt:
          note.completed_at !== null ? new Date(note.completed_at) : undefined,
        updatedAt: new Date(note.updated_at),
      }))
    );
    // Filter
    const filteredNotes = !categoryFilter
      ? sortedNotes
      : sortedNotes.filter((note) => note.category === categoryFilter);
    // Search
    return filteredNotes.filter((note) => note.title.includes(query));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch notes data.");
  }
};
