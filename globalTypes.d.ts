declare module "url";

type Recipe = {
  id: number;
  author: string;
  recipeName: string;
  servings: number;
  prepTime: string;
  totalTime: string;
  ingredients: string[];
  instructions: string[];
};

type author = {
  id: string,
  name: string,
  recipes: number[]
  birthYear: number;
  bio: string;
};
