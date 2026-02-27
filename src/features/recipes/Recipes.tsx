import { TertiaryButton } from "@sb1/ffe-buttons-react";
import { CardBase } from "@sb1/ffe-cards-react";
import { Heading1, Heading2, Paragraph } from "@sb1/ffe-core-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { getRecipes } from "../../api/getRecipes.ts";
import { clearAllMeals, getWeeklyPlan } from "../../api/weeklyPlan.ts";
import { useLanguage, useTranslation } from "../../i18n/LanguageContext.tsx";
import { RecipesList } from "./recipesList/RecipesList.tsx";
import { SearchRecipes } from "./searchRecipes/SearchRecipes.tsx";

const PLAN_ID = "1";

export function Recipes() {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const queryClient = useQueryClient();

  const { data: plan } = useQuery({
    queryKey: ["weeklyPlan"],
    queryFn: () => getWeeklyPlan(PLAN_ID),
  });

  const clearPlanMutation = useMutation({
    mutationFn: () => clearAllMeals(PLAN_ID),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["weeklyPlan"] }),
  });

  const clearPlan = () => clearPlanMutation.mutate();

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

  const plannedRecipes = plan?.meals
    .map((meal) => {
      const recipe = data?.find((r) => r.id === meal.recipeId);
      return recipe ? { id: recipe.id, name: recipe.name } : null;
    })
    .filter(Boolean) as { id: string; name: string }[] | undefined;

  return (
    <div style={{ display: "flex", gap: "64px", alignItems: "flex-start" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <Heading1 lookLike={2}>{t("recipes")}</Heading1>
        <SearchRecipes search={search} setSearch={setSearch} />
        <RecipesList filteredList={filtered} />
      </div>
      <div
        style={{
          width: 300,
          flexShrink: 0,
          position: "sticky",
          top: 16,
        }}
      >
        <CardBase style={{ background: "#e5f0f5", minHeight: "340px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Heading2 lookLike={4} style={{ marginBottom: 0 }}>
              {t("weeklyPlan")}
            </Heading2>
            {plannedRecipes && plannedRecipes.length > 0 && (
              <TertiaryButton
                onClick={clearPlan}
                style={{ position: "relative", top: "-2px" }}
              >
                {t("resetPlan")}
              </TertiaryButton>
            )}
          </div>
          {!plannedRecipes || plannedRecipes.length === 0 ? (
            <Paragraph style={{ marginTop: "1rem" }}>
              {t("noMealsInPlan")}
            </Paragraph>
          ) : (
            <ul style={{ padding: "8px", margin: 0 }}>
              {plannedRecipes.map((recipe) => (
                <li key={recipe.id} style={{ padding: "4px 0" }}>
                  <Link to="/recipe/$recipeId" params={{ recipeId: recipe.id }}>
                    {recipe.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CardBase>
      </div>
    </div>
  );
}
