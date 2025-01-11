import { CATEGORIES } from './constants';
export type ActionType = "create" | "edit" | "delete";

export type Category = typeof CATEGORIES[number]

export type Note = {
  title: string;
  category: Category;
  description?: string;
  createdAt: Date;
};
