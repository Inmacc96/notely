import { Note } from "./type";

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("es").format(date).replace(/\//g, ".");
};

export const sortNotes = (notes: Note[]) => {
  return notes.sort((a, b) => {
    if (!a.completedAt && !b.completedAt)
      return b.updatedAt.getTime() - a.updatedAt.getTime();
    if (a.completedAt && b.completedAt)
      return a.completedAt.getTime() - b.completedAt.getTime();
    return a.completedAt ? 1 : -1;
  });
};
