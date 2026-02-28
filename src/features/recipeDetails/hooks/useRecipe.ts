import { useQuery } from "@tanstack/react-query";
import { getRecipe } from "../../../api/getRecipe.ts";
import { useLanguage } from "../../../i18n/LanguageContext.tsx";

export function useRecipe(recipeId: string) {
  const { lang } = useLanguage();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipe", recipeId, lang],
    queryFn: () => getRecipe(recipeId, lang),
  });

  return { data, isLoading, isError };
}
