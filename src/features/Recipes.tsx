import { TertiaryButton } from "@sb1/ffe-buttons-react";
import { CardBase } from "@sb1/ffe-cards-react";
import { Heading1, Heading3, Heading4, Paragraph } from "@sb1/ffe-core-react";
import { Checkbox, Input, InputGroup } from "@sb1/ffe-form-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { getRecipes } from "../api/getRecipes.ts";
import { useWeeklyPlan } from "../hooks/useWeeklyPlan.ts";
import { useLanguage, useTranslation } from "../i18n/LanguageContext.tsx";

export function Recipes() {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const { plan, isInPlan, toggleMeal, clearPlan } = useWeeklyPlan();
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
        <div style={{ maxWidth: "800px", marginBottom: "16px" }}>
          <InputGroup label={t("searchRecipes")}>
            <Input value={search} onChange={(e) => setSearch(e.target.value)} />
          </InputGroup>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            maxWidth: "800px",
          }}
        >
          {filtered?.length === 0 && <Paragraph>{t("noResults")}</Paragraph>}
          {filtered?.map((recipe) => (
            <CardBase
              key={recipe.id}
              style={{
                background: "#eaeaf6",
                width: "100%",
                border: isInPlan(recipe.id) ? "2px solid #073f83" : undefined,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Link
                  to="/recipe/$recipeId"
                  params={{ recipeId: recipe.id }}
                  style={{
                    flex: 1,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Heading3 lookLike={4}>{recipe.name}</Heading3>
                  <Paragraph>
                    {recipe.description.length > 50
                      ? recipe.description.slice(0, 100) + "..."
                      : recipe.description}
                  </Paragraph>
                </Link>
                <Checkbox
                  checked={isInPlan(recipe.id)}
                  onChange={() => toggleMeal(recipe.id)}
                >
                  {t("addToWeeklyPlan")}
                </Checkbox>
              </div>
            </CardBase>
          ))}
        </div>
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
            <Heading4 style={{ marginBottom: 0 }}>{t("weeklyPlan")}</Heading4>
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
