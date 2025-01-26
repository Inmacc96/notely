import { sql } from "@vercel/postgres";
import { Note, NoteDTO } from "./type";
import { sortNotes } from "./utils";

export const fetchNotes = async (query: string): Promise<Note[]> => {
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
    return sortedNotes.filter((note) => note.title.includes(query));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch notes data.");
  }
};
