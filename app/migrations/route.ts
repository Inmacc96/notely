import { sql } from "@vercel/postgres";

const createNoteTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS notes (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        description TEXT,
        completed_at TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;
};

export const GET = async () => {
  try {
    await createNoteTable();
    return Response.json({ message: "Notes table created successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
