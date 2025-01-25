import { CATEGORIES } from "./constants";
export type ActionType = "create" | "edit" | "delete";

export type Category = (typeof CATEGORIES)[number];

export type NoteDTO = {
  id: string;
  title: string;
  category: Category;
  description: string;
  completed_at: Date | null;
  updated_at: Date;
};

export type Note = {
  id: string;
  title: string;
  category: Category;
  description?: string;
  completedAt?: Date;
  updatedAt: Date;
};
