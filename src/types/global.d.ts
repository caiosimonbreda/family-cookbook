declare module "url";

export interface Recipe {
  id: number;
  author: string;
  recipeName: string;
  servings: number;
  prepTime: string;
  totalTime: string;
  ingredients: string[];
  instructions: string[];
}

export interface Author {
  id: string;
  name: string;
  recipes: number[];
  birthYear: number;
  bio: string;
}