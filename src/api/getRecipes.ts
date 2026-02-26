import type { Recipe } from "../../server/types.ts";

export const getRecipes = async (): Promise<Recipe[]> => {
  const url = `http://localhost:3001/api/recipes`;
  const response = await fetch(url);
  return await response.json();
};
