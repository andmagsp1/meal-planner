import { Heading1 } from "@sb1/ffe-core-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getRecipes } from "../../api/getRecipes.ts";
import { useLanguage, useTranslation } from "../../i18n/LanguageContext.tsx";
import { RecipesList } from "./recipesList/RecipesList.tsx";
import { SearchRecipes } from "./searchRecipes/SearchRecipes.tsx";
import { WeeklyPlan } from "./weeklyPlan/WeeklyPlan.tsx";

export function Recipes() {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const { data, isError, isLoading } = useQuery({
    queryKey: ["recipes", lang],
    queryFn: () => getRecipes(lang),
  });

  if (isLoading) {
    return <div>{t("loading")}</div>;
  }

  if (isError) {
    return <div>{t("errorLoadingRecipes")}</div>;
  }

  const filtered = data?.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ display: "flex", gap: "64px", alignItems: "flex-start" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <Heading1 lookLike={2}>{t("recipes")}</Heading1>
        <SearchRecipes search={search} setSearch={setSearch} />
        <RecipesList filteredList={filtered} />
      </div>
      <WeeklyPlan recipes={data} />
    </div>
  );
}
