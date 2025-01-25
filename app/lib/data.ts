import { sql } from "@vercel/postgres";
import { Note, NoteDTO } from "./type";
import { sortNotes } from "./utils";

export const fetchNotes = async (): Promise<Note[]> => {
  try {
    const data = await sql<NoteDTO>`SELECT * FROM notes`;
    return sortNotes(
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
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch notes data.");
  }
};
