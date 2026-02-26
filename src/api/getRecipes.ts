import type { Recipe } from "../../server/types.ts";

export const getRecipes = async (lang: string): Promise<Recipe[]> => {
  const url = `http://localhost:3001/api/recipes?lang=${lang}`;
  const response = await fetch(url);
  return await response.json();
};
