import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getRecipes } from "../../../api/getRecipes.ts";
import { useLanguage } from "../../../i18n/LanguageContext.tsx";

export function useRecipes() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");

  const { data, isError, isLoading } = useQuery({
    queryKey: ["recipes", lang],
    queryFn: () => getRecipes(lang),
  });

  const filtered = data?.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()),
  );

  return { recipes: filtered, isError, isLoading, search, setSearch };
}
