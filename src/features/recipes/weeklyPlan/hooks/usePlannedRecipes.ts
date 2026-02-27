import type { Recipe } from "../../../../../server/types.ts";
import { usePlan } from "../../recipesList/hooks/usePlan.ts";

export function usePlannedRecipes(recipes: Recipe[] | undefined) {
  const { plan } = usePlan();

  const plannedRecipes = plan?.meals
    .map((meal) => {
      const recipe = recipes?.find((r) => r.id === meal.recipeId);
      return recipe ? { id: recipe.id, name: recipe.name } : null;
    })
    .filter(Boolean) as Recipe[] | undefined;

  return plannedRecipes;
}
