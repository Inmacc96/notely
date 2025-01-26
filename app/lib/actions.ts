"use server";
import { z } from "zod";
import { CATEGORIES } from "./constants";
import { sql } from "@vercel/postgres";
import { NoteFormData } from "../ui/FormNote";
import { revalidatePath } from "next/cache";

const NoteScheme = z.object({
  title: z.string({ invalid_type_error: "This field is required" }),
  category: z.enum(CATEGORIES),
  description: z.string(),
});

export const addNote = async (formData: NoteFormData) => {
  const validatedFields = NoteScheme.safeParse(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Note",
    };
  }

  const { title, category, description } = validatedFields.data;

  try {
    await sql`
    INSERT INTO notes(title,category,description)
    VALUES (${title},${category},${description})
    `;
  } catch (err) {
    console.error(err);
    return {
      message: "Database Error: Failed to Create Note.",
    };
  }
  revalidatePath("/");
};

export const editNote = async (noteId: string, formData: NoteFormData) => {
  const validatedFields = NoteScheme.safeParse(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Edit Note",
    };
  }

  const { title, category, description } = validatedFields.data;
  const updatedAt = new Date().toISOString();

  try {
    await sql`
    UPDATE notes
    SET title=${title},category=${category},description=${description},updated_at=${updatedAt}
    WHERE id=${noteId}
    `;
  } catch (err) {
    console.error(err);
    return {
      message: "Database Error: Failed to Edit Note.",
    };
  }
  revalidatePath("/");
};

export const deleteNote = async (noteId: string) => {
  try {
    await sql`DELETE FROM notes WHERE id=${noteId}`;
  } catch (err) {
    console.error(err);
    return {
      message: "Database Error: Failed to Delete Note.",
    };
  }
  revalidatePath("/");
};
