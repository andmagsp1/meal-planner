import type { Recipe } from "../../server/types.ts";

export const getRecipe = async (recipeId: string, lang: string): Promise<Recipe> => {
  const response = await fetch(
    `http://localhost:3001/api/recipes/${recipeId}?lang=${lang}`,
  );
  return await response.json();
};
