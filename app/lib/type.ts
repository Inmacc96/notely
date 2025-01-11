import { CATEGORIES } from "./constants";
export type ActionType = "create" | "edit" | "delete";

export type Category = (typeof CATEGORIES)[number];

export type Note = {
  id: string;
  title: string;
  category: Category;
  description?: string;
  updatedAt: Date;
};
