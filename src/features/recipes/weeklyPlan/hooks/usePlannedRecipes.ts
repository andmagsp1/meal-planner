import { useQuery } from "@tanstack/react-query";
import type { Recipe } from "../../../../../server/types.ts";
import { getRecipes } from "../../../../api/getRecipes.ts";
import { useLanguage } from "../../../../i18n/LanguageContext.tsx";
import { usePlan } from "../../../hooks/usePlan.ts";

export function usePlannedRecipes() {
  const { plan } = usePlan();
  const { lang } = useLanguage();

  const { data: recipes } = useQuery({
    queryKey: ["recipes", lang],
    queryFn: () => getRecipes(lang),
  });

  const plannedRecipes = plan?.meals
    .map((meal) => {
      const recipe = recipes?.find((r) => r.id === meal.recipeId);
      return recipe ? { id: recipe.id, name: recipe.name } : null;
    })
    .filter(Boolean) as Recipe[] | undefined;

  return plannedRecipes;
}
